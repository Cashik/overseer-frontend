# React + TypeScript + Vite Project

## Requirements
- [Node.js](https://nodejs.org/) version 16 or higher
- npm (comes with Node.js)
- Git (for repository cloning)

## Step-by-Step Installation Guide

### 1. Clone the Project
```bash
git clone https://github.com/Cashik/overseer-frontend.git
cd overseer-frontend
```

### 2. Switch to Dev Branch
```bash
git checkout dev
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Run Development Server
```bash
npm run dev
```
After running this command, the project will be available at: `http://localhost:4173`



## Project Structure

```
src/
├── assets/         # Images, videos, and other media files
├── components/     # React components
├── store/         # Application state management
├── index.css      # Global styles
└── main.tsx       # Application entry point
```

## Available Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint code check
- `npm run preview` - Preview production build locally

## Troubleshooting

### "Module not found" Error
- Make sure all dependencies are installed (`npm install`)
- Check import statements in your files

### Startup Error
- Ensure port 5173 is not in use by another process
- Verify Node.js version (`node -v`)

## Technical Stack

The project uses:
- React 18
- TypeScript
- Vite as bundler
- ESLint for linting

## Useful Links

- [React Documentation](https://react.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Vite Documentation](https://vitejs.dev/)
