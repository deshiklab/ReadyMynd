'use client';

import type { ReactNode } from 'react';
import { ThemeProvider } from '@/lib/theme';
import { I18nProvider } from '@/lib/i18n';
import { messages } from '@/lib/i18n/messages';
import { QuickActions } from '@/components/quick-actions/quick-actions';

/**
 * Runs synchronously before first paint so the stored theme and language are
 * applied without a flash. Light is the default; Bengali is opt-in.
 */
export function NoFlashScript() {
  const code = `(function(){try{
    var t=localStorage.getItem('readymynd-theme');
    var dark=t==='dark';
    var root=document.documentElement;
    root.classList.toggle('dark',dark);
    root.style.colorScheme=dark?'dark':'light';
    var l=localStorage.getItem('readymynd-locale');
    root.lang=(l==='bn')?'bn':'en';
  }catch(e){}})();`;

  return <script dangerouslySetInnerHTML={{ __html: code }} />;
}

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <I18nProvider messages={messages}>
        {children}
        <QuickActions />
      </I18nProvider>
    </ThemeProvider>
  );
}
