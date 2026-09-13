import { useId, useState } from 'react';
import { Plus, Minus } from 'lucide-react';
export type FAQItem = { question: string; answer: string };
export default function FAQ({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const id = useId();
  return <div className="faq-list">{items.map((item, index) => {
    const isOpen = openIndex === index;
    return <div key={item.question} className={`faq-item${isOpen ? ' is-open' : ''}`}>
      <h3><button type="button" onClick={() => setOpenIndex(isOpen ? null : index)} aria-expanded={isOpen} aria-controls={`${id}-${index}`}><span className="faq-number">0{index + 1}</span><span>{item.question}</span>{isOpen ? <Minus size={18} /> : <Plus size={18} />}</button></h3>
      <div id={`${id}-${index}`} hidden={!isOpen} className="faq-answer"><p>{item.answer}</p></div>
    </div>;
  })}</div>;
}
