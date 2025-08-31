"use client";

import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useI18n } from '@/components/providers/I18nProvider';

export default function SearchBox({
  initial,
  value: controlledValue,
  onSearch
}: {
  initial?: string;
  value?: string;
  onSearch?: (value: string) => void;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { t } = useI18n();
  const [uncontrolledValue, setUncontrolledValue] = useState(initial || '');

  // If a controlled value is provided, mirror it into local input state
  useEffect(() => {
    if (controlledValue !== undefined) {
      setUncontrolledValue(controlledValue);
    }
  }, [controlledValue]);

  const submit = (value: string) => {
    if (onSearch) {
      onSearch(value);
      return;
    }
    const params = new URLSearchParams(searchParams.toString());
    if (value) params.set('q', value);
    else params.delete('q');
    params.set('page', '0');
    router.push(`${pathname}?${params.toString()}`);
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submit(uncontrolledValue);
  };

  return (
    <form onSubmit={onSubmit} style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
      <input
        type="text"
        placeholder={t('search_title_placeholder')}
        value={uncontrolledValue}
        onChange={(e) => setUncontrolledValue(e.target.value)}
        style={{ padding: 8, width: 260 }}
      />
      <button type="submit" style={{ padding: '8px 12px' }}>
        {t('search')}
      </button>
    </form>
  );
}
