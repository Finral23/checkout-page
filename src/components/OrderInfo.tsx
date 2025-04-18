const OrderInfo = () => {
  return (
    <div className="mt-4 p-4 bg-[#F7F7F9] rounded text-sm text-[var(--text-primary)]">
      <div className="font-bold text-base mb-1">Order info &lt;= 100 char.</div>
      <div className="text-[var(--text-secondary)] text-sm mb-3">
        Description &lt;= 400 char.
      </div>

      <div className="border-t border-[var(--color-border)] my-3" />

      <div className="mb-1">Lamel Professional Smart Skin Compact Powder</div>
      <div className="text-[var(--text-secondary)] text-sm">Пудра для лиця</div>

      <div className="border-t border-[var(--color-border)] my-3" />

      <div className="font-bold text-right">299.99 UAH / month</div>
    </div>
  );
};

export default OrderInfo;
