import React from "react";
import { ModalContent, ModalOverlay } from "./style";
import irpj from "../../assets/irpj.png";
import imobiliario from "../../assets/imobiliario.jpg";
import vaf from "../../assets/vaf.jpg";
import dividaAtiva from "../../assets/dividaativa.png";
import credito from "../../assets/credito.jpg";
import tecnologia from "../../assets/tecnologia.jpg";

interface ServiceModalProps {
  service: {
    title: string;
    description: string;
    img?: string;
  };
  isOpen: boolean;
  onClose: () => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({
  service,
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  const handleEmailClick = () => {
    window.location.href = `mailto:administrativo@fullauditoria20.com.br?subject=Solicitação%20de%20Serviço%20${service.title}`;
  };

  let serviceImage = "";
  if (service.title === "RECUPERAÇÃODO IRPJ") serviceImage = irpj;
  if (service.title === "RECUPERAÇÃO DA DIVIDA ATIVA")
    serviceImage = dividaAtiva;
  if (service.title === "AUDITORIA E RECUPERAÇÃO VAF") serviceImage = vaf;
  if (service.title === "REVISÃO DE CRÉDITOS TRIBUTÁRIOS")
    serviceImage = credito;
  if (service.title === "INOVAÇÃO EM TECNOLOGIA DE SISTEMAS")
    serviceImage = tecnologia;
  if (service.title === "RECADASTRAMENTO IMOBILIÁRIO")
    serviceImage = imobiliario;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
          <div className="textElement">
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </div>
          {serviceImage && (
            <img
              src={serviceImage}
              alt={service.title}
              style={{ maxWidth: "50%", borderRadius: "8px" }}
            />
          )}
        </div>
        <button onClick={handleEmailClick}>Contratar</button>
      </ModalContent>
    </ModalOverlay>
  );
};
