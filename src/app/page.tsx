'use client';

export default function () {
  return (
      <main className="flex flex-col items-center p-30">
    <div className="w-full max-w-md mb-3">
      <input
        type="text"
        placeholder="Pesquisar..."
        className="w-full px-4 py-2 border border-purple-20 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
      />
    </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <div className="relative flex items-center justify-center flex-col bg-white shadow-md rounded-lg p-4 min-w-[200px] min-h-[150px] overflow-hidden">
          <img
            src="https://i.pinimg.com/736x/07/f9/ea/07f9ea1e6c2ec5111ede0bc00096c5fd.jpg"
            alt="Saude"
            className="absolute inset-0 w-full h-full object-cover opacity-42"
          />
          <h2 className="text-xl text-black font-bold mb-2 relative z-10">Saude</h2>
          <p className="text-gray-700 relative z-10">IMC e Calorias</p>
        </div>
        <div className="relative flex items-center justify-center flex-col bg-white shadow-md rounded-lg p-4 min-w-[200px] min-h-[150px] overflow-hidden">
          <img
            src="https://static.vecteezy.com/ti/vetor-gratis/p1/2623307-red-and-green-candle-chart-with-mark-high-and-low-position-and-volume-chart-on-black-background-trading-graphic-design-concept-financial-stock-market-cryptocurrency-ilustracaoial-de-grafico-vetor.jpg"
            alt="Financeiro"
            className="absolute inset-0 zoom-in-30 w-full h-full object-cover opacity-42"
          />
          <h2 className="text-xl text-black font-bold mb-2 relative z-10">Financeiro</h2>
          <p className="text-gray-700 relative z-10">Juros e taxas</p>
        </div>
        <div className="relative flex items-center justify-center flex-col bg-white shadow-md rounded-lg p-4 min-w-[200px] min-h-[150px] overflow-hidden">
          <img
            src="https://i.pinimg.com/736x/9c/3c/1e/9c3c1e2efc26cba667f5df1773b4bda8.jpg"
            alt="Digital"
            className="absolute inset-0 w-full h-full object-cover opacity-42"
          />
          <h2 className="text-xl text-black font-bold mb-2 relative z-10">Digital</h2>
          <p className="text-gray-700 relative z-10">Converta e baixe</p>
        </div>
        <div className="relative flex items-center justify-center flex-col bg-white shadow-md rounded-lg p-4 min-w-[200px] min-h-[150px] overflow-hidden">
          <img
            src="https://i.pinimg.com/736x/50/f5/76/50f576cf8a05c35bb396f4e4c7b1ac3a.jpg"
            alt="Organização"
            className="absolute inset-0 w-full h-full object-cover opacity-42"
          />
          <h2 className="text-xl text-black font-bold mb-2 relative z-10">Utilitários</h2>
          <p className="text-gray-700 relative z-10">Anote e organize</p>
        </div>
      </div>

   
    </main>
  );
}