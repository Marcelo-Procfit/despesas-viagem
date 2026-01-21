const ExtratoView = ({ onBack }) => {
  const [filtros, setFiltros] = React.useState({
    periodo: '30dias',
    tipo: 'todos'
  });

  // Dados mockados
  const dadosExtrato = {
    resumo: {
      totalAdiantamentos: 15000.00,
      totalDespesas: 8750.50,
      saldoDisponivel: 6249.50
    },
    transacoes: [
      {
        id: 1,
        tipo: 'adiantamento',
        data: '2026-01-20',
        descricao: 'Adiantamento para viagem - São Paulo',
        valor: 5000.00,
        status: 'Aprovado'
      },
      {
        id: 2,
        tipo: 'despesa',
        data: '2026-01-19',
        descricao: 'Hospedagem - Hotel Ibis',
        categoria: 'Hospedagem',
        valor: -320.00,
        comprovante: true
      },
      {
        id: 3,
        tipo: 'despesa',
        data: '2026-01-19',
        descricao: 'Combustível - Posto Shell',
        categoria: 'Combustível',
        valor: -180.50,
        comprovante: true
      },
      {
        id: 4,
        tipo: 'adiantamento',
        data: '2026-01-15',
        descricao: 'Adiantamento para viagem - Rio de Janeiro',
        valor: 3500.00,
        status: 'Aprovado'
      },
      {
        id: 5,
        tipo: 'despesa',
        data: '2026-01-14',
        descricao: 'Alimentação - Restaurante',
        categoria: 'Alimentação',
        valor: -125.00,
        comprovante: true
      },
      {
        id: 6,
        tipo: 'despesa',
        data: '2026-01-14',
        descricao: 'Transporte - Táxi aeroporto',
        categoria: 'Transporte',
        valor: -85.00,
        comprovante: true
      },
      {
        id: 7,
        tipo: 'adiantamento',
        data: '2026-01-10',
        descricao: 'Adiantamento para viagem - Belo Horizonte',
        valor: 2500.00,
        status: 'Aprovado'
      },
      {
        id: 8,
        tipo: 'despesa',
        data: '2026-01-09',
        descricao: 'Estacionamento - Shopping Center',
        categoria: 'Estacionamento',
        valor: -45.00,
        comprovante: true
      }
    ]
  };

  const handleFiltroChange = function(campo, valor) {
    setFiltros(function(prev) {
      return { ...prev, [campo]: valor };
    });
  };

  const formatarMoeda = function(valor) {
    return Math.abs(valor).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  };

  const formatarData = function(data) {
    return new Date(data).toLocaleDateString('pt-BR');
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
        <h2 className="text-xl font-bold text-gray-900">Extrato de Viagem</h2>
      </div>

      {/* Resumo */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-blue-500">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500">Total Adiantamentos</span>
            <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </div>
          <div className="text-2xl font-bold text-gray-900 mt-2">
            {formatarMoeda(dadosExtrato.resumo.totalAdiantamentos)}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-red-500">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500">Total Despesas</span>
            <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
            </svg>
          </div>
          <div className="text-2xl font-bold text-gray-900 mt-2">
            {formatarMoeda(dadosExtrato.resumo.totalDespesas)}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-green-500">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500">Saldo Disponível</span>
            <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
            </svg>
          </div>
          <div className="text-2xl font-bold text-green-600 mt-2">
            {formatarMoeda(dadosExtrato.resumo.saldoDisponivel)}
          </div>
        </div>
      </div>

      {/* Filtros */}
      <div className="flex items-center gap-4 mb-6 flex-wrap bg-white p-4 rounded-lg shadow-sm">
        <span className="text-sm text-gray-600 flex items-center gap-2">⚙ Filtros:</span>
        <select 
          value={filtros.periodo}
          onChange={function(e) { handleFiltroChange('periodo', e.target.value); }}
          className="border border-gray-300 rounded-md px-3 py-2 text-sm"
        >
          <option value="7dias">Últimos 7 dias</option>
          <option value="30dias">Últimos 30 dias</option>
          <option value="90dias">Últimos 90 dias</option>
        </select>
        <select 
          value={filtros.tipo}
          onChange={function(e) { handleFiltroChange('tipo', e.target.value); }}
          className="border border-gray-300 rounded-md px-3 py-2 text-sm"
        >
          <option value="todos">Todos os tipos</option>
          <option value="adiantamento">Apenas adiantamentos</option>
          <option value="despesa">Apenas despesas</option>
        </select>
        <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 text-sm">
          Exportar PDF
        </button>
      </div>

      {/* Lista de transações */}
      <div className="bg-white rounded-lg shadow-sm">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Histórico de Transações</h3>
        </div>
        
        <div className="divide-y divide-gray-200">
          {dadosExtrato.transacoes.map(function(transacao) {
            return (
              <div key={transacao.id} className="px-6 py-4 hover:bg-gray-50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      transacao.tipo === 'adiantamento' 
                        ? 'bg-blue-50 text-blue-500' 
                        : 'bg-red-50 text-red-500'
                    }`}>
                      {transacao.tipo === 'adiantamento' ? (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                      ) : (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                        </svg>
                      )}
                    </div>
                    
                    <div>
                      <p className="font-medium text-gray-900">{transacao.descricao}</p>
                      <div className="flex items-center gap-4 text-sm text-gray-500 mt-1">
                        <span>{formatarData(transacao.data)}</span>
                        {transacao.categoria && (
                          <span className="px-2 py-1 bg-gray-100 rounded text-xs">{transacao.categoria}</span>
                        )}
                        {transacao.status && (
                          <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">{transacao.status}</span>
                        )}
                        {transacao.comprovante && (
                          <span className="flex items-center gap-1 text-blue-600">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                            </svg>
                            Comprovante
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className={`text-lg font-semibold ${
                      transacao.valor > 0 ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {transacao.valor > 0 ? '+' : ''}{formatarMoeda(transacao.valor)}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};