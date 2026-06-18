import { useState } from 'react';
import PageLayout from '../components/PageLayout';
import Seo from '../components/Seo';
import type { SiteContent } from '../data/content';

type Props = {
  content: SiteContent;
};

export default function Programmes({ content }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedProgramme = content.programmes.items[selectedIndex];

  return (
    <PageLayout title={content.programmes.title} subtitle={content.programmes.subtitle}>
      <Seo title={`${content.programmes.title} | ${content.schoolName}`} description={content.programmes.intro} />
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <section className="rounded-lg bg-white p-6 shadow-soft">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-school-gold">{content.programmes.structureLabel}</p>
          <h2 className="mt-4 text-3xl font-bold text-school-navy">{content.programmes.title}</h2>
          <p className="mt-4 leading-8 text-slate-600">{content.programmes.intro}</p>
        </section>
        <section className="rounded-lg bg-school-navy p-6 text-white shadow-soft">
          <h2 className="text-2xl font-bold">{content.programmes.subjectsTitle}</h2>
          <div className="mt-5 flex flex-wrap gap-3">
            {content.programmes.subjects.map((subject) => (
              <span key={subject} className="rounded-md bg-white/10 px-4 py-2 text-sm font-semibold text-blue-50">
                {subject}
              </span>
            ))}
          </div>
        </section>
      </div>
      <section className="mt-8 grid overflow-hidden rounded-lg border border-slate-200 bg-white shadow-soft lg:grid-cols-[0.9fr_1.1fr]">
        <div className="border-b border-slate-200 lg:border-b-0 lg:border-r">
          {content.programmes.items.map(([title], index) => {
            const active = selectedIndex === index;
            return (
              <button
                key={title}
                type="button"
                onClick={() => setSelectedIndex(index)}
                className={[
                  'grid w-full grid-cols-[4rem_1fr] items-center gap-4 border-b border-slate-200 p-5 text-left transition-colors last:border-b-0',
                  active ? 'bg-school-navy text-white' : 'bg-white text-school-navy hover:bg-school-light',
                ].join(' ')}
              >
                <span className={active ? 'text-sm font-bold text-school-gold' : 'text-sm font-bold text-school-gold'}>
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="text-lg font-bold">{title}</span>
              </button>
            );
          })}
        </div>
        <article className="p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-school-gold">{String(selectedIndex + 1).padStart(2, '0')}</p>
          <h2 className="mt-4 text-3xl font-black text-school-navy">{selectedProgramme[0]}</h2>
          <p className="mt-5 leading-8 text-slate-600">{selectedProgramme[1]}</p>
          <div className="mt-8 h-2 rounded-full bg-school-light">
            <div className="h-2 rounded-full bg-school-gold" style={{ width: `${((selectedIndex + 1) / content.programmes.items.length) * 100}%` }} />
          </div>
        </article>
      </section>
      <section className="mt-8 rounded-lg bg-white p-6 shadow-soft">
        <h2 className="text-2xl font-bold text-school-navy">{content.programmes.approachTitle}</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {content.programmes.approach.map(([title, body]) => (
            <article key={title} className="rounded-lg border border-slate-200 p-5">
              <h3 className="text-lg font-bold text-school-navy">{title}</h3>
              <p className="mt-2 leading-7 text-slate-600">{body}</p>
            </article>
          ))}
        </div>
      </section>
    </PageLayout>
  );
}
