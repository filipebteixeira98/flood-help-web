'use client';

import { useState, useEffect } from 'react';

import { doLogin } from '@/services/Web3Service';

export function Header() {
  const [wallet, setWallet] = useState('');

  useEffect(() => {
    setWallet(localStorage.getItem('wallet') || '');
  }, []);

  function handleSignIn() {
    doLogin()
      .then((wallet) => setWallet(wallet))
      .catch((error) => {
        console.error(error);

        alert(error.message);
      });
  }

  return (
    <header className="p-3 text-bg-dark">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center">
          <a
            href="/"
            className="justify-content-start"
            style={{ textDecoration: 'none' }}
          >
            <h1 className="fw-bold text-light">FloodHelp</h1>
          </a>
          <div className="text-end col-9">
            {wallet ? (
              <a href="/create" className="btn btn-warning">
                Ask for help
              </a>
            ) : (
              <button
                type="button"
                className="btn btn-outline-light me-2"
                onClick={handleSignIn}
              >
                <img src="/metamask.svg" width="24" className="me-3" />
                Sign In
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
