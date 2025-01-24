import { Col, Container, Row } from "react-bootstrap";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Home.css";
import ImageCarousel from "../ImageCarousel/ImageCarousel";
import NewProduct from "../New_Product/NewProduct";
import Footer from "../Footer/Footer";
import { utils } from "../Utils";
import { dummyData } from "../data";
const Home = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <ImageCarousel />
          </Col>
        </Row>
        <Row>
          <Col>
            <NewProduct
              category_name={"Latest Addition"}
              showButton={true}
              link={utils.routesName.newArrivals}
              data={dummyData.homeData}
            />

            <NewProduct
              category_name={"PS5"}
              showButton={true}
              link={utils.routesName.ps5Link}
              data={dummyData.homeData}
            />

            <NewProduct
              category_name={"Xbox"}
              showButton={true}
              link={utils.routesName.ps4Link}
              data={dummyData.homeData}
            />

            <NewProduct
              category_name={"Nintendo Switch"}
              showButton={true}
              link={utils.routesName.nintendoLink}
              data={dummyData.homeData}
            />
          </Col>
        </Row>

        {/* <hr className="mt-5 hrClass" /> */}
        <Row className="mb-5">
          <Col className="text-center">
            <Footer />
            <p className="mt-5">All Rights Reserved By Games Hub</p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
