import { Link } from 'react-router-dom';
import { Home, MessageSquareText } from 'lucide-react';
import SEO from '@/components/SEO';
import GlassPanel from '@/components/GlassPanel';
import WhatsAppLink from '@/components/WhatsAppLink';

export default function NotFound() {
  return (
    <>
      <SEO title="Página não encontrada" description="A página que você procura não foi encontrada." />
      <section className="min-h-screen flex items-center justify-center px-4 pt-16">
        <GlassPanel variant="princess" className="p-10 text-center max-w-md">
          <p className="font-display text-6xl font-semibold text-princess-600 mb-4">404</p>
          <h1 className="font-display text-xl font-semibold text-sand-900 mb-2">Página não encontrada</h1>
          <p className="text-sm text-sand-700 mb-8">
            A página que você procura pode ter sido movida ou não existe mais. Vamos te ajudar a voltar.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/" className="btn-primary">
              <Home className="h-4 w-4" /> Voltar ao início
            </Link>
            <WhatsAppLink messageKey="general" variant="secondary">
              <MessageSquareText className="h-4 w-4" /> Falar com a My Princess
            </WhatsAppLink>
          </div>
        </GlassPanel>
      </section>
    </>
  );
}
