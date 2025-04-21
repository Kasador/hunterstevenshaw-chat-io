# Overview to <br> **hunterstevenshaw-chat-io**

[![Development Tools](https://skillicons.dev/icons?i=vscode,windows,apple,github)](https://skillicons.dev)

### Curent Preview of Project

<img src="https://github.com/user-attachments/assets/dcb3520e-a94e-4c44-92ab-647750a9b2d5" width="500" />

### Feat: Added change background

<img src="https://github.com/user-attachments/assets/3e918db9-147e-4a34-9f57-085b7100e4ac" width="500" />

[![Netlify Status](https://api.netlify.com/api/v1/badges/3cf6e273-2a60-4856-bd7e-e1924380580f/deploy-status)](https://app.netlify.com/sites/hunterstevenshaw-chat-io/deploys)

**Github:** [https://github.com/Kasador/hunterstevenshaw-chat-io](https://github.com/Kasador/hunterstevenshaw-chat-io)

**Live URL:** [https://hunterstevenshaw-chat-io.netlify.app/](https://hunterstevenshaw-chat-io.netlify.app/)

## 🖥️ chat-io

This is a remake of my [7 year old chat-io](https://github.com/Kasador/chat-io) chat application. This will be using React + Vite and the MERN stack for making my own RESTFUL API. Development of this chat application will be using the [stocket.io low-latency communication](https://socket.io/how-to/use-with-react), connecting the data to my API and then from there, storing the data into MongoDB. This app is built using _**npm create vite@latest**_ for the frontend and _**NodeJS/ExpressJS**_ for the backend. Thus tech stack is designed for simplicity, performance, and ease of content management for future development and maintenance.

## Tech Stack Used - **MERN**

[![Development Tools](https://skillicons.dev/icons?i=html,css,javascript,react)](https://skillicons.dev)

[![Development Tools](https://skillicons.dev/icons?i=typescript,tailwindcss,netlify,heroku)](https://skillicons.dev)

[![Development Tools](https://skillicons.dev/icons?i=mongodb,nodejs,expressjs,vite)](https://skillicons.dev)

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
