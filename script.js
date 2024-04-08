document.addEventListener("DOMContentLoaded", function() {
    // Array de cidades (pode ser obtido de uma API ou de um arquivo separado)
    const cities = ["Cidade 1", "Cidade 2", "Cidade 3"];
  
    document.getElementById('start-btn').addEventListener('click', function() {
      document.getElementById('start-screen').style.display = 'none';
      document.getElementById('select-box').style.display = 'block';
    });
  
    document.getElementById('next-btn').addEventListener('click', function() {
      document.getElementById('select-box').style.display = 'none';
      document.getElementById('paste-screen').style.display = 'block';
    });
  
    document.getElementById('process-btn').addEventListener('click', function() {
      const data = document.getElementById('paste-data').value;
      // Aqui você pode enviar os dados para uma API
      console.log('Dados coletados:', data);
      // Simulação: exibindo operadores fictícios
      document.getElementById('paste-screen').style.display = 'none';
      document.getElementById('operadores-screen').style.display = 'block';
      const operadoresList = document.getElementById('operadores-list');
      const operadores = ['Operador 1', 'Operador 2', 'Operador 3'];
      operadoresList.innerHTML = '';
      operadores.forEach(operador => {
        const li = document.createElement('li');
        li.textContent = operador;
        operadoresList.appendChild(li);
      });
  
      // Adicionar funcionalidade para gerar o QR Code apenas na última parte
      if (!document.getElementById('generate-qrcode-btn')) {
        const qrCodeContainer = document.getElementById('qrcode-container');
        const qrCodeCanvas = document.createElement('canvas');
        qrCodeCanvas.id = 'qrcode-canvas';
        qrCodeContainer.appendChild(qrCodeCanvas);
        
        const generateQRCodeBtn = document.createElement('button');
        generateQRCodeBtn.id = 'generate-qrcode-btn';
        generateQRCodeBtn.textContent = 'Gerar QR Code';
        generateQRCodeBtn.addEventListener('click', function() {
          const qrCodeData = operadores.join(', '); // Concatena os operadores em uma string separada por vírgula
          generateQRCode(qrCodeData, qrCodeCanvas);
        });
        qrCodeContainer.appendChild(generateQRCodeBtn);
      }
    });
  
    function generateQRCode(data, canvas) {
      new QRCode(canvas, {
        text: data,
        width: 200,
        height: 200
      });
    }
  });
  