/* eslint-disable @next/next/no-html-link-for-pages */
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={`${styles.container}`}>
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-0 border-top">
        <p className="col-md-4 mb-0 text-muted">© 2022 Ankos shop</p>

        <a
          href="/"
          className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
        >
          <svg className="bi me-2" width="40" height="32">
            <use xlinkHref="#bootstrap"></use>
          </svg>
        </a>

        <ul className="nav col-md-4 justify-content-end">
          <li className="nav-item">
            <a href="https://www.ankos.shop/" className="nav-link px-2 text-muted">
              მაღაზია
            </a>
          </li>
          <li className="nav-item">
            <a href="https://ankosfarm.com/" className="nav-link px-2 text-muted">
              ფერმა
            </a>
          </li>
          <li className="nav-item">
            <a href="/contact" className="nav-link px-2 text-muted">
              კონტაქტი
            </a>
          </li>
          <li className="nav-item">
            <a href="https://www.facebook.com/Ankosfarm" className="nav-link px-2 text-muted">
              FB
            </a>
          </li>
          <li className="nav-item">
            <a href="/about" className="nav-link px-2 text-muted">
              შესახებ
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
