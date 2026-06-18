import PageLayout from '../components/PageLayout';
import Seo from '../components/Seo';
import type { SiteContent } from '../data/content';

type Props = {
  content: SiteContent;
};

export default function About({ content }: Props) {
  return (
    <PageLayout title={content.about.title} subtitle={content.about.subtitle}>
      <Seo title={`${content.about.title} | ${content.schoolName}`} description={content.seo.defaultDescription} />
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <aside className="rounded-lg bg-school-navy p-6 text-white shadow-soft">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-school-gold">{content.about.identityLabel}</p>
          <h2 className="mt-4 text-3xl font-bold">{content.schoolName}</h2>
          <p className="mt-4 leading-8 text-blue-100">{content.about.sections[0].body}</p>
        </aside>
        <div className="grid gap-5">
          {content.about.sections.slice(1).map((section, index) => (
            <article key={section.title} className="grid gap-5 rounded-lg border border-slate-200 bg-white p-6 shadow-sm md:grid-cols-[4rem_1fr]">
              <div className="flex h-12 w-12 items-center justify-center rounded-md bg-school-light text-lg font-bold text-school-navy">
                {index + 1}
              </div>
              <div>
                <h2 className="text-xl font-bold text-school-navy">{section.title}</h2>
                <p className="mt-2 leading-8 text-slate-600">{section.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
      <section className="mt-10 rounded-lg bg-white p-6 shadow-soft">
        <h2 className="text-2xl font-bold text-school-navy">{content.about.governanceTitle}</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {content.about.governance.map(([title, body]) => (
            <article key={title} className="rounded-lg bg-slate-50 p-5">
              <h3 className="text-lg font-bold text-school-navy">{title}</h3>
              <p className="mt-2 leading-7 text-slate-600">{body}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="mt-8 rounded-lg border border-school-gold/30 bg-white p-6">
        <h2 className="text-2xl font-bold text-school-navy">{content.about.developmentTitle}</h2>
        <div className="mt-5 flex flex-wrap gap-3">
          {content.about.development.map((item) => (
            <span key={item} className="rounded-md bg-school-light px-4 py-2 text-sm font-semibold text-school-navy">
              {item}
            </span>
          ))}
        </div>
      </section>
      <section className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-lg bg-white p-6 shadow-soft">
          <div
            aria-label={content.about.historyImage.alt}
            className="mb-6 h-56 overflow-hidden rounded-2xl bg-school-light bg-cover bg-center"
            style={{
              backgroundImage: `linear-gradient(135deg, rgba(11, 42, 74, 0.10), rgba(255, 255, 255, 0.15)), url("${content.about.historyImage.src}")`,
            }}
          />
          <h2 className="text-2xl font-bold text-school-navy">{content.about.historyTitle}</h2>
          <p className="mt-4 leading-8 text-slate-600">{content.about.historyIntro}</p>
          <div className="mt-6 rounded-lg bg-school-light p-5">
            <h3 className="text-lg font-bold text-school-navy">{content.about.recognitionsTitle}</h3>
            <div className="mt-4 flex flex-wrap gap-3">
              {content.about.recognitions.map((item) => (
                <span key={item} className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-school-navy shadow-sm">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-soft">
          {content.about.historyTimeline.map(([year, event], index) => (
            <article key={year} className="grid gap-4 border-b border-slate-200 p-5 last:border-b-0 md:grid-cols-[7rem_1fr]">
              <div>
                <p className="text-sm font-bold text-school-gold">{String(index + 1).padStart(2, '0')}</p>
                <h3 className="mt-2 text-lg font-black text-school-navy">{year}</h3>
              </div>
              <p className="leading-8 text-slate-600">{event}</p>
            </article>
          ))}
        </div>
      </section>
    </PageLayout>
  );
}
