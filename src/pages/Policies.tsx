import PageLayout from '../components/PageLayout';
import PolicyCard from '../components/PolicyCard';
import Seo from '../components/Seo';
import type { SiteContent } from '../data/content';

type Props = {
  content: SiteContent;
};

export default function Policies({ content }: Props) {
  return (
    <PageLayout title={content.policies.title} subtitle={content.policies.subtitle}>
      <Seo title={`${content.policies.title} | ${content.schoolName}`} description={content.policies.subtitle} />
      <section className="mb-8 rounded-lg bg-white p-6 shadow-soft">
        <h2 className="text-2xl font-bold text-school-navy">{content.policies.frameworkTitle}</h2>
        <p className="mt-3 leading-8 text-slate-600">{content.policies.framework}</p>
      </section>
      <div className="grid gap-5 md:grid-cols-2">
        {content.policies.items.map(([title, body]) => (
          <PolicyCard key={title} title={title} body={body} />
        ))}
      </div>
      <section className="mt-8 rounded-lg bg-white p-6 shadow-soft">
        <h2 className="text-2xl font-bold text-school-navy">{content.policies.cycleTitle}</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {content.policies.cycle.map((item, index) => (
            <div key={item} className="rounded-lg bg-slate-50 p-5">
              <p className="text-sm font-bold text-school-gold">{String(index + 1).padStart(2, '0')}</p>
              <p className="mt-2 font-semibold text-school-navy">{item}</p>
            </div>
          ))}
        </div>
      </section>
    </PageLayout>
  );
}
