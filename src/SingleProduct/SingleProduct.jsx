import { Button, Col, Container, Row } from "react-bootstrap";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { dummyData } from "../data";
import { useState } from "react";
import "./SingleProduct.css";

const SingleProduct = () => {
  const [quantity, setQuantity] = useState(0);

  const changingQuantity = (action) => {
    if (action === "-") {
      if (quantity > 0) {
        setQuantity(quantity - 1);
      }
    } else {
      setQuantity(quantity + 1);
    }
  };

  return (
    <>
      <Container fluid>
        <Header />
        <Row>
          <Col lg={4}>
            <img
              src={dummyData.singleProductData.productImg}
              style={{ objectFit: "cover", width: "100%" }}
            />
          </Col>
          <Col lg={6}>
            <Row>
              <Col>
                <h3
                  className="mt-4"
                  style={{ color: "black", fontWeight: "800" }}
                >
                  {dummyData.singleProductData.title}
                </h3>
              </Col>
            </Row>
            <Row>
              <Col>
                <h3 className="font-bold" style={{ fontWeight: "600" }}>
                  Rs. {dummyData.singleProductData.price}
                </h3>
              </Col>
            </Row>
            <Row>
              <Col className="d-flex align-items-baseline">
                <Button
                  className="quantityBtn mt-2"
                  onClick={() => changingQuantity("-")}
                >
                  -
                </Button>
                <p className="ml-3 font-weight-bold">{quantity}</p>
                <Button
                  className="ml-3 quantityBtn"
                  onClick={() => changingQuantity("+")}
                >
                  +
                </Button>
                <Button className="ml-3 singleProductCart">Add to Cart</Button>
                <Button className="ml-3 buyNowBtn">Buy Now</Button>
              </Col>
            </Row>
            <Row>
              <Col>
                <h5
                  className="mt-2"
                  style={{ color: "green", fontWeight: "600" }}
                >
                  {dummyData.singleProductData.description}
                </h5>
              </Col>
            </Row>
            <Row className="">
              <Col>
                <Row className="mt-3">
                  <Col lg={12}>
                    <h6 className="font-weight-bold">
                      Pick up from the Game Hub Store{" "}
                      <span className="float-right">Free</span>
                    </h6>
                  </Col>
                </Row>
                <Row>
                  <Col lg={12}>
                    <h6 className="font-weight-bold">
                      Express within Karachi{" "}
                      <span className="float-right">1-2 Days</span>
                    </h6>
                  </Col>
                </Row>
                <Row>
                  <Col lg={12}>
                    <h6 className="font-weight-bold">
                      Courier Outside Karachi{" "}
                      <span className="float-right">2-3 Days</span>
                    </h6>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row className="mt-4">
              <Col>
                <Row className="mt-3">
                  <Col lg={12}>
                    <h6 className="font-weight-bold">
                      Warranty Coverage{" "}
                      <span className="float-right">
                        {" "}
                        Contact to our support
                      </span>
                    </h6>
                  </Col>
                </Row>
                <Row>
                  <Col lg={12}>
                    <h6 className="font-weight-bold">
                      Need help? Ask our Experts{" "}
                      <span className="float-right">
                        Contact to our support
                      </span>
                    </h6>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>

        <Footer />
      </Container>
    </>
  );
};

export default SingleProduct;
