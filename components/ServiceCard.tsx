import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  price: string;
  features: string[];
  href: string;
  imageSrc: string;
}

const ServiceCard = ({ title, description, price, features, href}: ServiceCardProps) => {
  return (
    <Link href={href} className="block group">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-1 h-full">
        <div className="p-6 flex flex-col h-full">
          <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors"
            style={{lineHeight: '1.5rem', minHeight: "72px"}}  
          >
            {title}
          </h3>
          
          {/* Description with fixed height */}
          <div className="mb-4 flex-grow">
            <p className="text-gray-600 text-sm leading-relaxed min-h-[2.5rem]">
              {description}
            </p>
          </div>
          
          {/* Price section with consistent spacing */}
          <div className="mb-4">
            <div className="flex items-baseline">
              <span className="text-2xl font-bold text-red-600">{price}</span>
              <span className="text-gray-500 text-sm ml-1">от</span>
            </div>
          </div>

          {/* Features list with fixed height */}
          <div className="mb-6 flex-grow">
            <ul className="space-y-2 min-h-[6rem]">
              {features.map((feature, index) => (
                <li key={index} className="text-sm text-gray-600 flex items-start">
                  <div className="w-1.5 h-1.5 bg-red-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span className="leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Button always at bottom */}
          <div className="mt-auto">
            <div className="inline-flex items-center justify-center w-full bg-red-600 text-white px-4 py-3 rounded-lg hover:bg-red-700 transition-colors group-hover:bg-red-700 font-medium">
              Подробнее
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;