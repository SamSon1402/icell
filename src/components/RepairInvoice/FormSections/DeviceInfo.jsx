import PropTypes from 'prop-types';
import { PHONE_DATA } from '../../../constants/phoneData';

const DeviceInfo = ({
  formData,
  handleBrandChange,
  handleModelChange,
  handleInputChange,
  isCustomBrand,
  isCustomModel,
  availableModels
}) => {
  const brands = Object.keys(PHONE_DATA);

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Informations appareil</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="deviceType" className="block text-sm font-medium text-gray-700">
            Type d&apos;appareil
          </label>
          <select
            id="deviceType"
            name="deviceType"
            value={formData.deviceType}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="Téléphone">Téléphone</option>
            <option value="Tablette">Tablette</option>
          </select>
        </div>

        <div>
          <label htmlFor="brand" className="block text-sm font-medium text-gray-700">
            Marque
          </label>
          {isCustomBrand ? (
            <input
              type="text"
              id="brand"
              name="brand"
              value={formData.brand}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="Entrer la marque..."
            />
          ) : (
            <select
              id="brand"
              name="brand"
              value={formData.brand}
              onChange={handleBrandChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            >
              <option value="">Sélectionner une marque</option>
              {brands.map(brand => (
                <option key={brand} value={brand}>{brand}</option>
              ))}
              <option value="custom">Autre marque...</option>
            </select>
          )}
        </div>

        <div>
          <label htmlFor="model" className="block text-sm font-medium text-gray-700">
            Modèle
          </label>
          {isCustomModel || isCustomBrand ? (
            <input
              type="text"
              id="model"
              name="model"
              value={formData.model}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="Entrer le modèle..."
            />
          ) : (
            <select
              id="model"
              name="model"
              value={formData.model}
              onChange={handleModelChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              disabled={!formData.brand}
            >
              <option value="">Sélectionner un modèle</option>
              {availableModels.map(model => (
                <option key={model} value={model}>{model}</option>
              ))}
              <option value="custom">Autre modèle...</option>
            </select>
          )}
        </div>
      </div>
    </div>
  );
};

DeviceInfo.propTypes = {
  formData: PropTypes.shape({
    deviceType: PropTypes.string,
    brand: PropTypes.string,
    model: PropTypes.string,
  }).isRequired,
  handleBrandChange: PropTypes.func.isRequired,
  handleModelChange: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  isCustomBrand: PropTypes.bool.isRequired,
  isCustomModel: PropTypes.bool.isRequired,
  availableModels: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default DeviceInfo;