import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white px-6 text-slate-900">
      <p className="text-center text-xl font-medium">
        Next.js App Router 已准备就绪 ·{' '}
        <Link className="underline underline-offset-4" href="/demo">
          查看 Demo jowei-2-1
        </Link>
      </p>
    </main>
  );
}
