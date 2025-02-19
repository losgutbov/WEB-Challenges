import React, { useState } from 'react';

function App() {
  const [numero, setNumero] = useState(null);

  const gerarNumero = () => {
    const numeroAleatorio = Math.floor(Math.random() * 101);
    setNumero(numeroAleatorio);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Gerador de Número Aleatório</h1>
      <button onClick={gerarNumero} style={{ padding: '10px 20px', fontSize: '1em' }}>
        Gerar Número
      </button>
      {numero !== null && (
        <p style={{ fontSize: '2em', fontWeight: 'bold', color: '#007bff' }}>
          Número gerado: {numero}
        </p>
      )}
    </div>
  );
}

export default App;