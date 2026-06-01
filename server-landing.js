/**
 * TJPI Selos — Landing Page Server
 * Serve a página de download estática.
 * Deploy no Render como Web Service (Free).
 */
const express = require('express');
const path    = require('path');

const app  = express();
const PORT = process.env.PORT || 3000;

// Serve tudo na raiz como estático (landing.html, .exe para download, etc.)
app.use(express.static(path.resolve(__dirname, 'public')));

// Qualquer rota cai na landing
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Landing page rodando em http://0.0.0.0:${PORT}`);
});
