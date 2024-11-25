import React from "react";
import { ModalContent, ModalOverlay } from "./style";


interface ServiceModalProps {
  service: {
    title: string;
    description: string;
    img?: string;
  };
  isOpen: boolean;
  onClose: () => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({ service, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <h2>{service.title}</h2>
        <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
          {service.img && (
            <img
              src={`${service.img}`}
              alt={service.title}
              style={{ maxWidth: "150px", borderRadius: "8px" }}
            />
          )}
          <p>{service.description}</p>
        </div>
        <button onClick={onClose}>Fechar</button>
      </ModalContent>
    </ModalOverlay>
  );
};
