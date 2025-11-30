import Link from 'next/link';

export default function CancelPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-lg mx-auto text-center">
        <div className="bg-white rounded-xl shadow-md p-8">
          <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg
              className="w-10 h-10 text-amber-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>

          <h1 className="text-3xl font-bold text-slate-900 mb-4">
            Paiement annulé
          </h1>

          <p className="text-slate-600 mb-8">
            Votre paiement a été annulé. Aucun montant n'a été débité.
            <br />
            Vous pouvez revenir à l'accueil pour recommencer si vous le souhaitez.
          </p>

          <Link
            href="/"
            className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg px-6 py-3 transition-colors"
          >
            Retour à l'accueil
          </Link>
        </div>
      </div>
    </main>
  );
}
