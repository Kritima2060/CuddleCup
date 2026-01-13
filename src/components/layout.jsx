import { Outlet } from 'react-router-dom';
import Header from './header';
import Footer from './footer';

const Layout = () => {
  return (
    
    <div className="min-h-screen bg-[#F9F7F2] flex flex-col">
      <Header />
      
     
      
      <main className="flex-grow">
        <Outlet /> 
      </main>

      <Footer />
    </div>
  );
};

export default Layout;