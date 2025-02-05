import PropTypes from 'prop-types';

const CustomerInfo = ({ formData, handleInputChange }) => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Informations client</h2>
      <div>
        <label htmlFor="customerPhone" className="block text-sm font-medium text-gray-700">
          Numéro de téléphone
        </label>
        <input
          type="tel"
          id="customerPhone"
          name="customerPhone"
          value={formData.customerPhone}
          onChange={handleInputChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          placeholder="06 XX XX XX XX"
        />
      </div>
    </div>
  );
};

CustomerInfo.propTypes = {
  formData: PropTypes.shape({
    customerPhone: PropTypes.string,
  }).isRequired,
  handleInputChange: PropTypes.func.isRequired,
};

export default CustomerInfo;