import type { Lang, SiteContent } from '../data/content';

type Props = {
  lang: Lang;
  labels: Pick<SiteContent, 'switchLanguage' | 'languageLabel'>;
  onChange: (lang: Lang) => void;
};

export default function LanguageSwitcher({ lang, labels, onChange }: Props) {
  const nextLang: Lang = lang === 'zh' ? 'en' : 'zh';

  return (
    <button
      type="button"
      onClick={() => onChange(nextLang)}
      className="rounded-md border border-school-blue/20 px-3 py-2 text-sm font-semibold text-school-navy transition-colors hover:border-school-gold hover:text-school-blue"
      aria-label={labels.languageLabel === '中文' ? '切换语言' : 'Switch language'}
    >
      {labels.switchLanguage}
    </button>
  );
}
