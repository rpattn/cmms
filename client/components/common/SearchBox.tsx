"use client";

import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import { useState } from 'react';

export default function SearchBox({ initial }: { initial?: string }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [value, setValue] = useState(initial || '');

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams(searchParams.toString());
    if (value) params.set('q', value);
    else params.delete('q');
    params.set('page', '0');
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <form onSubmit={onSubmit} style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
      <input
        type="text"
        placeholder="Search title..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        style={{ padding: 8, width: 260 }}
      />
      <button type="submit" style={{ padding: '8px 12px' }}>
        Search
      </button>
    </form>
  );
}

