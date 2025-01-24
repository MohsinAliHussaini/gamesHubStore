import { Offcanvas } from "react-bootstrap";

const AddToCartComp = (props) => {
  const { showAddToCart, close } = props;

  return (
    <>
      <Offcanvas show={showAddToCart} onHide={close} className="me-2">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Add To Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default AddToCartComp;
