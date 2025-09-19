# Installation Guide – FlexForge Fitness PWA

## 📌 Project Overview

FlexForge is a frontend-only Progressive Web App (PWA) for fitness tracking, nutrition management, and AI-powered coaching. This guide covers setup instructions to get the project running locally.

---

## 🖥️ System Requirements

* **Node.js**: v22.4.0
* **npm**: v10.8.1
* **Supported Browsers**: Chrome, Firefox, Edge (latest versions)
* **Operating System**: macOS, Windows, or Linux

> Note: No backend or database is required for this project.

---

## 1️⃣ Clone the Repository

```bash
git clone <your-repo-url>
cd <your-project-folder>
```

---

## 2️⃣ Install Dependencies

```bash
npm install
```

**Tips:**

* If you encounter version conflicts or peer dependency errors:

```bash
npm install --legacy-peer-deps
```

* If issues persist, remove existing modules and lock file:

```bash
rm -rf node_modules package-lock.json
npm install
```

---

## 3️⃣ Run the Development Server

```bash
npm run dev
```

* Open [http://localhost:5173](http://localhost:5173)
* Supports **Hot Module Replacement (HMR)** for live updates

---

## 4️⃣ Build for Production

```bash
npm run build
```

* Production files will be in the `dist/` folder

## 5️⃣ Preview Production Build

```bash
npm run preview
```

* Preview URL will be shown in terminal (default: `http://localhost:4173`)

---

## 6️⃣ Lint Code

```bash
npm run lint
```

* Automatically checks formatting and code quality
* To fix minor errors:

```bash
eslint . --fix
```

---

## ⚠️ Troubleshooting

1. **`npm install` fails**: Ensure Node.js and npm versions match the requirements. Use `--legacy-peer-deps` if necessary.
2. **`node_modules` issues**: Delete `node_modules` and `package-lock.json` then reinstall.
3. **Port conflicts**: Run `npm run dev -- --port 5174` to use a different port.
4. **Browser caching issues**: Clear cache or use incognito mode.
5. **HMR not updating**: Stop and restart the dev server.

---

## ✅ Notes

* No `.env` file is required at this stage.
* Mobile-first design; test on devices if possible.
* Follow Node.js and npm versions strictly to prevent dependency errors.

---

## 📞 Support

For further issues, create a GitHub issue including your environment (Node.js, npm, OS).
