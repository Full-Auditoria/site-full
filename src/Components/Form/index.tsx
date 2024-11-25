import { useState } from "react";
import { Container } from "./style";
import { Modal } from "../ModalPrivacy";
import { PrivacyPolicy } from "../Mock";
import emailjs from "emailjs-com";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";

const validationSchema = Yup.object({
  fullName: Yup.string()
  .min(10, "Nome Completo deve ter no mínimo 10 caracteres")
  .required("Campo obrigatório"),
email: Yup.string().email("Email inválido").required("Campo obrigatório"),
areaOfExpertise: Yup.string().required("Campo obrigatório"),
message: Yup.string().required("Campo obrigatório")
});

export default function ContactForm({ list }: { list: string[] }) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isModalClosed, setIsModalClosed] = useState(false);

  const initialValues = {
    fullName: "",
    email: "",
    areaOfExpertise: "",
    message: "",
  };

  const handleMouseEnter = () => {
    if (!isModalClosed) {
      setIsModalVisible(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isModalClosed) {
      setIsModalVisible(false);
    }
  };

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const contentHeight = e.currentTarget.scrollHeight;
    const scrollPosition = e.currentTarget.scrollTop;
    const clientHeight = e.currentTarget.clientHeight;

    if (scrollPosition + clientHeight >= contentHeight) {
      setHasScrolled(true);
    }
  };

  const handleModalClose = () => {
    setIsModalClosed(true);
    setIsModalVisible(false);
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setIsCheckboxChecked(event.target.checked);

  const handleSubmit = (values: typeof initialValues, { setSubmitting, resetForm }: any) => {
    emailjs
      .send(
      "service_meac4r9",
        "template_k7r5q7l",
        values,
        "B-T968QoF0NGeh8rb"
      )
      .then(() => {
        alert("Formulário enviado com sucesso!");
        resetForm();
      })
      .catch(() => {
        alert("Ocorreu um erro ao enviar o formulário. Tente novamente.");
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  return (
    <Container>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form id="trabalheConoscoForm">
            <Field type="text" name="fullName" placeholder="Nome" />
            <ErrorMessage name="fullName" component="div" className="error" />

            <Field type="email" name="email" placeholder="Email" />
            <ErrorMessage name="email" component="div" className="error" />

            <Field as="textarea" name="message" placeholder="Mensagem..." />
            <ErrorMessage name="message" component="div" className="error" />

            <Field as="select" name="areaOfExpertise">
              <option value="" label="Selecione uma especialização" />
              {list.map((item) => (
                <option key={item} value={item} label={item} />
              ))}
            </Field>
            <ErrorMessage name="areaOfExpertise" component="div" className="error" />

            <div
              className="footerForm"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="containerCheckbox">
                <input
                  type="checkbox"
                  name="terms"
                  id="checkbox"
                  onChange={handleCheckboxChange}
                  disabled={!hasScrolled}
                />
                <label htmlFor="checkbox">Li e aceito os termos de uso</label>

                {isModalVisible && !isModalClosed && (
                  <Modal
                    title="Termos de Uso"
                    content={PrivacyPolicy}
                    onClose={handleModalClose}
                    onScroll={handleScroll}
                  />
                )}
              </div>
              <button type="submit" disabled={!isCheckboxChecked || isSubmitting}>
                Enviar
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </Container>
  );
}
