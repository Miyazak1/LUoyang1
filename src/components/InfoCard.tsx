type Props = {
  title: string;
  body: string;
  eyebrow?: string;
};

export default function InfoCard({ title, body, eyebrow }: Props) {
  return (
    <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft transition-shadow hover:shadow-lg">
      {eyebrow && <p className="mb-3 text-sm font-semibold text-school-gold">{eyebrow}</p>}
      <h2 className="text-xl font-bold text-school-navy">{title}</h2>
      <p className="mt-3 leading-7 text-slate-600">{body}</p>
    </article>
  );
}
