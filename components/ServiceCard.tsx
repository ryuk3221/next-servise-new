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
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="p-6" style={{display: "flex", flexDirection: "column", height: "100%"}}>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4" style={{marginBottom: "auto"}}>{description}</p>
        
        <div className="mb-4">
          <span className="text-2xl font-bold text-red-600">{price}</span>
          <span className="text-gray-500 text-sm ml-1">до</span>
        </div>

        <ul className="space-y-1 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="text-sm text-gray-600 flex items-center">
              <div className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2"></div>
              {feature}
            </li>
          ))}
        </ul>

        <Link 
          href={href}
          className="inline-flex items-center justify-center w-full bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors group"
        >
          Подробнее
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;