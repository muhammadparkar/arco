import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center bg-arco-cream px-5 py-24 text-center text-arco-ink">
      <p className="font-display text-sm uppercase tracking-[0.3em] text-arco-red">
        404
      </p>
      <h1 className="mt-3 font-display text-4xl font-bold uppercase tracking-wide sm:text-5xl">
        Page not found
      </h1>
      <p className="mt-4 max-w-md text-ink-dim">
        The page you're looking for doesn't exist or has moved. Try the
        catalogue or head back home.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/"
          className="inline-flex h-12 items-center justify-center rounded-lg bg-arco-green px-7 font-display text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-arco-green-dark"
        >
          Back to home
        </Link>
        <Link
          href="/products"
          className="inline-flex h-12 items-center justify-center rounded-lg border border-arco-ink/20 px-7 font-display text-sm font-bold uppercase tracking-wide text-arco-ink transition-colors hover:border-arco-red hover:text-arco-red"
        >
          Browse products
        </Link>
      </div>
    </div>
  );
}
