import { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { navLinks } from '@/config/site';
import WhatsAppLink from './WhatsAppLink';
import Brand from './Brand';
export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  useEffect(() => { setOpen(false); }, [location.pathname]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll(); window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  useEffect(() => {
    const media = window.matchMedia('(min-width: 1200px)');
    const resize = () => { if (media.matches) setOpen(false); };
    media.addEventListener('change', resize);
    return () => media.removeEventListener('change', resize);
  }, []);
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    menuRef.current?.querySelector<HTMLElement>('a')?.focus();
    const keydown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { setOpen(false); toggleRef.current?.focus(); }
      if (e.key === 'Tab') {
        const links = menuRef.current?.querySelectorAll<HTMLElement>('a');
        if (!links?.length) return;
        const first = toggleRef.current, last = links[links.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first?.focus(); }
      }
    };
    document.addEventListener('keydown', keydown);
    return () => { document.body.style.overflow = previous; document.removeEventListener('keydown', keydown); };
  }, [open]);
  return <>
    <a className="skip-link" href="#main-content">Pular para o conteúdo</a>
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}${open ? ' menu-is-open' : ''}`}>
      <nav className="nav-shell" aria-label="Navegação principal">
        <Link to="/" className="brand-link" aria-label="MP Eyewear — Início"><Brand /></Link>
        <div className="desktop-nav">{navLinks.map(link => <NavLink key={link.to} to={link.to} end={link.to === '/'} className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>{link.label}</NavLink>)}</div>
        <div className="desktop-cta"><WhatsAppLink messageKey="general">Vamos conversar <ArrowUpRight size={16} /></WhatsAppLink></div>
        <button ref={toggleRef} type="button" onClick={() => setOpen(value => !value)} className="menu-toggle" aria-label={open ? 'Fechar menu' : 'Abrir menu'} aria-expanded={open} aria-controls="mobile-menu">{open ? <X /> : <Menu />}</button>
      </nav>
      {open && <div ref={menuRef} className="mobile-nav" id="mobile-menu"><p className="eyebrow">Um novo olhar começa aqui</p>{navLinks.map((link, i) => <NavLink key={link.to} to={link.to} end={link.to === '/'} className={({ isActive }) => isActive ? 'active' : ''}><span>0{i + 1}</span>{link.label}<ArrowUpRight size={20} /></NavLink>)}<WhatsAppLink messageKey="general">Falar pelo WhatsApp <ArrowUpRight size={18} /></WhatsAppLink></div>}
    </header>
    {open && <div className="menu-backdrop" onClick={() => { setOpen(false); toggleRef.current?.focus(); }} aria-hidden="true" />}
  </>;
}
