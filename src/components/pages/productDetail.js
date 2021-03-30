import React, { Fragment } from "react";
import Header from "../Navigation/header";
import Footer from "../Navigation/footer";

const productDetail = () => {
  return (
    <Fragment>
      <Header />
      <div className="container">
        <section className="my-5">
          <div className="row">
            <div className="col-md-5 mb-4 mb-md-0">
              <div className="view zoom z-depth-2 rounded">
                <img
                  className="img-fluid w-100"
                  style={{
                    maxWidth: "70%",
                    position: "relative",
                    left: "4rem",
                  }}
                  src="https://mdbootstrap.com/img/Photos/Horizontal/Interior/img(10).jpg"
                  alt="Sample"
                />
              </div>

              <div
                style={{
                  display: "flex",
                  padding: "2rem",
                }}
              >
                <img
                  style={{
                    maxWidth: "8rem",
                    maxHeight: "8rem",
                    display: "flex",
                    margin: "0 1rem",
                  }}
                  src="https://mdbootstrap.com/img/Photos/Horizontal/Interior/img(10).jpg"
                  alt="Sample"
                />
                <img
                  style={{
                    maxWidth: "8rem",
                    maxHeight: "8rem",
                    display: "flex",
                    margin: "0 1rem",
                  }}
                  src="https://mdbootstrap.com/img/Photos/Horizontal/Interior/img(10).jpg"
                  alt="Sample"
                />
                <img
                  style={{
                    maxWidth: "8rem",
                    maxHeight: "8rem",
                    display: "flex",
                    margin: "0 1rem",
                  }}
                  src="https://mdbootstrap.com/img/Photos/Horizontal/Interior/img(10).jpg"
                  alt="Sample"
                />
              </div>
            </div>

            <div
              className="col-lg-6"
              style={{
                margin: "3rem",
              }}
            >
              <h5>Set of 3 seagrass baskets</h5>
              <p className="mb-2 text-muted text-uppercase small">Storage</p>

              <p>
                <span className="mr-1">
                  <strong>$79.99</strong>
                </span>
              </p>
              <p className="pt-1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Numquam, sapiente illo. Sit error voluptas repellat rerum
                quidem, soluta enim perferendis voluptates laboriosam.
              </p>
              <div className="table-responsive">
                <table className="table table-sm table-borderless mb-0">
                  <tbody>
                    <tr>
                      <th className="pl-0 w-25" scope="row">
                        <strong>Size</strong>
                      </th>
                      <td>Different sizes</td>
                    </tr>
                    <tr>
                      <th className="pl-0 w-25" scope="row">
                        <strong>Material</strong>
                      </th>
                      <td>Seagrass</td>
                    </tr>
                    <tr>
                      <th className="pl-0 w-25" scope="row">
                        <strong>Color</strong>
                      </th>
                      <td>Sand</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <hr></hr>

              <button
                className="button"
                class="btn btn-primary btn-md mr-1 mb-2 waves-effect waves-light"
              >
                Buy now
              </button>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </Fragment>
  );
};

export default productDetail;
