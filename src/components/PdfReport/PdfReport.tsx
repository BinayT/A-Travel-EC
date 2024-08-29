import React from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { ProductProps } from '../datatypes/Product';
import './styles.css';


const ReportButton: React.FC<ProductProps> = ({product}) => {
  const generateReport = () => {
    const doc = new jsPDF();

    doc.setFontSize(16);
    doc.text('Report: World Travel Inc', 10, 10);

    doc.setFontSize(12);
    doc.text(`Current Inventory: ${product.currentInventory}`, 10, 20);

    doc.text('Sales Data:', 10, 30);
    (doc as any).autoTable({
      startY: 35,
      head: [['Period', 'Sales']],
      body: [
        ['Last 12 Months', product.salesData.last12Months.join(', ')],
        ['Last 6 Months', product.salesData.last6Months.join(', ')],
        ['Last 3 Months', product.salesData.last3Months.join(', ')],
        ['Last Month', product.salesData.lastMonth.join(', ')],
      ]
    });

    doc.text('Conversion Rate Data:', 10, (doc as any).previousAutoTable.finalY + 10);
    (doc as any).autoTable({
      startY: (doc as any).previousAutoTable.finalY + 15,
      head: [['Period', 'Conversion Rates']],
      body: [
        ['Last 12 Months', product.conversionRateData.last12Months.join(', ')],
        ['Last 6 Months', product.conversionRateData.last6Months.join(', ')],
        ['Last 3 Months', product.conversionRateData.last3Months.join(', ')],
        ['Last Month', product.conversionRateData.lastMonth.join(', ')],
      ]
    });

    doc.text('Review Trend Data:', 10, (doc as any).previousAutoTable.finalY + 10);
    (doc as any).autoTable({
      startY: (doc as any).previousAutoTable.finalY + 15,
      head: [['Period', 'Review Trends']],
      body: [
        ['Last 12 Months', product.reviewTrendData.last12Months.join(', ')],
        ['Last 6 Months', product.reviewTrendData.last6Months.join(', ')],
        ['Last 3 Months', product.reviewTrendData.last3Months.join(', ')],
        ['Last Month', product.reviewTrendData.lastMonth.join(', ')],
      ]
    });

    const pdfName = 'Report_' + product?.name.split(' ').join('_') + '.pdf'
    doc.save(pdfName);
  };

  return (
        <div className='generatePdfBtn d-flex-jc-ac'>
          <button onClick={generateReport}>
              Generate Report
          </button>
        </div>

  );
};

export default ReportButton;