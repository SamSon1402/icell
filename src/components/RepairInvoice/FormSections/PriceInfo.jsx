import PropTypes from 'prop-types';

const PriceInfo = ({ formData, handleInputChange }) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div>
        <label className="block text-sm font-medium mb-1">Prix total (TTC)</label>
        <input
          type="number"
          name="totalPrice"
          value={formData.totalPrice}
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
          min="0"
          step="any"
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Montant payé</label>
        <input
          type="number"
          name="paid"
          value={formData.paid}
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
          min="0"
          step="any"
        />
      </div>
    </div>
  );
};

PriceInfo.propTypes = {
  formData: PropTypes.shape({
    totalPrice: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]).isRequired,
    paid: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]).isRequired
  }).isRequired,
  handleInputChange: PropTypes.func.isRequired
};

export default PriceInfo;