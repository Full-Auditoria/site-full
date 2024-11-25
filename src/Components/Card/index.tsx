import React, { useState } from "react";
import { Service } from "../Mock";
import { Container } from "./style";
import { ServiceModal } from "../ServiceModal";


export default function Card({ service }: { service: Service }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <Container onClick={handleModalToggle}>
        <p>{service.title}</p>
      </Container>

      <ServiceModal
        service={service}
        isOpen={isModalOpen}
        onClose={handleModalToggle}
      />
    </>
  );
}
