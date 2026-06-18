import { useEffect } from 'react';

type Props = {
  title: string;
  description: string;
};

function setMeta(selector: string, attr: 'content', value: string) {
  const element = document.head.querySelector<HTMLMetaElement>(selector);
  if (element) {
    element.setAttribute(attr, value);
  }
}

export default function Seo({ title, description }: Props) {
  useEffect(() => {
    document.title = title;
    setMeta('meta[name="description"]', 'content', description);
    setMeta('meta[property="og:title"]', 'content', title);
    setMeta('meta[property="og:description"]', 'content', description);
    setMeta('meta[property="og:type"]', 'content', 'website');
  }, [title, description]);

  return null;
}
