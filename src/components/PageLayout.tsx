import type { ReactNode } from 'react';
import SectionTitle from './SectionTitle';

type Props = {
  title: string;
  subtitle?: string;
  children: ReactNode;
};

export default function PageLayout({ title, subtitle, children }: Props) {
  return (
    <main className="page-shell bg-slate-50">
      <section className="academic-grid border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-4xl">
            <SectionTitle title={title} subtitle={subtitle} />
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">{children}</section>
    </main>
  );
}
