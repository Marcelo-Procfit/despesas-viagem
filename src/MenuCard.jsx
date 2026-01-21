const MenuCard = ({ icon, categoria, titulo, descricao, timestamp, onClick, bgColor = 'bg-blue-50', iconColor = 'text-blue-500' }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-5 hover:shadow-md transition-shadow cursor-pointer" onClick={onClick}>
      <div className="flex items-start gap-4">
        <div className={`w-12 h-12 ${bgColor} rounded-lg flex items-center justify-center`}>
          <svg className={`w-6 h-6 ${iconColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {icon}
          </svg>
        </div>
        <div className="flex-1">
          <span className={`text-xs font-semibold ${iconColor} uppercase`}>{categoria}</span>
          <h3 className="text-base font-semibold text-gray-900 mt-1">{titulo}</h3>
          <p className="text-sm text-gray-500 mt-1">{descricao}</p>
          <p className="text-xs text-gray-400 mt-2">⏱ {timestamp}</p>
        </div>
      </div>
    </div>
  );
};