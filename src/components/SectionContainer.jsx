export default function SectionContainer({ title, children }) {
  return (
    <div className="mb-10">
      <div className="bg-black text-yellow-400 p-6 rounded-lg mb-6 shadow">
          <h2 className="text-3xl font-bold text-center">{title}</h2>
      </div>
      <p className="text-black mt-1 font-bold text-center m-8">Produtos em destaque</p>

      <div className="bg-white grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {children}
      </div>
    </div>
  );
}