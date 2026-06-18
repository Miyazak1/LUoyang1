type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
};

export default function SectionTitle({ eyebrow, title, subtitle, align = 'left' }: Props) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      {eyebrow && <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-school-gold">{eyebrow}</p>}
      <h1 className="text-3xl font-bold text-school-navy sm:text-4xl">{title}</h1>
      {subtitle && <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">{subtitle}</p>}
    </div>
  );
}
