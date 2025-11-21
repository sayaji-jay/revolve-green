import { Check } from "lucide-react";
import Image from "next/image";

export default function SajjaDecorCard({ product, index }) {
  const isOddIndex = index % 2 !== 0;

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-green-200 hover:shadow-xl transition-all duration-300">
      <div className={`grid grid-cols-1 lg:grid-cols-2 gap-0`}>

        {/* Image Side */}
        <div className={`relative h-64 lg:h-80 overflow-hidden ${isOddIndex ? 'lg:order-2' : 'lg:order-1'}`}>
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <span className="absolute top-4 right-4 px-4 py-1.5 bg-green-600 text-white rounded-full text-xs font-bold shadow-md z-10">
            RENTAL
          </span>
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
        </div>

        {/* Content Side */}
        <div className={`p-6 md:p-8 flex flex-col justify-center ${isOddIndex ? 'lg:order-1' : 'lg:order-2'}`}>
          <div className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold mb-3 w-fit">
            Product #{product.id}
          </div>

          <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-3">
            {product.name}
          </h3>

          <p className="text-gray-700 text-sm leading-relaxed mb-4 font-medium">
            {product.description}
          </p>

          {/* Specifications */}
          <div className="space-y-2 mb-5">
            {product.specs.map((spec, idx) => (
              <div key={idx} className="flex items-start gap-2 bg-green-50 p-2.5 rounded-lg">
                <Check className="w-4 h-4 text-green-600 shrink-0 mt-0.5" strokeWidth={3} />
                <span className="text-gray-900 font-semibold text-sm">
                  <span className="text-green-700 font-black">{spec.label}:</span> {spec.value}
                </span>
              </div>
            ))}
          </div>

          {/* Rate - Simple Bold */}
          <div className="mt-2">
            <p className="text-xl md:text-2xl font-black text-gray-900">
              {product.rate}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
