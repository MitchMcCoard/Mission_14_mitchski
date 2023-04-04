import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3">
        <div className="container h-100">
          <img
            src="./JoelHiltonHeadshot.jpg"
            alt="Our company logo"
            className="img-responsive img-fluid img-thumbnail"
            style={{ maxHeight: '50px' }}
          />
          {/* <button className='navbar-toggler' type='button'></button> */}
          <div className="navbar-collapse collapse d-sm-inline-flex flex-sm-row-reverse">
            <ul className="navbar-nav flex-grow-1">
              <li className="nav-item">
                <Link to="/" className="nav-link text-dark">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Movies" className="nav-link text-dark">
                  Movie Catalog
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Podcasts" className="nav-link text-dark">
                  Podcast
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
