import { Link } from 'react-router-dom';
import { ArrowUpRight, Instagram } from 'lucide-react';
import { navLinks, siteConfig, wa } from '@/config/site';
import Brand from './Brand';
export default function Footer() {
  return <footer className="site-footer"><div className="container-max">
    <div className="footer-top"><p>Seu olhar.<br /><em>Nossa atenção.</em></p><a href={wa('general')} target="_blank" rel="noopener noreferrer" className="footer-contact">Converse com a gente <ArrowUpRight size={28} /></a></div>
    <div className="footer-grid"><div><Link to="/" aria-label="MP Eyewear — Início"><Brand inverse /></Link><p className="footer-description">My Princess · MP Eyewear<br />Um novo olhar começa aqui.</p></div>
      <nav aria-label="Navegação do rodapé"><span className="eyebrow">Explore</span>{navLinks.map(link => <Link key={link.to} to={link.to}>{link.label}</Link>)}</nav>
      <div><span className="eyebrow">Encontre a gente</span><p>{siteConfig.address.fullAddress}</p><a href={siteConfig.address.mapsUrl} target="_blank" rel="noopener noreferrer">Como chegar <ArrowUpRight size={14} /></a></div>
      <div><span className="eyebrow">Estamos por aqui</span><a href={wa('general')} target="_blank" rel="noopener noreferrer">{siteConfig.whatsappDisplay} <ArrowUpRight size={14} /></a><p>{siteConfig.hours || 'Consulte os horários pelo WhatsApp.'}</p>{siteConfig.instagram && <a href={siteConfig.instagram} target="_blank" rel="noopener noreferrer"><Instagram size={16} /> Instagram</a>}</div>
    </div><div className="footer-bottom"><span>© {new Date().getFullYear()} MP Eyewear. Todos os direitos reservados.</span><span>Feito para ver a vida de perto.</span></div>
  </div></footer>;
}
