import { PeriodOption } from "../periodOptions";

interface ProductPeriodSelectorProps {
    period: PeriodOption;
    setPeriod: (period: PeriodOption) => void;
}


const ProductPeriodSelector: React.FC<ProductPeriodSelectorProps> = ({period, setPeriod}) => {
  return (
    <div>
      <select value={period} onChange={(e) => setPeriod(e.target.value as 'last12Months' | 'last6Months' | 'last3Months' | 'lastMonth')}>
        <option value="last12Months">Last 12 Months</option>
        <option value="last6Months">Last 6 Months</option>
        <option value="last3Months">Last 3 Months</option>
        <option value="lastMonth">Last Month</option>
      </select>
    </div>
  );
};

export default ProductPeriodSelector;