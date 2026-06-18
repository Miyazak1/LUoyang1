import ContactForm from '../components/ContactForm';
import PageLayout from '../components/PageLayout';
import Seo from '../components/Seo';
import type { SiteContent } from '../data/content';

type Props = {
  content: SiteContent;
};

export default function Contact({ content }: Props) {
  const details = [
    [content.contact.addressLabel, content.contact.placeholders.address],
    [content.contact.telLabel, content.contact.placeholders.telephone],
    [content.contact.emailLabel, content.contact.placeholders.email],
    [content.contact.websiteLabel, content.contact.placeholders.website],
  ];

  return (
    <PageLayout title={content.contact.title} subtitle={content.contact.subtitle}>
      <Seo title={`${content.contact.title} | ${content.schoolName}`} description={content.contact.subtitle} />
      <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft">
          <h2 className="text-2xl font-bold text-school-navy">{content.contact.detailsTitle}</h2>
          <div className="mt-6 border-b border-slate-200 pb-6">
            <p className="text-xl font-bold text-school-navy">{content.contact.name}</p>
            <p className="mt-2 text-slate-500">{content.contact.nameEn}</p>
          </div>
          <dl className="mt-6 grid gap-5">
            {details.map(([label, value]) => (
              <div key={label}>
                <dt className="text-sm font-semibold text-school-gold">{label}</dt>
                <dd className="mt-1 leading-7 text-slate-700">{value}</dd>
              </div>
            ))}
          </dl>
        </section>
        <ContactForm content={content.contact} />
      </div>
    </PageLayout>
  );
}
