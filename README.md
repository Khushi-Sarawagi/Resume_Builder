# 🧑‍💼 Resume Builder

A dynamic, responsive **Resume Builder** built with React + Vite that allows users to input their personal and professional details, preview their resume in real-time, add custom sections, and download the final output as a polished **PDF**.

---

## 🚀 Features

- ⚡ Built with React + Vite
- 🌙 Dark Mode Support
- ✍️ Form to input:
  - Name
  - Bio
  - Skills
  - Social links (GitHub, LinkedIn)
  - Unlimited custom sections (with title and content)
- 👀 Live Resume Preview
- 📄 Download as PDF using `html2pdf.js`
- 🎨 Smooth Animations using `daisyui`
- 🔁 LocalStorage Persistence
- 🧱 Fully modular, responsive layout

---

## 🧑‍💻 Tech Stack

- **Frontend**: React, Vite
- **Styling**: CSS (with variables for dark mode),DaisyUI
- **Animation**: DaisyUI, CSS using keyframes
- **PDF Export**: html2pdf.js
- **Routing**: React Router

---

## 🛠️ Setup Instructions

1. **Clone the repository**

```bash
git clone https://github.com/your-username/resume-builder.git
cd resume-builder

```

2.	Install dependencies

```bash
npm install
```

3.	Run the development server

```bash
npm run dev
```
4.	Build for production

```bash
npm run build

```


## 📸 Screenshots




---


## 📁 Folder Structure (simplified)



``` bash

src/
├── pages/
│   ├── Home.jsx
│   ├── FormPage.jsx
│   ├── PreviewPage.jsx
│   └── PortfolioPage.jsx
│   ├── Home.css
│   ├── FormPage.css
│   ├── PreviewPage.css
├── App.jsx
├── main.jsx
└── App.css


```

---


## 🙌 Acknowledgements


Built with ❤️ by Khushi Sarawagi as part of the end-term project.
Thanks to mentors and peers who supported and inspired this journey!


---


## 📬 Contact


Feel free to connect with me on:
  -	GitHub: https://github.com/Khushi-Sarawagi
  -	LinkedIn: www.linkedin.com/in/khushi-sarawagi


 ---

 
## 📜 License


This project is open-source and free to use!


---




# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
