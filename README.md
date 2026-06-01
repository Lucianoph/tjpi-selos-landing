# TJPI Selos — Landing Page

Página de download, instalação e tutorial do aplicativo **TJPI Selos**.

## Estrutura do repositório

```
tjpi-selos-landing/
├── public/
│   ├── index.html          ← Página principal (renomeie landing.html para isso)
│   └── TJPI_Selos.exe      ← Coloque o .exe aqui para download direto
├── server-landing.js       ← Servidor Express
├── package.json
└── README.md
```

---

## Como fazer o deploy no Render

### 1. Criar o repositório no GitHub

1. Acesse [github.com](https://github.com) e faça login (ou crie conta nova)
2. Clique em **"New repository"**
3. Nome sugerido: `tjpi-selos-landing`
4. Marque como **Public**
5. Clique em **"Create repository"**

### 2. Subir os arquivos

Pela interface web do GitHub (sem precisar de Git):

1. Na página do repositório, clique em **"uploading an existing file"**
2. Arraste os arquivos:
   - `server-landing.js`
   - `package.json`
   - `README.md`
3. Clique em **"Commit changes"**
4. Crie a pasta `public/`:
   - Clique em **"Add file" → "Create new file"**
   - No campo do nome, digite: `public/index.html`
   - Cole o conteúdo do `landing.html` aqui
   - Clique em **"Commit changes"**

> **Dica:** Para subir o `.exe` diretamente no GitHub, vá em **Releases → Create a new release** e anexe o `.exe` lá. Atualize o link `href` no `index.html` para apontar para a URL do release.

### 3. Deploy no Render

1. Acesse [render.com](https://render.com) e crie uma conta nova (gratuita)
2. Clique em **"New +" → "Web Service"**
3. Conecte sua conta GitHub
4. Selecione o repositório `tjpi-selos-landing`
5. Configure assim:

| Campo | Valor |
|---|---|
| **Name** | `tjpi-selos-landing` |
| **Region** | Oregon (US West) |
| **Branch** | `main` |
| **Runtime** | `Node` |
| **Build Command** | `npm install` |
| **Start Command** | `npm start` |
| **Plan** | Free |

6. Clique em **"Create Web Service"**
7. Aguarde o deploy (cerca de 2 minutos)
8. Sua URL será: `https://tjpi-selos-landing.onrender.com`

---

## Como hospedar o .exe para download

### Opção A — GitHub Releases (recomendado)
1. No repositório, clique em **"Releases" → "Create a new release"**
2. Tag: `v2.0.0`
3. Anexe o arquivo `TJPI_Selos.exe`
4. Publique o release
5. Copie a URL do arquivo e atualize o `href` no `index.html`:
```html
<a href="https://github.com/SEU_USUARIO/tjpi-selos-landing/releases/download/v2.0.0/TJPI_Selos.exe" ...>
```

### Opção B — Pasta public/ (arquivos pequenos)
- Coloque o `.exe` dentro de `public/`
- O Express já serve automaticamente
- Link direto: `https://seu-app.onrender.com/TJPI_Selos.exe`

> ⚠️ O Render Free tem limite de 100MB por deploy. Use GitHub Releases para o `.exe`.

---

## Atualizar a página

1. Edite o `public/index.html` diretamente no GitHub
2. O Render faz redeploy automático em ~1 minuto

---

## Separação dos servidores

| Serviço | Repositório | URL |
|---|---|---|
| Auth Server (admin) | `tjpi-selos-server` | `https://servidor-selos.onrender.com` |
| Landing Page | `tjpi-selos-landing` | `https://tjpi-selos-landing.onrender.com` |
