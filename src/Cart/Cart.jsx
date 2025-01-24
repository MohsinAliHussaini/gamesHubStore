import { Col, Row } from "react-bootstrap";
import "./Cart.css";
import { utils } from "../Utils";
const Cart = (props) => {
  const { productImg, price, description, title } = props;
  return (
    <>
      <Row>
        <Col xs={12} sm={6} md={4} lg={3} className="mb-4">
          <div className="cart-root">
            <img src={productImg} alt="Product Image" />
            <div class="product-info">
              <a className="link" href={utils.routesName.singleProduct}>
                <h2 className="productHeading">{title}</h2>
              </a>
              <p className="mt-3">{description}</p>
              <p className="price">
                Rs.{" "}
                {new Intl.NumberFormat("en-EN", {
                  maximumSignificantDigits: 3,
                }).format(price)}{" "}
              </p>
              <button class="add-to-cart mt-4">Add to Cart</button>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Cart;
