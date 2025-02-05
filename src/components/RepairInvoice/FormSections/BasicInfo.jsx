import PropTypes from 'prop-types';

const BasicInfo = ({ formData, handleInputChange }) => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Informations de base</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="repairNumber" className="block text-sm font-medium text-gray-700">
            Numéro de réparation
          </label>
          <input
            type="text"
            id="repairNumber"
            name="repairNumber"
            value={formData.repairNumber}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            readOnly
          />
        </div>
        <div>
          <label htmlFor="date" className="block text-sm font-medium text-gray-700">
            Date
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
      </div>
    </div>
  );
};

BasicInfo.propTypes = {
  formData: PropTypes.shape({
    repairNumber: PropTypes.string,
    date: PropTypes.string,
  }).isRequired,
  handleInputChange: PropTypes.func.isRequired,
};

export default BasicInfo;