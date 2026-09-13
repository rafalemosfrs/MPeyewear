import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
export default function VisualEffects() {
  const { pathname } = useLocation();
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const nodes = document.querySelectorAll<HTMLElement>('[data-reveal], main > section:not(:first-child) > .container-max');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
      });
    }, { threshold: 0.06 });
    nodes.forEach(node => { node.classList.add('reveal-ready'); observer.observe(node); });
    return () => { observer.disconnect(); nodes.forEach(node => node.classList.remove('reveal-ready', 'is-visible')); };
  }, [pathname]);
  return null;
}
