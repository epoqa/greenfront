const Footer = () => {
  return (
    <footer className="text-center text-lg-start bg-light text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between border-bottom">
      </section>
      <section>
        <div className="container text-center text-md-start mt-3">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-2">
              <h6 className="text-uppercase fw-bold mb-4">
                <i className="fas fa-gem me-3" />
                Ankos Shop
              </h6>
              <p>
              რამე რამერამერამერამერამე რამერამერამე რამე რამერამე რამერამე რამე
                
              </p>
            </div>
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-2">
              <h6 className="text-uppercase fw-bold mb-2">რამე</h6>
              <p>
                <a href="#!" className="text-reset">
                რამე
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                რამე
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                რამე
                </a>
              </p>
              <p>
              </p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-2">
              <h6 className="text-uppercase fw-bold mb-2">რამე</h6>

              <p>
                <a href="#!" className="text-reset">
                რამე
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                რამე
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                რამე
                </a>
              </p>
              <p>
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-2">კონტაქტი</h6>
              <p>
                <i className="fas fa-home me-3" /> თბილისი
              </p>
              <p>
                <i className="fas fa-envelope me-3" />
                info@example.com
              </p>
              <p>
                <i className="fas fa-phone me-3" /> + 01 234 567 88
              </p>

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
