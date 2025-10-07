import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { HoxRoot } from 'hox';
import ThemeProvider from '@/theme/ThemeProvider.tsx';
import { Toaster } from '@/components/ui/sonner.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HoxRoot>
      <ThemeProvider>
        <App />
      </ThemeProvider>
      <Toaster />
    </HoxRoot>
  </StrictMode>
);
