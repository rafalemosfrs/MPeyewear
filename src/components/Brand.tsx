export default function Brand({ inverse = false }: { inverse?: boolean }) {
  return <img src="/assets/images/mp-wordmark.jpg" alt="MP Eyewear" width="900" height="315" className={`brand-wordmark${inverse ? ' brand-wordmark-inverse' : ''}`} />;
}
