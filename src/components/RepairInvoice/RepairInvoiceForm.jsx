/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { Printer } from 'lucide-react';
import { PHONE_DATA } from '../../constants/phoneData';
import { generateRepairNumber } from '../../utils/helpers';

// Import form sections
import BasicInfo from './FormSections/BasicInfo';
import CustomerInfo from './FormSections/CustomerInfo';
import DeviceInfo from './FormSections/DeviceInfo';
import DiagnosticInfo from './FormSections/DiagnosticInfo';
import PriceInfo from './FormSections/PriceInfo';
import PrintLayout from './PrintLayout';

export const RepairInvoiceForm = () => {
  const [formData, setFormData] = useState({
    repairNumber: generateRepairNumber(),
    date: new Date().toISOString().split('T')[0],
    deviceType: 'Téléphone',
    customerPhone: '',
    brand: '',
    model: '',
    clientDiagnostic: '',
    technicianDiagnostic: '',
    totalPrice: '',
    paid: ''
  });

  const [isCustomBrand, setIsCustomBrand] = useState(false);
  const [isCustomModel, setIsCustomModel] = useState(false);
  const [availableModels, setAvailableModels] = useState([]);

  useEffect(() => {
    if (formData.brand && PHONE_DATA[formData.brand]) {
      setAvailableModels(PHONE_DATA[formData.brand]);
      setIsCustomModel(false);
    }
  }, [formData.brand]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'totalPrice' || name === 'paid') {
      const numValue = value === '' ? '' : Number(value);
      setFormData(prev => ({ ...prev, [name]: numValue }));
      return;
    }
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleBrandChange = (e) => {
    const value = e.target.value;
    if (value === 'custom') {
      setIsCustomBrand(true);
      setFormData(prev => ({ ...prev, brand: '', model: '' }));
    } else {
      setIsCustomBrand(false);
      setFormData(prev => ({ ...prev, brand: value, model: '' }));
    }
  };

  const handleModelChange = (e) => {
    const value = e.target.value;
    if (value === 'custom') {
      setIsCustomModel(true);
      setFormData(prev => ({ ...prev, model: '' }));
    } else {
      setIsCustomModel(false);
      setFormData(prev => ({ ...prev, model: value }));
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-4xl mx-auto space-y-4">
        <div className="bg-white rounded shadow-lg p-6 print:hidden">
          <div className="mb-6 border-b pb-4">
            <h1 className="text-2xl font-bold flex items-center gap-2 mb-2">
              iCell
            </h1>
            <p className="text-gray-600">
              Créez une nouvelle facture de réparation en remplissant le formulaire ci-dessous
            </p>
          </div>

          <form className="space-y-6">
            <BasicInfo 
              formData={formData} 
              handleInputChange={handleInputChange} 
            />
            
            <CustomerInfo 
              formData={formData} 
              handleInputChange={handleInputChange} 
            />
            
            <DeviceInfo 
              formData={formData}
              handleBrandChange={handleBrandChange}
              handleModelChange={handleModelChange}
              handleInputChange={handleInputChange}
              isCustomBrand={isCustomBrand}
              isCustomModel={isCustomModel}
              availableModels={availableModels}
              setIsCustomBrand={setIsCustomBrand}
              setIsCustomModel={setIsCustomModel}
              setFormData={setFormData}
            />
            
            <DiagnosticInfo 
              formData={formData} 
              handleInputChange={handleInputChange} 
            />
            
            <PriceInfo 
              formData={formData} 
              handleInputChange={handleInputChange} 
            />

            <div className="text-right">
              <span className="mr-4">
                Reste à payer: {((Number(formData.totalPrice) || 0) - (Number(formData.paid) || 0)).toFixed(2)} €
              </span>
              <button
                type="button"
                onClick={handlePrint}
                className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
              >
                <span className="flex items-center gap-2">
                  <Printer size={18} />
                  Imprimer la facture
                </span>
              </button>
            </div>
          </form>
        </div>

        <PrintLayout formData={formData} />
      </div>
    </div>
  );
};

export default RepairInvoiceForm;