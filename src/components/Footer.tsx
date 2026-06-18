import type { SiteContent } from '../data/content';

type Props = {
  content: SiteContent;
};

export default function Footer({ content }: Props) {
  return (
    <footer className="border-t border-slate-200 bg-school-navy text-white">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-10 sm:px-6 md:grid-cols-[1.2fr_2fr] lg:px-8">
        <div className="flex items-center gap-4">
          <img src="/images/logo-transparent.png" alt={content.footer.name} className="h-16 w-16 rounded-full bg-white object-contain p-1" />
          <div>
            <p className="text-xl font-bold">{content.footer.name}</p>
          <p className="mt-2 text-sm text-blue-100">{content.schoolNameEn}</p>
          </div>
        </div>
        <div className="grid gap-2 text-sm text-blue-50 md:justify-end md:text-right">
          <p>{content.footer.address}</p>
          <p>{content.footer.tel}</p>
          <p>{content.footer.email}</p>
          <p className="pt-3 text-blue-200">{content.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
