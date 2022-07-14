import React, { useRef } from "react";
import {
  ModalContent,
  Overlay,
  ModalBox,
  Close,
  ModalTitle,
  Container,
} from "./styles";
import { BiX } from "react-icons/bi";

interface ModalProps {
  title?: string;
  onClose: () => void;
  isOpen: boolean;
  children: React.ReactNode;
}

export const Modal = ({ title, onClose, isOpen, children }: ModalProps) => {
  const overlayRef = useRef(null);

  const handleOverlayClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if (e.target === overlayRef.current) {
      onClose();
    }
  };

  return isOpen ? (
    <Container>
      <Overlay ref={overlayRef} onClick={handleOverlayClick} />
      <ModalBox>
        <Close>
          <BiX onClick={onClose} />
        </Close>
        <ModalTitle>{title}</ModalTitle>
        <ModalContent>{children}</ModalContent>
      </ModalBox>
    </Container>
  ) : null;
};
