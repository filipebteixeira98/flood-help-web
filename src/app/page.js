import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <div className="container">
        <div className="row ps-5">
          <p className="lead m-4">
            Help children to make their dreams come true!
          </p>
        </div>
        <div className="p-4 mx-5"></div>
        <Footer />
      </div>
    </>
  );
}
