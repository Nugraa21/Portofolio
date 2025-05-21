import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/css/styles.css'
import './assets/css/responsif.css'
import Nav from './components/nav'
import Hero from './components/hero'

const root = document.getElementById('root');

if (root) {
  createRoot(root).render(
    <StrictMode>
      <Nav />
      <Hero />
    </StrictMode>
  );
} else {
  console.error("Element with id 'root' not found.");
}
