import { Container, Row } from "reactstrap";
import Header from "../components/Header";
import { BreadCrumbs } from "../components/BreadCrumbs";
import { Link } from "react-router-dom";
import { ROUTES } from "../modules/MyRoutes";
import "./HomePage.css"

const HomePage = () => {
  return (
    <>
      <Header />

      {/* Хлебные крошки */}
      <BreadCrumbs
        crumbs={[
          { label: "Главная" }, // Текущая страница
        ]}
      />

      <Container>
        <Row>
          <h1 className="mb-3">Добро пожаловать на Маркетплейс!</h1>
          <p className="fs-5">Тут вы можете найти всё, что необходимо для вашего дома и повседневной жизни — от современной техники до стильной мебели и уникальных аксессуаров. Наш маркетплейс предлагает товары от лучших производителей, а также выгодные предложения и акции, чтобы каждая покупка приносила радость. Легкий поиск, подробные описания и удобные категории — всё для вашего удобства!</p>
        </Row>
      </Container>
    </>
  );
};

export default HomePage;
