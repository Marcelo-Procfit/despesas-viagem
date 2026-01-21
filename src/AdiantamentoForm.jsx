const AdiantamentoForm = ({ onBack, onSubmit }) => {
  const [formData, setFormData] = React.useState({
    motivo: '',
    valor: '',
    dataViagem: '',
    destino: '',
    justificativa: ''
  });

  const handleSubmit = function(e) {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleInputChange = function(field, value) {
    setFormData(function(prev) {
      return { ...prev, [field]: value };
    });
  };

  return (
    <div>
      <div className="flex items-center gap-4 mb-6">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Voltar
        </button>
        <h2 className="text-xl font-bold text-gray-900">Solicitar Adiantamento</h2>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Motivo da Viagem *
              </label>
              <input
                type="text"
                value={formData.motivo}
                onChange={function(e) { handleInputChange('motivo', e.target.value); }}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Ex: Visita a clientes"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Valor Solicitado *
              </label>
              <input
                type="number"
                step="0.01"
                value={formData.valor}
                onChange={function(e) { handleInputChange('valor', e.target.value); }}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="0,00"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Data da Viagem *
              </label>
              <input
                type="date"
                value={formData.dataViagem}
                onChange={function(e) { handleInputChange('dataViagem', e.target.value); }}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Destino *
              </label>
              <input
                type="text"
                value={formData.destino}
                onChange={function(e) { handleInputChange('destino', e.target.value); }}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Ex: São Paulo - SP"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Justificativa
            </label>
            <textarea
              value={formData.justificativa}
              onChange={function(e) { handleInputChange('justificativa', e.target.value); }}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
              placeholder="Detalhe o motivo e necessidade do adiantamento..."
            />
          </div>

          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={onBack}
              className="px-6 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Solicitar Adiantamento
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};