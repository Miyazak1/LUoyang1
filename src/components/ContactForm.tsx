import { useState, type FormEvent } from 'react';
import type { SiteContent } from '../data/content';

type Props = {
  content: SiteContent['contact'];
};

export default function ContactForm({ content }: Props) {
  const [submitted, setSubmitted] = useState(false);
  const [message, setMessage] = useState('');

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
    setMessage('');
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft">
      <h2 className="text-2xl font-bold text-school-navy">{content.formTitle}</h2>
      <div className="mt-6 grid gap-5">
        <label className="grid gap-2 text-sm font-semibold text-slate-700">
          {content.fields.name}
          <input required className="rounded-md border border-slate-300 px-4 py-3 font-normal outline-none transition-colors focus:border-school-blue" name="name" />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-slate-700">
          {content.fields.email}
          <input required className="rounded-md border border-slate-300 px-4 py-3 font-normal outline-none transition-colors focus:border-school-blue" name="email" type="email" />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-slate-700">
          {content.fields.phone}
          <input className="rounded-md border border-slate-300 px-4 py-3 font-normal outline-none transition-colors focus:border-school-blue" name="phone" />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-slate-700">
          {content.fields.message}
          <textarea
            className="min-h-32 rounded-md border border-slate-300 px-4 py-3 font-normal outline-none transition-colors focus:border-school-blue"
            maxLength={300}
            name="message"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          />
          <span className="text-right text-xs font-normal text-slate-400">{message.length}/300</span>
        </label>
      </div>
      <button type="submit" className="mt-6 rounded-full bg-school-navy px-6 py-3 font-semibold text-white transition-colors hover:bg-school-blue">
        {content.submit}
      </button>
      {submitted && <p className="mt-4 rounded-md bg-school-light px-4 py-3 text-sm font-semibold text-school-navy">{content.thanks}</p>}
    </form>
  );
}
