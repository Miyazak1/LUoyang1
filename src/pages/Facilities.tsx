import PageLayout from '../components/PageLayout';
import Seo from '../components/Seo';
import type { SiteContent } from '../data/content';

type Props = {
  content: SiteContent;
};

export default function Facilities({ content }: Props) {
  return (
    <PageLayout title={content.facilities.title} subtitle={content.facilities.subtitle}>
      <Seo title={`${content.facilities.title} | ${content.schoolName}`} description={content.facilities.subtitle} />
      <section className="mb-8 rounded-lg bg-white p-6 shadow-soft">
        <h2 className="text-2xl font-bold text-school-navy">{content.facilities.environmentTitle}</h2>
        <p className="mt-3 leading-8 text-slate-600">{content.facilities.environment}</p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-school-navy">{content.facilities.galleryTitle}</h2>
        <div className="mt-5 grid gap-5 md:grid-cols-3">
          {content.facilities.gallery.map((item) => (
            <article key={item.title} className="overflow-hidden rounded-3xl bg-white shadow-soft">
              <div
                aria-label={item.title}
                className="h-48 bg-school-light bg-cover bg-center"
                style={{
                  backgroundImage: `linear-gradient(135deg, rgba(11, 42, 74, 0.08), rgba(255, 255, 255, 0.08)), url("${item.image}")`,
                }}
              />
              <div className="p-5">
                <h3 className="text-lg font-bold text-school-navy">{item.title}</h3>
                <p className="mt-2 leading-7 text-slate-600">{item.body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-soft">
        {content.facilities.items.map(([title, body], index) => (
          <article key={title} className="grid gap-4 border-b border-slate-200 p-5 last:border-b-0 md:grid-cols-[5rem_18rem_1fr]">
            <p className="text-sm font-bold text-school-gold">{String(index + 1).padStart(2, '0')}</p>
            <h2 className="text-xl font-bold text-school-navy">{title}</h2>
            <p className="leading-7 text-slate-600">{body}</p>
          </article>
        ))}
      </div>
      <section className="mt-8 rounded-lg border border-school-gold/30 bg-white p-6">
        <h2 className="text-2xl font-bold text-school-navy">{content.facilities.safetyTitle}</h2>
        <div className="mt-5 flex flex-wrap gap-3">
          {content.facilities.safety.map((item) => (
            <span key={item} className="rounded-md bg-school-light px-4 py-2 text-sm font-semibold text-school-navy">
              {item}
            </span>
          ))}
        </div>
      </section>
    </PageLayout>
  );
}
