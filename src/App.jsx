const App = () => {
  const [currentView, setCurrentView] = React.useState('menu');
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(function() {
      setIsLoading(false);
    }, 800);
    return function() { clearTimeout(timer); };
  }, []);

  const handleMenuClick = function(view) {
    setCurrentView(view);
  };

  const handleBack = function() {
    setCurrentView('menu');
  };

  const handleAdiantamentoSubmit = function(data) {
    alert('Solicitação de adiantamento enviada com sucesso!');
    setCurrentView('menu');
  };

  const handleDespesaSubmit = function(data) {
    alert('Despesa lançada com sucesso!');
    setCurrentView('menu');
  };

  if (isLoading) {
    return (
      <div className="p-6">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/3 mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-1/4 mb-8"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1,2,3].map(function(i) {
              return (
                <div key={i} className="bg-white rounded-lg shadow-sm p-5">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-lg"></div>
                    <div className="flex-1">
                      <div className="h-3 bg-gray-200 rounded w-1/3 mb-2"></div>
                      <div className="h-4 bg-gray-200 rounded w-2/3 mb-2"></div>
                      <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6">
      {currentView === 'menu' && (
        <>
          <Header />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <MenuCard
              icon={
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              }
              categoria="FINANCEIRO"
              titulo="Solicitar Adiantamento"
              descricao="Solicite adiantamento para suas viagens de trabalho"
              timestamp="Disponível"
              onClick={function() { handleMenuClick('adiantamento'); }}
              bgColor="bg-blue-50"
              iconColor="text-blue-500"
            />

            <MenuCard
              icon={
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              }
              categoria="DESPESAS"
              titulo="Lançar Despesa"
              descricao="Registre suas despesas de viagem com comprovantes"
              timestamp="Disponível"
              onClick={function() { handleMenuClick('despesa'); }}
              bgColor="bg-teal-50"
              iconColor="text-teal-500"
            />

            <MenuCard
              icon={
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              }
              categoria="RELATÓRIOS"
              titulo="Extrato de Viagem"
              descricao="Visualize o saldo entre adiantamentos e despesas"
              timestamp="Atualizado há 2 min"
              onClick={function() { handleMenuClick('extrato'); }}
              bgColor="bg-green-50"
              iconColor="text-green-500"
            />
          </div>

          <div className="mt-8 bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Resumo Rápido</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">R$ 15.000,00</div>
                <div className="text-sm text-gray-500">Adiantamentos Recebidos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-600">R$ 8.750,50</div>
                <div className="text-sm text-gray-500">Despesas Lançadas</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">R$ 6.249,50</div>
                <div className="text-sm text-gray-500">Saldo Disponível</div>
              </div>
            </div>
          </div>
        </>
      )}

      {currentView === 'adiantamento' && (
        <AdiantamentoForm onBack={handleBack} onSubmit={handleAdiantamentoSubmit} />
      )}

      {currentView === 'despesa' && (
        <DespesaForm onBack={handleBack} onSubmit={handleDespesaSubmit} />
      )}

      {currentView === 'extrato' && (
        <ExtratoView onBack={handleBack} />
      )}
    </div>
  );
};