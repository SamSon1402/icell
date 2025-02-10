/* eslint-disable react/prop-types */
const PrintLayout = ({ formData = {} }) => {
  const {
    repairNumber = '',
    date = '',
    customerPhone = '',
    brand = '',
    model = '',
    clientDiagnostic = '',
    technicianDiagnostic = '',
    totalPrice = 0,
    paid = 0
  } = formData;

  const remaining = (Number(totalPrice) || 0) - (Number(paid) || 0);

  // Component for the receipt content to avoid duplication
  const ReceiptContent = ({ copyType }) => (
    <div className="max-w-[480px] mx-auto relative">
      {/* Copy Type Indicator */}
      {copyType && (
        <div className="absolute top-2 right-2">
          <p className="text-[10px] text-gray-500">{copyType}</p>
        </div>
      )}
      
      {/* Header Section */}
      <div className="text-center mb-6">
        {/* Logo */}
        <div className="w-56 mx-auto -mt-2 mb-8">
          <svg viewBox="0 0 400 100" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(80, 10)">
              {/* Pixel Coin */}
              <g transform="translate(0, 10)">
                <rect x="0" y="0" width="20" height="20" fill="#FFD700" stroke="#000000" strokeWidth="2"/>
                <path d="M5 5 h5 v5 h5 v5 h-5 v-5 h-5 z" fill="#FFA000"/>
              </g>

              {/* i stem */}
              <g transform="translate(10, 0)">
                <path d="M10 35 L10 90" stroke="#000000" strokeWidth="18" strokeLinecap="round"/>
                <path d="M10 35 L10 90" stroke="#FFFFFF" strokeWidth="14" strokeLinecap="round"/>
              </g>

              {/* C */}
              <g transform="translate(25, 0)">
                <path d="M45 40 C25 40 25 65 25 65 C25 85 45 85 45 85 L65 85" 
                      stroke="#000000" strokeWidth="18" strokeLinecap="round" fill="none"/>
                <path d="M45 40 C25 40 25 65 25 65 C25 85 45 85 45 85 L65 85" 
                      stroke="#FFFFFF" strokeWidth="14" strokeLinecap="round" fill="none"/>
              </g>

              {/* e */}
              <g transform="translate(75, 0)">
                <path d="M30 65 C30 45 45 35 65 35 C85 35 90 50 90 65 L30 65 C30 80 45 90 65 90 C85 90 90 75 90 65" 
                      stroke="#000000" strokeWidth="18" strokeLinecap="round" fill="none"/>
                <path d="M30 65 C30 45 45 35 65 35 C85 35 90 50 90 65 L30 65 C30 80 45 90 65 90 C85 90 90 75 90 65" 
                      stroke="#FFFFFF" strokeWidth="14" strokeLinecap="round" fill="none"/>
                <circle cx="60" cy="65" r="12" fill="#4CAF50"/>
                <path d="M54 67 L66 67 M54 62 L66 62" stroke="#FFFFFF" strokeWidth="2.5"/>
              </g>

              {/* First l */}
              <g transform="translate(180, 0)">
                <path d="M10 35 L10 90" stroke="#000000" strokeWidth="18" strokeLinecap="round"/>
                <path d="M10 35 L10 90" stroke="#FFFFFF" strokeWidth="14" strokeLinecap="round"/>
              </g>

              {/* Second l */}
              <g transform="translate(210, 0)">
                <path d="M10 35 L10 90" stroke="#000000" strokeWidth="18" strokeLinecap="round"/>
                <path d="M10 35 L10 90" stroke="#FFFFFF" strokeWidth="14" strokeLinecap="round"/>
              </g>

              {/* Phone icon */}
              <g transform="translate(250, 40)">
                <rect x="0" y="0" width="35" height="50" rx="5" fill="#4CAF50" stroke="#000000" strokeWidth="2"/>
                <rect x="4" y="4" width="27" height="32" fill="#E0E0E0"/>
                <circle cx="17.5" cy="20" r="6" fill="#FFD700"/>
                <circle cx="17.5" cy="20" r="4" fill="#FFA000"/>
                <g fill="#E0E0E0">
                  <circle cx="10" cy="42" r="2"/>
                  <circle cx="17.5" cy="42" r="2"/>
                  <circle cx="25" cy="42" r="2"/>
                </g>
                <path d="M38 10 Q48 10 48 20" stroke="#4CAF50" fill="none" strokeWidth="3"/>
                <path d="M38 20 Q43 20 43 25" stroke="#4CAF50" fill="none" strokeWidth="3"/>
                <path d="M38 30 Q40 30 40 32" stroke="#4CAF50" fill="none" strokeWidth="3"/>
              </g>
            </g>
          </svg>
        </div>

        <h2 className="text-sm tracking-[0.2em] text-gray-600 mb-3">RÉPARATION SMARTPHONE</h2>
        <div className="text-[11px] text-gray-500 space-y-0.5">
          <p>81 Rue Riquet, 75018 Paris</p>
          <p>Téléphone : 09 54 60 80 91</p>
          <p>Email : icellparis@gmail.com</p>
        </div>
      </div>

      {/* Main Info */}
      <div className="mb-4 grid grid-cols-2 gap-x-4 gap-y-3 text-center">
        <div>
          <p className="text-[11px] font-medium text-gray-700">RÉPARATION</p>
          <p className="text-sm text-gray-600">{repairNumber}</p>
        </div>
        <div>
          <p className="text-[11px] font-medium text-gray-700">DATE</p>
          <p className="text-sm text-gray-600">{date}</p>
        </div>
        <div>
          <p className="text-[11px] font-medium text-gray-700">TÉLÉPHONE</p>
          <p className="text-sm text-gray-600">{customerPhone}</p>
        </div>
        <div>
          <p className="text-[11px] font-medium text-gray-700">MARQUE</p>
          <p className="text-sm text-gray-600">{brand} {model}</p>
        </div>
      </div>

      {/* Diagnostic */}
      <div className="mb-4 grid grid-cols-2 gap-3">
        <div className="p-2 bg-gray-50">
          <h3 className="text-[11px] font-medium text-gray-700 mb-1 text-center">DIAGNOSTIQUE CLIENT</h3>
          <p className="text-sm text-gray-600 text-center">{clientDiagnostic}</p>
        </div>
        <div className="p-2 bg-gray-50">
          <h3 className="text-[11px] font-medium text-gray-700 mb-1 text-center">DIAGNOSTIQUE TECHNICIEN</h3>
          <p className="text-sm text-gray-600 text-center">{technicianDiagnostic}</p>
        </div>
      </div>

      {/* Price */}
      <div className="mb-4">
        <div className="max-w-[180px] mx-auto space-y-1">
          <div className="flex justify-between">
            <p className="text-[11px] font-medium text-gray-700">PRIX TTC</p>
            <p className="text-sm text-gray-600">€{Number(totalPrice).toFixed(2)}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-[11px] font-medium text-gray-700">PAYÉ</p>
            <p className="text-sm text-gray-600">€{Number(paid).toFixed(2)}</p>
          </div>
          <div className="flex justify-between pt-1 border-t">
            <p className="text-[11px] font-medium text-gray-700">RESTE À PAYER</p>
            <p className="text-sm font-medium text-gray-600">€{remaining.toFixed(2)}</p>
          </div>
        </div>
      </div>

      {/* Warning Note */}
      <div className="mb-4 text-center">
        <div className="inline-block bg-gray-50 rounded-lg p-3 shadow-sm border border-gray-100">
          <div className="mb-2">
            <svg width="24" height="24" viewBox="0 0 24 24" className="mx-auto">
              <path d="M12 4 A7 7 0 0 0 5 11 A7 7 0 0 0 12 18 A7 7 0 0 0 19 11 A7 7 0 0 0 12 4" 
                    fill="#FEF3C7" stroke="#F59E0B" strokeWidth="1.5"/>
              <path d="M12 8v4m0 2v.01" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
          <div className="space-y-1">
            <p className="text-[11px] font-medium text-amber-700">IMPORTANT</p>
            <p className="text-[11px] font-medium text-amber-700 underline decoration-amber-400">SANS NOTRE TICKET</p>
            <p className="text-[10px] text-amber-600">Ne pouvons pas rendre votre téléphone portable.</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center">
        <div className="w-1.5 h-1.5 mx-auto mb-2">
          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
        </div>
        <p className="text-[11px] tracking-wider text-gray-500">MERCI DE VOTRE CONFIANCE</p>
        <p className="text-[10px] text-gray-400 mt-3">© 2025 iCell. All rights reserved.</p>
      </div>
    </div>
  );

  return (
    <div className="hidden print:block">
      {/* First Page - Client Copy */}
      <div className="p-4 bg-white text-gray-800">
        <ReceiptContent copyType="Copie Client" />
      </div>
      
      {/* Page Break */}
      <div className="break-after-page"></div>
      
      {/* Second Page - Shop Copy */}
      <div className="p-4 bg-white text-gray-800">
        <ReceiptContent copyType="Copie Magasin" />
      </div>
    </div>
  );
};

export default PrintLayout;