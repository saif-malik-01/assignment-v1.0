# 🧩 Assignment

A modern web application built using **Next.js**, **Tailwind CSS**, **ShadCN**, and **Framer Motion**, following clean and scalable architecture practices.

---

## 🚀 Tech Stack

- **Next.js** – React framework for SSR, SSG, and powerful routing.
- **Tailwind CSS** – Utility-first CSS framework for fast UI development.
- **ShadCN/UI** – Accessible and customizable UI component library.
- **Framer Motion** – Animation library for smooth and elegant transitions.
- **ESLint** – For maintaining code quality and consistency.
- **Prettier** – For automatic code formatting.

---

## 🧱 Project Structure

```

assignment/
│
├── public/                # Static assets (images, icons, etc.)
│   ├── fonts/             # contains custom fonts files
│   └── ...
│
├── app/                   # Next.js App Router structure
│   ├── layout.tsx
│   ├── page.tsx
|   ├── globals.css        # Global styling and theme variables
│   └── [pageName]/        # Route-specific logic and files
|
├── lib/
│   ├── util.ts            # contains reusable utility functions
│   └── fonts              # contains custom fonts configurations
│
├── components/            # Centralized component directory
│   ├── ui/                # UI elements (from ShadCN + custom components)
│   ├── global/            # Global components used across multiple pages
│   ├── [pageName]/        # Page-specific components (e.g., Home, Dashboard)
│
├── .eslintrc.js           # ESLint configuration
├── .prettierrc            # Prettier configuration
├── next.config.js         # Next.js configuration
├── tailwind.config.js     # Tailwind setup
└── package.json

```

---

## 🎨 Theming

Global theme configuration is managed in `app/globals.css`.  
You can define light/dark modes, color palettes, and typography rules there.  
ShadCN’s theming utilities are also integrated for consistent UI styling.

---

## ⚙️ Development

### 1. Install dependencies

```bash
npm install
```

### 2. Run the development server

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Lint and format code

```bash
npm run lint
npm run format
```

---

## 📦 Build for Production

```bash
npm run build
npm run start
```

---

## 🧹 Best Practices

- Store all images and static files under `public/`, preferably optimized in `.webp` format.
- Keep page-specific components in their own folders inside `components/`.
- Use `ui/` folder for shared UI elements and design primitives.
- Maintain consistent code style using ESLint + Prettier.
- Use motion effects sparingly and purposefully with **Framer Motion**.

---

## 🧑‍💻 Author

**Project Name:** Assignment
**Built With:** ❤️ using Next.js, Tailwind, and ShadCN

---

## 📄 License

This project is licensed under the **MIT License**.
Feel free to use and modify it for your own learning or projects.
