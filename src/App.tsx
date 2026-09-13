import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import ScrollToTop from '@/components/ScrollToTop';
import Home from '@/pages/Home';
import Lenses from '@/pages/Lenses';
import CareWarranty from '@/pages/CareWarranty';
import Kids from '@/pages/Kids';
import Contact from '@/pages/Contact';
import NotFound from '@/pages/NotFound';
import VisualEffects from '@/components/VisualEffects';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <VisualEffects />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main id="main-content" className="flex-grow" tabIndex={-1}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/lentes" element={<Lenses />} />
            <Route path="/cuidados-e-garantias" element={<CareWarranty />} />
            <Route path="/espaco-infantil" element={<Kids />} />
            <Route path="/contato" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppFloat />
      </div>
      <Analytics />
      <SpeedInsights />
    </BrowserRouter>
  );
}

export default App;
