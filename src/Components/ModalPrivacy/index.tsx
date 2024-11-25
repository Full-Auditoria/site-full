import { ModalContent, ModalFooter, ModalHeader, ModalWrapper } from "./style";

interface ModalProps {
  title: string;
  content: string;
  onClose: () => void;
  onScroll: (e: React.UIEvent<HTMLDivElement>) => void;
}

export const Modal: React.FC<ModalProps> = ({ title, content, onClose, onScroll }) => {
  return (
    <ModalWrapper>
      <ModalHeader>{title}</ModalHeader>
      <ModalContent onScroll={onScroll}>
        {content}
      </ModalContent>
      <ModalFooter disabled={!content}>
        <button onClick={onClose}>Fechar</button>
      </ModalFooter>
    </ModalWrapper>
  );
};
