import { useEffect } from 'react';
import { siteConfig } from '@/config/site';

type SEOProps = {
  title: string;
  description: string;
  path?: string;
};

export default function SEO({ title, description, path = '' }: SEOProps) {
  useEffect(() => {
    document.title = `${title} | ${siteConfig.name}`;

    const setMeta = (name: string, content: string, attr: 'name' | 'property' = 'name') => {
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    setMeta('description', description);
    setMeta('og:title', `${title} | ${siteConfig.name}`, 'property');
    setMeta('og:description', description, 'property');
    setMeta('og:type', 'website', 'property');
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', `${title} | ${siteConfig.name}`);
    setMeta('twitter:description', description);
  }, [title, description, path]);

  return null;
}
