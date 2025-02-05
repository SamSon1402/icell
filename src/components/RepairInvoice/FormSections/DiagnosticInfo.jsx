import PropTypes from 'prop-types';

const DiagnosticInfo = ({ formData, handleInputChange }) => {
  return (
    <>
      <div>
        <label className="block text-sm font-medium mb-1">Diagnostic du client</label>
        <textarea
          name="clientDiagnostic"
          value={formData.clientDiagnostic}
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
          rows="3"
          placeholder="Description du problème..."
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Diagnostic du technicien</label>
        <textarea
          name="technicianDiagnostic"
          value={formData.technicianDiagnostic}
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
          rows="3"
          placeholder="Évaluation technique..."
        />
      </div>
    </>
  );
};

DiagnosticInfo.propTypes = {
  formData: PropTypes.shape({
    clientDiagnostic: PropTypes.string.isRequired,
    technicianDiagnostic: PropTypes.string.isRequired
  }).isRequired,
  handleInputChange: PropTypes.func.isRequired
};

export default DiagnosticInfo;