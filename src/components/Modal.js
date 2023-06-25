import React from 'react';

const Modal = ({ isOpen, onClose, content }) => {
  if (!isOpen) {
    return null;
  }

  const modalStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const modalContentStyle = {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '4px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
  };

  return (
    <div style={modalStyle}>
      <div style={modalContentStyle}>
        {content}
        <button onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
};

export default Modal;
