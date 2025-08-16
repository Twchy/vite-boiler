# React + Vite + TypeScript Boilerplate

A modern, minimal React application boilerplate built with Vite, TypeScript, and Tailwind CSS. Perfect for quickly starting new projects with best practices and modern tooling.

## ✨ Features

- ⚡ **Vite** - Lightning fast build tool and development server
- ⚛️ **React 18** - Latest React with hooks and concurrent features
- 🔷 **TypeScript** - Type-safe development experience
- 🎨 **Tailwind CSS** - Utility-first CSS framework with Inter font
- 🧭 **React Router** - Client-side routing
- 🎯 **Lucide React** - Beautiful, customizable icons
- 📏 **ESLint** - Code linting with TypeScript support
- 🏗️ **Optimized Build** - Tree shaking, code splitting, and minification
- 📱 **Responsive** - Mobile-first responsive design

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone or download this boilerplate**
   ```bash
   git clone https://github.com/twchy/vite-boiler
   cd your-project-name
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 📝 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint to check code quality

## 📁 Project Structure

```
├── public/
│   └── favicon.svg          # App favicon
├── src/
│   ├── components/          # React components
│   │   ├── Home.tsx         # Homepage component
│   │   ├── About.tsx        # About page
│   │   └── NotFound.tsx     # 404 page
│   ├── App.tsx              # Main app component
│   ├── index.css            # Global styles with Tailwind
│   ├── main.tsx             # App entry point
│   └── vite-env.d.ts        # Vite type definitions
├── eslint.config.js         # ESLint configuration
├── postcss.config.js        # PostCSS configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
├── tsconfig.app.json        # App-specific TypeScript config
├── tsconfig.node.json       # Node-specific TypeScript config
└── vite.config.ts           # Vite configuration
```

## 🎨 Customization

### Update App Information
1. **Package Name**: Edit `name` in `package.json`
2. **App Title**: Update `<title>` in `index.html`
3. **Meta Description**: Update meta tags in `index.html`
4. **Favicon**: Replace `public/favicon.svg`

### Add Dependencies
```bash
# Example: Add a state management library
npm install zustand

# Example: Add a UI component library
npm install @headlessui/react
```

### Styling
- Modify `tailwind.config.js` to customize your design system
- Add global styles in `src/index.css`
- Use Tailwind utility classes in components

### Routing
- Add new routes in `src/App.tsx`
- Create new page components in `src/components/`

## 🏗️ Production Build

The build is optimized for performance:
- **Tree shaking** - Removes unused code
- **Code splitting** - Separates vendor and app code
- **Minification** - Reduces bundle size
- **Terser optimization** - Removes console logs and debug code

```bash
npm run build
```

Build output will be in the `dist/` folder.

## 🔧 Configuration

### Vite Configuration (`vite.config.ts`)
- React plugin enabled
- Optimized build settings
- Manual chunk splitting for better caching

### TypeScript Configuration
- Strict mode enabled
- Modern target (ES2020)
- Path mapping ready for future additions

### ESLint Configuration (`eslint.config.js`)
- TypeScript support
- React hooks rules
- React refresh plugin

## 📦 Tech Stack Details

| Tool | Version | Purpose |
|------|---------|---------|
| React | ^18.3.1 | UI library |
| TypeScript | ^5.5.3 | Type safety |
| Vite | ^5.4.2 | Build tool |
| Tailwind CSS | ^3.4.1 | Styling |
| React Router | ^7.8.0 | Routing |
| Lucide React | ^0.344.0 | Icons |
| ESLint | ^9.9.1 | Code linting |

## 🤝 Contributing

1. Update the boilerplate to keep dependencies current
2. Add useful features that benefit most projects
3. Maintain simplicity - avoid over-engineering
4. Test changes across different environments

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🚀 Next Steps

After setting up your project:

1. **Customize the design** - Update colors, fonts, and spacing in Tailwind config
2. **Add state management** - Consider Zustand, Redux Toolkit, or Context API
3. **Set up API integration** - Add Axios, Fetch wrapper, or React Query
4. **Add authentication** - Implement login/logout functionality
5. **Configure deployment** - Set up CI/CD with Vercel, Netlify, or similar
6. **Add testing** - Set up Jest, Vitest, or React Testing Library
7. **SEO optimization** - Add React Helmet for meta tags management

---

**Happy coding!** 🎉
