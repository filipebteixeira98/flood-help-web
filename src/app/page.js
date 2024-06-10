'use client';

import { useState, useEffect } from 'react';

import { getOpenRequests } from '@/services/Web3Service';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Request } from '@/components/Request';

export default function Home() {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    loadRequests(0);
  }, []);

  async function loadRequests(lastId) {
    try {
      const result = await getOpenRequests(lastId);

      if (lastId === 0) setRequests(result);
      else {
        requests.push(...result);

        setRequests(requests);
      }
    } catch (error) {
      console.error(error);

      alert(error.message);
    }
  }

  return (
    <>
      <Header />
      <div className="container">
        <div className="row ps-5">
          <p className="lead m-4">
            Help children to make their dreams come true!
          </p>
        </div>
        <div className="p-4 mx-5">
          <div className="list-group">
            {requests && requests.length ? (
              requests.map((request) => (
                <Request key={request.id} data={request} />
              ))
            ) : (
              <>
                Connect to your Metamask wallet clicking on sign in button to
                help or to ask for help!
              </>
            )}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
