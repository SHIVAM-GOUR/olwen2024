import Offers from '@/components/Offers';
import Navbar from '../components/Navbar';
import Intro from '@/components/Intro';
import NewProducts from '@/components/NewProducts';
import PopularProducts from '@/components/PopularProducts';
import TopProducts from '@/components/TopProducts';
import MedicalProducts from '@/components/MedicalProducts';
import UpcomingProducts from '@/components/UpcomingProducts';
import HotOffer from '@/components/HotOffer';
import Footer from '@/components/Footer';


export default function HomePage() {
  return (
    <div>
      <Navbar />
      <Intro />
      <Offers />
      <NewProducts />
      <PopularProducts />
      <TopProducts />
      <MedicalProducts />
      <UpcomingProducts />
      <HotOffer />
      <Footer />
    
    </div>
  );
}
