export default function ProfileSection({ title, items }) {
    return (
      <div className="mt-24 mx-auto max-w-6xl">
        {/* Section Title */}
        <h2 className="text-5xl font-bold text-gray-800 mb-12 text-left ml-8">
          {title}
        </h2>
  
        {/* Grid Items */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-gray-800 ml-20">
          {items.map((item, index) => (
            <div className="text-left" key={index}>
              <h3 className="font-semibold uppercase text-sm mb-2 border-b border-gray-300 w-72">
                {item.title}
              </h3>
              <p className="text-4xl font-bold">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }