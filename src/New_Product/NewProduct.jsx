import { Col, Row } from "react-bootstrap";
import Cart from "../Cart/Cart";
import ps5 from "../PlayStation-5.jpg";
import psCarousel from "../ps5_carousel.jpg";
import xbox from "../xbox_carousel.jpg";
const NewProduct = (props) => {
  const { category_name, showButton = false, link, data } = props;
  return (
    <>
      <Row>
        <Col>
          <h2
            className="mt-5 ml-5 mb-3 d-inline-flex"
            style={{ fontWeight: "700", color: "black" }}
          >
            {category_name}
          </h2>
          {showButton ? (
            <div className="d-lg-flex-inline float-lg-right float-md-right text-center">
              <a href={link}>
                <button className="float-lg-right mt-5 moreProduct mb-4 ">
                  More Products
                </button>
              </a>
            </div>
          ) : (
            <></>
          )}
        </Col>
      </Row>
      <Row className="mb-4 row-cols-1">
        <Col
          className="d-lg-flex d-sm-block"
          style={{ gap: "50px", flexWrap: "wrap" }}
          lg={12}
        >
          {data && data.length > 0 ? (
            data.map((val) => (
              <Cart
                productImg={val.productImg}
                price={val.price}
                description={val.description}
                title={val.title}
              />
            ))
          ) : (
            <></>
          )}
        </Col>
      </Row>
    </>
  );
};

export default NewProduct;
