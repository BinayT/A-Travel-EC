import { PeriodOption } from "../../../types/datatypes/periodOptions";
import './styles.css'

interface ProductPeriodSelectorProps {
    period: PeriodOption;
    setPeriod: (period: PeriodOption) => void;
}

const ProductPeriodSelector: React.FC<ProductPeriodSelectorProps> = ({period, setPeriod}) => {
  return (
    <div className="chartPeriodContainer d-flex-jc-ac">
      <span className="chartPeriodContainer__selectPeriod">Select Period :</span>
      <select value={period} onChange={(e) => setPeriod(e.target.value as PeriodOption)} className="chartPeriodContainer__selector">
        <option value="last12Months">Last 12 Months</option>
        <option value="last6Months">Last 6 Months</option>
        <option value="last3Months">Last 3 Months</option>
        <option value="lastMonth">Last Month</option>
      </select>
    </div>
  );
};

export default ProductPeriodSelector;