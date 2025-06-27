import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import Breadcrumbs from './Breadcrumbs';

interface ServicePageLayoutProps {
  children: ReactNode;
  title: string;
  breadcrumbs: Array<{ label: string; href?: string }>;
}

const ServicePageLayout = ({ children, title, breadcrumbs }: ServicePageLayoutProps) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Breadcrumbs items={breadcrumbs} />
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{title}</h1>
        </div>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default ServicePageLayout;