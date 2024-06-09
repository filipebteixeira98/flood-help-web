import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <div className="container">
        <div className="ps-5">
          <div className="row my-3">
            <p className="lead">
              Fill in all the fields below to tell us what you need
            </p>
          </div>
          <div className="col-6">
            <div className="form-floating mb-3">
              <input
                type="text"
                id="title"
                className="form-control"
                maxLength={150}
              />
              <label htmlFor="title">Summary of what you need:</label>
            </div>
          </div>
          <div className="col-6">
            <div className="form-floating mb-3">
              <textarea
                name="description"
                className="form-control"
                style={{ height: 100 }}
              ></textarea>
              <label htmlFor="description">
                Describe in detail what you need and where you are (for
                in-person deliveries):
              </label>
            </div>
          </div>
          <div className="col-6">
            <div className="form-floating mb-3">
              <input
                type="text"
                id="contact"
                className="form-control"
                maxLength={150}
              />
              <label htmlFor="contact">Contact (phone or email):</label>
            </div>
          </div>
          <div className="col-6">
            <div className="form-floating mb-3">
              <input type="number" id="goal" className="form-control" />
              <label htmlFor="goal">
                Goal in ETH/BNB (leave blank if you do not wish to receive a
                donation in crypto):
              </label>
            </div>
          </div>
          <div className="row">
            <div className="col-1 mb-3">
              <a href="/" className="btn btn-outline-dark col-12 p-3">
                Return
              </a>
            </div>
            <div className="col-5 mb-3 p-0">
              <button type="button" className="btn btn-dark col-12 p-3">
                Send request
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
