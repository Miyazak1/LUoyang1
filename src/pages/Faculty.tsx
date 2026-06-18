import PageLayout from '../components/PageLayout';
import Seo from '../components/Seo';
import type { SiteContent } from '../data/content';

type Props = {
  content: SiteContent;
};

export default function Faculty({ content }: Props) {
  return (
    <PageLayout title={content.faculty.title} subtitle={content.faculty.subtitle}>
      <Seo title={`${content.faculty.title} | ${content.schoolName}`} description={content.faculty.intro} />
      <p className="max-w-4xl leading-8 text-slate-600">{content.faculty.intro}</p>
      <div className="mt-8 overflow-hidden rounded-lg border border-slate-200 bg-white shadow-soft">
        {content.faculty.roles.map(([title, body]) => (
          <article key={title} className="grid gap-4 border-b border-slate-200 p-5 last:border-b-0 md:grid-cols-[18rem_1fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-school-red">{content.faculty.roleLabel}</p>
              <h2 className="mt-2 text-lg font-bold text-school-navy">{title}</h2>
            </div>
            <p className="leading-7 text-slate-600">{body}</p>
          </article>
        ))}
      </div>
      <section className="mt-10 rounded-lg bg-white p-6 shadow-soft">
        <h2 className="text-2xl font-bold text-school-navy">{content.faculty.standardsTitle}</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {content.faculty.standards.map(([title, body]) => (
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
