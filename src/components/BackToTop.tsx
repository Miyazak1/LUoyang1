import { ArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react';
import type { Lang } from '../data/content';

type Props = {
  lang: Lang;
};

export default function BackToTop({ lang }: Props) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 520);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-school-navy text-white shadow-lg shadow-school-navy/20 transition-colors hover:bg-school-blue"
      aria-label={lang === 'zh' ? '返回顶部' : 'Back to top'}
    >
      <ArrowUp size={20} />
    </button>
  );
}
