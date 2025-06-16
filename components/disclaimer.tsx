export function Disclaimer({ className = "" }: { className?: string }) {
  return (
    <div className={`text-sm text-slate-600 dark:text-slate-400 ${className}`}>
      <p className="mb-2">
        <strong>Disclaimer:</strong> Trustixo is not financial advice. All
        content is for informational and educational purposes only.
      </p>

      <p>
        We may receive compensation from affiliate partnerships with various
        providers, including TradingView and others.
      </p>
    </div>
  );
}
