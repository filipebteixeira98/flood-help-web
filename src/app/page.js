export default function Home() {
  return (
    <>
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
              <button type="button" className="btn btn-outline-light me-2">
                <img src="/metamask.svg" width="24" className="me-3" />
                Sign In
              </button>
              <a href="/create" className="btn btn-warning">
                Ask for help
              </a>
            </div>
          </div>
        </div>
      </header>
      <div className="container">
        <div className="row ps-5">
          <p className="lead m-4">
            Help children to make their dreams come true!
          </p>
        </div>
        <div className="p-4 mx-5"></div>
        <footer className="d-flex flex-wrap justify-content-between align-items-center border-top p-3 m-5">
          <p className="col-4 mb-0 text-body-secondary">
            &copy; 2024 FloodHelp, Inc.
          </p>
          <ul className="nav col-4 justify-content-end">
            <li className="nav-item">
              <a href="/" className="nav-link px-2 text-body-secondary">
                Lend a hand
              </a>
            </li>
            <li className="nav-item">
              <a href="/create" className="nav-link px-4 text-body-secondary">
                Ask for help
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </>
  );
}
