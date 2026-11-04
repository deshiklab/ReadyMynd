'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowUp, MessageCircle, Phone, X, ChevronDown, Send, Bot } from 'lucide-react';
import { useI18n } from '@/lib/i18n';
import { site } from '@/lib/site';

type Reply = { id: string; key: string };

const QUICK_REPLIES: Reply[] = [
  { id: 'assessment', key: 'chat.quickReplies.assessment' },
  { id: 'brochure', key: 'chat.quickReplies.brochure' },
  { id: 'timeline', key: 'chat.quickReplies.timeline' },
  { id: 'cost', key: 'chat.quickReplies.cost' },
];

export function QuickActions() {
  const { t } = useI18n();
  const [open, setOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 520);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    const onClick = (e: MouseEvent) => {
      if (!containerRef.current?.contains(e.target as Node)) setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    window.addEventListener('mousedown', onClick);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('mousedown', onClick);
    };
  }, [open]);

  const toTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
    });
  }, []);

  const whatsappHref = `https://wa.me/${site.whatsapp}`;
  const whatsappTextHref = `${whatsappHref}?text=${encodeURIComponent(t('chat.whatsappPrefill'))}`;

  const actions = [
    {
      id: 'chat',
      label: t('quick.chat'),
      icon: MessageCircle,
      href: undefined as string | undefined,
      onClick: () => {
        setChatOpen(true);
        setOpen(false);
      },
    },
    {
      id: 'whatsapp',
      label: t('quick.whatsapp'),
      icon: MessageCircle,
      href: whatsappTextHref,
      external: true,
      onClick: () => setOpen(false),
    },
    {
      id: 'call',
      label: t('quick.call'),
      icon: Phone,
      href: `tel:${site.phoneHref}`,
      onClick: () => setOpen(false),
    },
  ];

  return (
    <>
      {/* Chat panel */}
      {chatOpen && (
        <ChatPanel onClose={() => setChatOpen(false)} whatsappHref={whatsappTextHref} />
      )}

      <div
        ref={containerRef}
        className="pointer-events-none fixed bottom-4 right-4 z-40 flex flex-col items-end gap-3 sm:bottom-6 sm:right-6"
      >
        {/* Back to top */}
        <button
          type="button"
          onClick={toTop}
          aria-label={t('quick.backToTop')}
          title={t('quick.backToTop')}
          className={`pointer-events-auto grid size-11 place-items-center rounded-full border border-line bg-surface-raised text-body shadow-lift transition-all duration-300 hover:text-heading ${
            showTop ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-3 opacity-0'
          }`}
        >
          <ArrowUp className="size-4" aria-hidden />
        </button>

        {/* Expanding action stack */}
        <div
          className={`pointer-events-auto flex flex-col items-end gap-2.5 transition-all duration-300 ${
            open ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
          }`}
        >
          {actions.map((action) => {
            const Icon = action.icon;
            const className =
              'group flex items-center gap-3 rounded-full border border-line bg-surface-raised py-2 pl-3 pr-4 text-sm font-medium text-heading shadow-lift transition-colors hover:border-brand-300 hover:text-brand-600';
            const content = (
              <>
                <span className="grid size-8 shrink-0 place-items-center rounded-full bg-accent-soft text-accent">
                  <Icon className="size-4" aria-hidden />
                </span>
                {action.label}
              </>
            );

            if (action.href) {
              return (
                <a
                  key={action.id}
                  href={action.href}
                  target={action.external ? '_blank' : undefined}
                  rel={action.external ? 'noopener noreferrer' : undefined}
                  onClick={action.onClick}
                  className={className}
                >
                  {content}
                </a>
              );
            }
            return (
              <button key={action.id} type="button" onClick={action.onClick} className={className}>
                {content}
              </button>
            );
          })}

          <Link
            href="/contact/#assessment-enquiry"
            onClick={() => setOpen(false)}
            className="group flex items-center gap-3 rounded-full border border-line bg-surface-raised py-2 pl-3 pr-4 text-sm font-medium text-heading shadow-lift transition-colors hover:border-brand-300 hover:text-brand-600"
          >
            <span className="grid size-8 shrink-0 place-items-center rounded-full bg-accent-soft text-accent">
              <Send className="size-4" aria-hidden />
            </span>
            {t('quick.enquire')}
          </Link>
        </div>

        {/* Main FAB */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? t('quick.close') : t('quick.open')}
          className="pointer-events-auto relative grid size-14 place-items-center rounded-full bg-brand-500 text-white shadow-[0_14px_36px_-10px_rgba(229,62,62,0.7)] transition-all duration-300 hover:bg-brand-600 active:scale-95"
        >
          {!open && (
            <span
              aria-hidden
              className="absolute inset-0 animate-ping rounded-full bg-brand-500/40 motion-reduce:hidden"
            />
          )}
          {open ? (
            <X className="relative size-6" aria-hidden />
          ) : (
            <MessageCircle className="relative size-6" aria-hidden />
          )}
        </button>
      </div>
    </>
  );
}

/* -------------------------------------------------------------------------- */

type Message = { id: number; from: 'bot' | 'user'; text: string; cta?: { href: string; label: string } };

function ChatPanel({
  onClose,
  whatsappHref,
}: {
  onClose: () => void;
  whatsappHref: string;
}) {
  const { t } = useI18n();
  const [messages, setMessages] = useState<Message[]>([]);
  const [value, setValue] = useState('');
  const [showReplies, setShowReplies] = useState(true);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const nextId = useRef(1);

  const push = useCallback((message: Omit<Message, 'id'>) => {
    setMessages((prev) => [...prev, { ...message, id: nextId.current++ }]);
  }, []);

  useEffect(() => {
    push({ from: 'bot', text: t('chat.greeting') });
  }, [push, t]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  const send = (raw: string) => {
    const text = raw.trim();
    if (!text) return;
    push({ from: 'user', text });
    setValue('');
    setShowReplies(false);

    window.setTimeout(() => {
      push({ from: 'bot', text: t('chat.handoffReply') });
    }, 500);
    window.setTimeout(() => {
      push({
        from: 'bot',
        text: t('chat.handoffCta'),
        cta: { href: '/contact/#assessment-enquiry', label: t('chat.enquireCta') },
      });
    }, 900);
  };

  const quickReply = (reply: Reply) => {
    push({ from: 'user', text: t(reply.key) });
    setShowReplies(false);
    window.setTimeout(() => {
      push({ from: 'bot', text: t(`chat.answers.${reply.id}`) });
    }, 520);
  };

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-label={t('chat.title')}
      className="fixed bottom-24 right-4 z-50 flex max-h-[min(34rem,calc(100dvh-9rem))] w-[calc(100vw-2rem)] flex-col overflow-hidden rounded-2xl border border-line bg-surface-raised shadow-lift sm:right-6 sm:w-[22.5rem]"
    >
      {/* Header */}
      <div className="flex items-center gap-3 bg-brand-500 px-4 py-3.5 text-white">
        <span className="grid size-9 shrink-0 place-items-center rounded-full bg-white/20">
          <Bot className="size-5" aria-hidden />
        </span>
        <div className="min-w-0 flex-1">
          <p className="truncate font-display text-sm font-semibold">{t('chat.title')}</p>
          <p className="flex items-center gap-1.5 text-xs text-white/85">
            <span className="size-1.5 rounded-full bg-verified-400" aria-hidden />
            {t('chat.status')}
          </p>
        </div>
        <button
          type="button"
          onClick={onClose}
          aria-label={t('quick.close')}
          className="grid size-8 shrink-0 place-items-center rounded-full text-white/90 transition-colors hover:bg-white/15 hover:text-white"
        >
          <X className="size-4" aria-hidden />
        </button>
      </div>

      {/* Messages */}
      <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto bg-surface-muted p-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.from === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                message.from === 'user'
                  ? 'rounded-br-sm bg-brand-500 text-white'
                  : 'rounded-bl-sm border border-line bg-surface-raised text-body-strong'
              }`}
            >
              {message.text}
              {message.cta && (
                <Link
                  href={message.cta.href}
                  className="mt-2.5 block rounded-lg bg-brand-50 px-3 py-2 text-center text-sm font-semibold text-brand-700 hover:bg-brand-100"
                >
                  {message.cta.label}
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Quick replies */}
      {showReplies && (
        <div className="border-t border-line bg-surface-raised p-3">
          <p className="mb-2 text-[0.6875rem] font-bold uppercase tracking-[0.14em] text-body-soft">
            {t('chat.suggested')}
          </p>
          <div className="flex flex-wrap gap-2">
            {QUICK_REPLIES.map((reply) => (
              <button
                key={reply.id}
                type="button"
                onClick={() => quickReply(reply)}
                className="rounded-full border border-line px-3 py-1.5 text-xs font-medium text-body-strong transition-colors hover:border-brand-300 hover:text-brand-600"
              >
                {t(reply.key)}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Composer */}
      <form
        onSubmit={(event) => {
          event.preventDefault();
          send(value);
        }}
        className="flex items-center gap-2 border-t border-line bg-surface-raised p-3"
      >
        <label htmlFor="quick-chat-input" className="sr-only">
          {t('chat.placeholder')}
        </label>
        <input
          id="quick-chat-input"
          value={value}
          onChange={(event) => setValue(event.target.value)}
          placeholder={t('chat.placeholder')}
          className="min-w-0 flex-1 rounded-full border border-line bg-surface px-3.5 py-2.5 text-sm text-heading placeholder:text-body-soft focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
        />
        <button
          type="submit"
          aria-label={t('chat.send')}
          className="grid size-10 shrink-0 place-items-center rounded-full bg-brand-500 text-white transition-colors hover:bg-brand-600 disabled:opacity-50"
          disabled={!value.trim()}
        >
          <Send className="size-4" aria-hidden />
        </button>
      </form>

      {/* Footer handoff */}
      <div className="border-t border-line bg-surface-muted px-4 py-3">
        <p className="mb-2 text-xs leading-relaxed text-body-soft">{t('chat.disclaimer')}</p>
        <div className="flex gap-2">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 rounded-lg bg-verified-500 px-3 py-2 text-center text-xs font-semibold text-white hover:bg-verified-500/90"
          >
            {t('chat.whatsappCta')}
          </a>
          <a
            href={`tel:${site.phoneHref}`}
            className="flex-1 rounded-lg border border-line bg-surface-raised px-3 py-2 text-center text-xs font-semibold text-heading hover:border-brand-300"
          >
            {t('quick.call')}
          </a>
        </div>
      </div>
    </div>
  );
}
