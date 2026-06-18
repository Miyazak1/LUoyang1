import { useEffect, useMemo, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import BackToTop from './components/BackToTop';
import Footer from './components/Footer';
import Header from './components/Header';
import { content, type Lang } from './data/content';
import About from './pages/About';
import Admissions from './pages/Admissions';
import Contact from './pages/Contact';
import Facilities from './pages/Facilities';
import Faculty from './pages/Faculty';
import Home from './pages/Home';
import Policies from './pages/Policies';
import Programmes from './pages/Programmes';

function getInitialLanguage(): Lang {
  if (typeof window === 'undefined') {
    return 'zh';
  }

  return window.localStorage.getItem('site-language') === 'en' ? 'en' : 'zh';
}

export default function App() {
  const [lang, setLang] = useState<Lang>(getInitialLanguage);
  const t = useMemo(() => content[lang], [lang]);

  useEffect(() => {
    window.localStorage.setItem('site-language', lang);
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
  }, [lang]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header lang={lang} content={t} onLanguageChange={setLang} />
      <Routes>
        <Route path="/" element={<Home content={t} />} />
        <Route path="/about" element={<About content={t} />} />
        <Route path="/programmes" element={<Programmes content={t} />} />
        <Route path="/faculty" element={<Faculty content={t} />} />
        <Route path="/facilities" element={<Facilities content={t} />} />
        <Route path="/policies" element={<Policies content={t} />} />
        <Route path="/admissions" element={<Admissions content={t} />} />
        <Route path="/contact" element={<Contact content={t} />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer content={t} />
      <BackToTop lang={lang} />
    </div>
  );
}
