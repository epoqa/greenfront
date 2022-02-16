import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={`${styles.container} text-center text-lg-start bg-light text-muted`}>
      <section className="d-flex justify-content-center justify-content-lg-between border-bottom">
      </section>
      <section>
        <div className="container text-center text-md-start mt-3">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-2">
              <p className="text-uppercase fw-bold mb-2">
                <i className="fas fa-gem me-3" />
                Ankos Shop
              </p>
              <small>
              რამე რამერამერამერამერამე რამერამერამე რამე რამერამე რამერამე რამე
                
              </small>
            </div>


            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-2">
              <p className="text-uppercase fw-bold mb-2">რამე</p>
              <small>
                <a href="#!" className="text-reset">
                რამე
                </a>
              </small>
              <br/>
              <small>
                <a href="#!" className="text-reset">
                რამე
                </a>
              </small>
              <p>
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <p className="text-uppercase fw-bold mb-2">კონტაქტი</p>
              <small>
                <i className="fas fa-home me-3" /> თბილისი
              </small>
              <br/>
              <small>
                <i className="fas fa-envelope me-3" />
                info@example.com
              </small>
              <br/>
              <small>
                <i className="fas fa-phone me-3" /> + 01 234 567 88
              </small>

            </div>
          </div>
        </div>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2022 Copyright:  {" " }
        <a className="text-reset fw-bold" href="https://github.com/epoqa">
          Epoqa
        </a>
      </div>
    </footer>
  );
};

export default Footer;
