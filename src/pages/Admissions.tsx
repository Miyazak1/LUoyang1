import PageLayout from '../components/PageLayout';
import Seo from '../components/Seo';
import type { SiteContent } from '../data/content';

type Props = {
  content: SiteContent;
};

export default function Admissions({ content }: Props) {
  return (
    <PageLayout title={content.admissions.title} subtitle={content.admissions.subtitle}>
      <Seo title={`${content.admissions.title} | ${content.schoolName}`} description={content.admissions.intro} />
      <p className="max-w-4xl leading-8 text-slate-600">{content.admissions.intro}</p>
      <section className="mt-8 rounded-lg bg-white p-6 shadow-soft">
        <h2 className="text-2xl font-bold text-school-navy">{content.admissions.guidanceTitle}</h2>
        <p className="mt-3 leading-8 text-slate-600">{content.admissions.guidance}</p>
      </section>
      <div className="mt-8 overflow-hidden rounded-lg border border-slate-200 bg-white shadow-soft">
        {content.admissions.steps.map(([title, body], index) => (
          <article key={title} className="grid gap-4 border-b border-slate-200 p-5 last:border-b-0 md:grid-cols-[5rem_18rem_1fr]">
            <p className="text-sm font-bold text-school-gold">{String(index + 1).padStart(2, '0')}</p>
            <h2 className="text-xl font-bold text-school-navy">{title}</h2>
            <p className="leading-7 text-slate-600">{body}</p>
          </article>
        ))}
      </div>
      <section className="mt-8 rounded-lg bg-white p-6 shadow-soft">
        <h2 className="text-2xl font-bold text-school-navy">{content.admissions.documentsTitle}</h2>
        <div className="mt-5 flex flex-wrap gap-3">
          {content.admissions.documents.map((item) => (
            <span key={item} className="rounded-md bg-school-light px-4 py-2 text-sm font-semibold text-school-navy">
              {item}
            </span>
          ))}
        </div>
      </section>
      <p className="mt-8 rounded-lg border border-school-gold/40 bg-white px-5 py-4 text-sm font-semibold text-school-navy shadow-sm">
        {content.admissions.note}
      </p>
    </PageLayout>
  );
}
