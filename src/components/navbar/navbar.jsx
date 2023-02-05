import { Link } from 'react-router-dom'
import './navbar.css';

function Navbar() {
  return (
    <nav className="sticky-top navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Logo</Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Главная
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/orders">
                Мои заказы
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/report">
                Отчет
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/info">
                Добавить информацию
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
