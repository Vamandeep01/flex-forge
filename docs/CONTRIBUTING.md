# Contributing Guide – FlexForge Fitness PWA

We welcome contributions to FlexForge! This guide explains how you can help, the workflow, and coding standards.

---

## 1️⃣ Reporting Issues

* Use the **Issues** tab to report bugs or suggest features.
* Include:

  * Steps to reproduce
  * Screenshots if relevant
  * Expected vs actual behavior

---

## 2️⃣ Fork, Clone, and Branch Workflow

1. Fork the repository to your GitHub account
2. Clone your fork locally:

```bash
git clone <your-fork-url>
cd <your-project-folder>
```

3. Create a new branch:

```bash
git checkout -b feature/your-feature-name
```

4. Make changes and commit them with clear messages:

```bash
git add .
git commit -m "feat: added new workout tracking component"
```

5. Push your branch:

```bash
git push origin feature/your-feature-name
```

6. Open a Pull Request on the main repository.

---

## 3️⃣ Coding Standards

* Use **React.js with TypeScript** conventions.
* Maintain **functional components** unless a class component is required.
* Use **Tailwind CSS** for styling.
* Keep components modular and reusable.
* Run lint before committing:

```bash
npm run lint
```

* Follow **commit message conventions** (feat, fix, chore, docs, refactor).

---

## 4️⃣ Pull Request Guidelines

* Provide a **descriptive title** and summary
* Link related **issues**
* Ensure the code builds and passes linting
* Include screenshots if UI changes were made
* Request **review** from at least one team member

---

## 5️⃣ Best Practices

* Keep PRs **small and focused**
* Write **clear commit messages**
* Test your changes thoroughly before pushing
* Document any **new features or breaking changes** in `README.md` or docs

---

## 6️⃣ Asking Questions

* Use **GitHub Discussions** or comments on PRs
* Be respectful and concise
* Provide context for quicker help

---

## ✅ Summary

Following this guide ensures your contributions are smooth, reviewed quickly, and maintain the project’s quality.
