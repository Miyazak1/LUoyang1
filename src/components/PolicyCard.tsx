type Props = {
  title: string;
  body: string;
};

export default function PolicyCard({ title, body }: Props) {
  return (
    <article className="rounded-lg border-l-4 border-school-gold bg-white p-5 shadow-sm">
      <h2 className="text-lg font-bold text-school-navy">{title}</h2>
      <p className="mt-2 leading-7 text-slate-600">{body}</p>
    </article>
  );
}
