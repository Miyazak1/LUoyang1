import { Link } from 'react-router-dom';
import type { SiteContent } from '../data/content';

type Props = {
  content: SiteContent['home'];
};

export default function HeroSection({ content }: Props) {
  return (
    <section className="campus-pattern relative overflow-hidden text-school-navy">
      <div className="absolute -left-24 top-16 h-72 w-72 rounded-full bg-school-gold/10 blur-3xl" />
      <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-white/55 via-white/20 to-transparent" />
      <div className="mx-auto grid min-h-[640px] max-w-[1440px] items-center gap-12 px-4 pb-20 pt-14 sm:px-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(420px,0.85fr)] lg:px-12 lg:pb-24 lg:pt-16 xl:gap-16 xl:px-16">
        <div className="relative max-w-3xl">
          <p className="mb-5 inline-flex rounded-full border border-school-navy/10 bg-white/75 px-4 py-2 text-sm font-bold text-school-blue shadow-sm backdrop-blur">
            {content.badge}
          </p>
          <h1 className="text-4xl font-black leading-[1.05] sm:text-5xl lg:text-[4rem]">{content.title}</h1>
          <p className="mt-6 max-w-2xl text-xl leading-9 text-slate-700 sm:text-2xl">{content.subtitle}</p>
          <p className="mt-6 max-w-2xl leading-8 text-slate-600">{content.intro}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            {content.ctas.map((cta, index) => (
              <Link
                key={cta.to}
                to={cta.to}
                className={
                  index === 0
                    ? 'rounded-full bg-school-navy px-8 py-3.5 text-center font-bold text-white shadow-lg shadow-school-navy/15 transition-colors hover:bg-school-blue'
                    : 'rounded-full border border-school-navy/20 bg-white/75 px-8 py-3.5 text-center font-bold text-school-navy shadow-sm transition-colors hover:bg-white'
                }
              >
                {cta.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="relative hidden justify-self-end lg:block">
          <div className="campus-window relative w-full max-w-[460px] overflow-hidden rounded-[2rem] border border-white/80 p-4 shadow-[0_30px_90px_rgba(11,42,74,0.16)] xl:max-w-[500px]">
            <div className="relative flex min-h-[490px] flex-col overflow-hidden rounded-[1.5rem] bg-school-navy p-7 text-white xl:min-h-[520px] xl:p-8">
              <div
                aria-label={content.heroImage.alt}
                className="absolute inset-0 bg-cover bg-center opacity-55"
                style={{
                  backgroundImage: `linear-gradient(135deg, rgba(11, 42, 74, 0.15), rgba(11, 42, 74, 0.65)), url("${content.heroImage.src}")`,
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-school-navy/20 via-school-navy/65 to-school-navy" />
              <div className="relative">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-100 xl:text-sm">{content.panelKicker}</p>
                <p className="mt-4 max-w-sm text-[1.7rem] font-black leading-[1.15] xl:text-[2rem]">{content.panelTitle}</p>
              </div>
              <div className="relative mt-8 grid gap-4">
                {content.featureRows.map(([title, body], index) => (
                  <div key={title} className="rounded-2xl bg-white/10 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur">
                    <div className="grid gap-3 sm:grid-cols-[2rem_1fr]">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-sm font-black text-school-navy">
                        {index + 1}
                      </span>
                      <div>
                        <p className="font-bold">{title}</p>
                        <p className="mt-2 text-sm leading-6 text-blue-100">{body}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
