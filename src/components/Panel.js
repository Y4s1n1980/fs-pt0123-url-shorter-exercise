import React, { useState } from 'react';

const Panel = () => {
  const [url, setUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');

  const handleGenerateUrl = () => {
    // falta lógica para generar la URL acortada
    
    

    // Generar la URL acortada
    const generatedUrl = 'https:';

    // Actualizar el estado con la URL acortada generada
    setShortUrl(generatedUrl);
  };

  const panelStyle = {
    margin: '16px',
    padding: '16px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    maxWidth: '400px',
  };

  const inputStyle = {
    marginBottom: '8px',
    padding: '8px',
    width: '100%',
  };

  const buttonStyle = {
    marginBottom: '8px',
    padding: '8px 16px',
    background: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  };

  const pStyle = {
    marginBottom: '8px',
  };

  return (
    <div style={panelStyle}>
      <h2>Panel</h2>
      <input type="text" placeholder="Introduce la URL" value={url} onChange={(e) => setUrl(e.target.value)} style={inputStyle} />
      <button onClick={handleGenerateUrl} style={buttonStyle}>Generar</button>
      <p style={pStyle}>URL acortada: {shortUrl}</p>
      {/* Aquí iría la lista de URL acortadas */}
    </div>
  );
};

export default Panel;

