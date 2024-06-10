'use client';

import { useState } from 'react';

import { openRequest } from '@/services/Web3Service';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function Home() {
  const [request, setRequest] = useState({
    title: '',
    description: '',
    contact: '',
    goal: 0,
  });

  function onInputChange(event) {
    setRequest((prevState) => ({
      ...prevState,
      [event.target.id]: event.target.value,
    }));
  }

  function handleSubmit() {
    alert('Starting saving process...');

    openRequest(request)
      .then((result) => {
        alert(
          'Order sent successfully. In a few minutes it will be available on the home page!'
        );

        window.location.href = '/';
      })
      .catch((error) => {
        console.error(error);

        alert(error.message);
      });
  }

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
                value={request.title}
                onChange={onInputChange}
              />
              <label htmlFor="title">Summary of what you need:</label>
            </div>
          </div>
          <div className="col-6">
            <div className="form-floating mb-3">
              <textarea
                id="description"
                className="form-control"
                style={{ height: 100 }}
                value={request.description}
                onChange={onInputChange}
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
                value={request.contact}
                onChange={onInputChange}
              />
              <label htmlFor="contact">Contact (phone or email):</label>
            </div>
          </div>
          <div className="col-6">
            <div className="form-floating mb-3">
              <input
                type="number"
                id="goal"
                className="form-control"
                value={request.goal}
                onChange={onInputChange}
              />
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
              <button
                type="button"
                className="btn btn-dark col-12 p-3"
                onClick={handleSubmit}
              >
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
