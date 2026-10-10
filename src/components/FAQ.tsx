
import { useId, useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Minus, ArrowUpRight } from 'lucide-react';
import { wa, type WhatsAppMessageKey } from '@/config/site';

export type FAQItem = {
  question: string;
  answer: string;
  link?: {
    label: string;
    to?: string;
    whatsappKey?: WhatsAppMessageKey;
  };
};

export default function FAQ({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const id = useId();

  return (
    <div className="faq-list">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div className="faq-item" key={item.question}>
            <h3>
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                aria-expanded={isOpen}
                aria-controls={`${id}-${index}`}
              >
                <span className="faq-number">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <span>{item.question}</span>

                {isOpen ? <Minus size={18} /> : <Plus size={18} />}
              </button>
            </h3>

            <div
              id={`${id}-${index}`}
              hidden={!isOpen}
              className="faq-answer"
            >
              <p>{item.answer}</p>

              {item.link?.to && (
                <Link to={item.link.to} className="text-link mt-4">
                  {item.link.label}
                  <ArrowUpRight size={16} />
                </Link>
              )}

              {item.link?.whatsappKey && (
                <a
                  href={wa(item.link.whatsappKey)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-link mt-4"
                >
                  {item.link.label}
                  <ArrowUpRight size={16} />
                </a>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
