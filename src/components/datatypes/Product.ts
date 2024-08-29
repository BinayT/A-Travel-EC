interface Product {
    id: string;
    name: string;
    currentInventory: number;
    salesData: {
      last12Months: number[];
      last6Months: number[];
      last3Months: number[];
      lastMonth: number[];
    };
    conversionRateData: {
      last12Months: number[];
      last6Months: number[];
      last3Months: number[];
      lastMonth: number[];
    };
    reviewTrendData: {
      last12Months: number[];
      last6Months: number[];
      last3Months: number[];
      lastMonth: number[];
    };
    latestComments: {
      name: string;
      image: string;
      comment: string;
      timestamp: string;
    }[];
  }
  
export interface ProductProps {
    product: Product;
  }
  