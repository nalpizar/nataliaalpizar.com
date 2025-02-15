import React from 'react';
import Modal from 'react-modal';
import { InlineWidget } from 'react-calendly';
import './CalendyModal.scss';

Modal.setAppElement('#root'); // Set the root element for accessibility

interface CalendlyModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

const CalendlyModal: React.FC<CalendlyModalProps> = ({
  isOpen,
  onRequestClose,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="calendly-modal"
      overlayClassName="calendly-overlay"
    >
      <button className="close-button" onClick={onRequestClose}>
        Close
      </button>
      <InlineWidget url="https://calendly.com/natalpizarm" />
    </Modal>
  );
};

export default CalendlyModal;
