import HeroSection from '../components/HeroSection';
import SectionTitle from '../components/SectionTitle';
import Seo from '../components/Seo';
import type { SiteContent } from '../data/content';
import { BookOpenCheck, Compass, MapPin, Phone, School, ShieldCheck, Sprout } from 'lucide-react';
import { Link } from 'react-router-dom';

type Props = {
  content: SiteContent;
};

const highlightIcons = [ShieldCheck, BookOpenCheck, Compass];
const quickIcons = [School, BookOpenCheck, Sprout, MapPin];

export default function Home({ content }: Props) {
  return (
    <main className="bg-slate-50">
      <Seo title={content.seo.defaultTitle} description={content.seo.defaultDescription} />
      <HeroSection content={content.home} />
      <section className="relative z-10 -mt-14 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-[1440px] overflow-hidden rounded-3xl bg-white shadow-[0_24px_70px_rgba(11,42,74,0.12)] md:grid-cols-4">
          {content.home.stats.map(([value, label]) => (
            <div key={value} className="border-b border-slate-200 p-6 md:border-b-0 md:border-r md:last:border-r-0">
              <p className="text-2xl font-black text-school-navy">{value}</p>
              <p className="mt-2 text-sm font-semibold text-slate-500">{label}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <SectionTitle title={content.home.quickLinksTitle} subtitle={content.home.overview} />
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {content.home.quickLinks.map((item, index) => {
              const Icon = quickIcons[index] ?? School;
              return (
                <Link
                  key={item.label}
                  to={item.to}
                  className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-school-gold/50 hover:shadow-soft"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-school-light text-school-navy transition-colors group-hover:bg-school-navy group-hover:text-white">
                    <Icon size={23} />
                  </div>
                  <h2 className="mt-5 text-xl font-black text-school-navy">{item.label}</h2>
                  <p className="mt-3 leading-7 text-slate-600">{item.description}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
      <section className="section-band">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.75fr_1.25fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-school-gold">{content.home.profileLabel}</p>
            <h2 className="mt-4 text-3xl font-bold text-school-navy sm:text-4xl">{content.home.title}</h2>
            <p className="mt-5 leading-8 text-slate-600">{content.home.intro}</p>
          </div>
          <div className="grid gap-0 overflow-hidden rounded-lg border border-slate-200 bg-white shadow-soft">
          {content.home.highlights.map((item, index) => {
            const Icon = highlightIcons[index] ?? BookOpenCheck;
            return (
              <article key={item.title} className="grid gap-4 border-b border-slate-200 p-6 last:border-b-0 md:grid-cols-[14rem_1fr]">
                <div>
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-school-light text-school-navy">
                    <Icon size={22} />
                  </div>
                  <p className="text-sm font-semibold text-school-gold">{item.eyebrow}</p>
                  <h3 className="mt-2 text-xl font-bold text-school-navy">{item.title}</h3>
                </div>
                <p className="leading-8 text-slate-600">{item.body}</p>
              </article>
            );
          })}
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <SectionTitle title={content.home.overviewTitle} subtitle={content.home.overview} />
            <div className="mt-8 rounded-3xl bg-school-navy p-6 text-white shadow-soft">
              <p className="text-sm font-semibold text-school-gold">{content.home.heritageTitle}</p>
              <p className="mt-3 leading-8 text-blue-50">{content.home.heritage}</p>
            </div>
          </div>
          <div className="grid gap-4">
            {content.home.featureRows.map(([title, body]) => (
              <article key={title} className="rounded-lg border border-slate-200 p-5">
                <h2 className="text-lg font-bold text-school-navy">{title}</h2>
                <p className="mt-2 leading-7 text-slate-600">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle title={content.home.campusTitle} subtitle={content.home.campusIntro} />
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {content.home.campusScenes.map((scene) => (
              <article key={scene.title} className="group overflow-hidden rounded-3xl bg-white shadow-soft">
                <div
                  aria-label={scene.title}
                  className="h-56 bg-school-light bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{
                    backgroundImage: `linear-gradient(135deg, rgba(11, 42, 74, 0.05), rgba(255, 255, 255, 0.08)), url("${scene.image}")`,
                  }}
                />
                <div className="p-6">
                  <h2 className="text-xl font-black text-school-navy">{scene.title}</h2>
                  <p className="mt-3 leading-7 text-slate-600">{scene.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 rounded-[2rem] bg-school-navy p-8 text-white shadow-soft md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="text-sm font-semibold text-school-gold">{content.home.contactTitle}</p>
            <h2 className="mt-3 text-3xl font-black">{content.contact.name}</h2>
            <p className="mt-4 max-w-2xl leading-8 text-blue-100">{content.home.contactIntro}</p>
            <div className="mt-5 grid gap-3 text-sm text-blue-50 sm:grid-cols-2">
              <p className="flex items-center gap-2">
                <Phone size={16} />
                {content.contact.placeholders.telephone}
              </p>
              <p className="flex items-center gap-2">
                <MapPin size={16} />
                {content.contact.placeholders.address}
              </p>
            </div>
          </div>
          <Link to="/contact" className="rounded-full bg-white px-7 py-3 text-center font-bold text-school-navy transition-colors hover:bg-school-light">
            {content.home.contactCta}
          </Link>
        </div>
      </section>
    </main>
  );
}
