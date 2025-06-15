export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-16 py-6 border-t border-slate-200 dark:border-slate-800">
      <div className="text-center text-sm text-slate-600 dark:text-slate-400">
        <p>© {currentYear} Trustixo. We are a TradingView affiliate.</p>
      </div>
    </footer>
  );
}
