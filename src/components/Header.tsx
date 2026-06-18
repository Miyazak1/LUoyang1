import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import type { Lang, RouteKey, SiteContent } from '../data/content';
import { routes } from '../data/content';
import LanguageSwitcher from './LanguageSwitcher';

const navKeys: RouteKey[] = ['home', 'about', 'programmes', 'faculty', 'facilities', 'policies', 'admissions', 'contact'];

type Props = {
  lang: Lang;
  content: SiteContent;
  onLanguageChange: (lang: Lang) => void;
};

export default function Header({ lang, content, onLanguageChange }: Props) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    [
      'relative whitespace-nowrap rounded-full px-2.5 py-2 text-[13px] font-semibold transition-colors 2xl:px-3 2xl:text-sm',
      isActive ? 'text-school-navy' : 'text-slate-600 hover:text-school-navy',
    ].join(' ');

  return (
    <header
      className={[
        'sticky top-0 z-50 border-b border-slate-200 bg-white/85 backdrop-blur-xl transition-shadow',
        scrolled ? 'shadow-[0_12px_34px_rgba(15,23,42,0.08)]' : '',
      ].join(' ')}
    >
      <div className="mx-auto grid h-20 max-w-[1440px] grid-cols-[1fr_auto] items-center gap-4 px-4 py-3 sm:px-6 lg:px-8 2xl:grid-cols-[minmax(390px,430px)_minmax(0,1fr)_auto]">
        <NavLink to="/" className="flex min-w-0 items-center gap-3" onClick={() => setOpen(false)}>
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white p-1 shadow-[inset_0_0_0_1px_rgba(11,42,74,0.10),0_10px_24px_rgba(11,42,74,0.10)] sm:h-14 sm:w-14">
            <img src="/images/logo-transparent.png" alt={content.schoolName} className="h-full w-full object-contain" />
          </div>
          <div className="min-w-0">
            <p className="truncate text-base font-black leading-tight text-school-navy sm:text-xl xl:whitespace-nowrap xl:text-lg 2xl:text-xl">{content.schoolName}</p>
            <p className="truncate text-xs font-medium text-slate-500">{content.schoolNameEn}</p>
          </div>
        </NavLink>

        <nav className="hidden min-w-0 items-center justify-center gap-0.5 2xl:flex">
          {navKeys.map((key) => (
            <NavLink key={key} to={routes[key]} className={navLinkClass}>
              {({ isActive }) => (
                <>
                  {content.nav[key]}
                  {isActive && <span className="absolute inset-x-3 -bottom-1 h-0.5 rounded-full bg-school-gold" />}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center justify-end gap-3 2xl:flex">
          <LanguageSwitcher lang={lang} labels={content} onChange={onLanguageChange} />
        </div>

        <div className="flex items-center justify-end gap-2 2xl:hidden">
          <div className="hidden sm:block">
            <LanguageSwitcher lang={lang} labels={content} onChange={onLanguageChange} />
          </div>
          <button
            type="button"
            className="rounded-md border border-slate-200 p-2 text-school-navy transition-colors hover:bg-slate-100"
            onClick={() => setOpen((value) => !value)}
            aria-label={lang === 'zh' ? '打开或关闭导航菜单' : 'Toggle navigation'}
            aria-expanded={open}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white px-4 py-4 shadow-soft 2xl:hidden">
          <nav className="mx-auto grid max-w-7xl gap-2">
            {navKeys.map((key) => (
              <NavLink key={key} to={routes[key]} className={navLinkClass} onClick={() => setOpen(false)}>
                {content.nav[key]}
              </NavLink>
            ))}
            <div className="pt-2">
              <LanguageSwitcher lang={lang} labels={content} onChange={onLanguageChange} />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
