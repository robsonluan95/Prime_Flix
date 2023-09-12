import React, { useState } from 'react';

const Popup = () => {

  return (
    <div>
      <button onClick={togglePopup}>Abrir Pop-up</button>
      {isOpen && (
        <div className="popup">
          <div className="popup-inner">
            <button onClick={togglePopup}>Fechar Pop-up</button>
            <p>Conteúdo do Pop-up</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Popup;