import React, { useRef, useState } from 'react';
import './styles.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import arrowRight from '../../assets/arrow-right.svg';
import arrowLeft from '../../assets/arrow-left.svg';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { foods } from '../../data/dataFood';

const News = () => {
  const [currentFoods, setCurrentFoods] = useState(foods);
  const [currentOption, setCurrentOption] = useState('All');

  const [detailsFood, setDetailsFood] = useState(foods[0]);

  const handleFilter = (footType) => {
    const foodsFilter = foods.filter((food) => food.type === footType);
    setCurrentOption(footType);
    setCurrentFoods(foodsFilter);
  };

  const ref = useRef(null);
  const scrollToElement = () => ref.current.scrollIntoView();

  const handleDetailsFood = (foodId) => {
    const foodSelected = foods.find((food) => food.id === foodId);
    setDetailsFood(foodSelected);
    scrollToElement();
  };

  const nextFood = (foodId) => {
    const foodSelected = foods.find(
      (food) => food.id === (foodId < foods.length ? foodId + 1 : foods.length),
    );
    setDetailsFood(foodSelected);
  };

  const previousFood = (foodId) => {
    const foodSelected = foods.find(
      (food) => food.id === (foodId > 1 ? foodId - 1 : 1),
    );
    setDetailsFood(foodSelected);
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="news-wrapper">
      <Container>
        <div style={{ marginTop: '64px' }}>
          <h1 className="news-title">Choose your ration</h1>
          <p className="news-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
            tempore placeat voluptate unde quam amet, iusto aut dolor.
          </p>
        </div>

        <div className="menu-food-option">
          <Row className="row-cols-2 row-cols-md-3 row-cols-lg-5">
            <Col
              className={
                currentOption === 'All'
                  ? 'food-option food-option-active'
                  : 'food-option'
              }
              onClick={() => {
                setCurrentFoods(foods);
                setCurrentOption('All');
              }}
            >
              All
            </Col>
            <Col
              className={
                currentOption === 'Vegetarian'
                  ? 'food-option food-option-active'
                  : 'food-option'
              }
              onClick={() => handleFilter('Vegetarian')}
            >
              Vegetarian
            </Col>
            <Col
              className={
                currentOption === 'Gluten Free'
                  ? 'food-option food-option-active'
                  : 'food-option'
              }
              onClick={() => handleFilter('Gluten Free')}
            >
              Gluten Free
            </Col>
            <Col
              className={
                currentOption === 'Sugar Free'
                  ? 'food-option food-option-active'
                  : 'food-option'
              }
              onClick={() => handleFilter('Sugar Free')}
            >
              Sugar Free
            </Col>
            <Col
              className={
                currentOption === 'Drinks'
                  ? 'food-option food-option-active'
                  : 'food-option'
              }
              onClick={() => handleFilter('Drinks')}
            >
              Drinks
            </Col>
          </Row>
        </div>
      </Container>

      <Slider {...settings} className="mt-5">
        {currentFoods.map((food) => {
          return (
            <div key={food.id}>
              <Card className="food-card">
                <Card.Img
                  variant="top"
                  src={food.img}
                  alt={food.title}
                  className="img-food-card"
                />
                <Card.Body>
                  <Card.Title
                    className="food-title"
                    onClick={() => handleDetailsFood(food.id)}
                  >
                    {food.title}
                  </Card.Title>
                  <Card.Text>{food.description}</Card.Text>
                </Card.Body>
                <div className="divider"></div>
                <Card.Body className="d-flex justify-content-between">
                  <span>{food.price} RON</span>
                  <span
                    className="oder-now"
                    onClick={() => handleDetailsFood(food.id)}
                  >
                    Order now
                  </span>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </Slider>

      <Container>
        <div ref={ref} className="mt-5">
          <h1 className="news-title">Top to day dishes</h1>
          <p className="news-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
            tempore placeat voluptate unde quam amet, iusto aut dolor.
          </p>
        </div>

        <div style={{ marginTop: '70px' }}>
          <Row>
            <Col xs={12} md={6}>
              <div className="mb-5 me-4">
                <img
                  src={detailsFood.img}
                  alt="food1"
                  className="details-img"
                />
              </div>
            </Col>
            <Col xs={12} md={6}>
              <h1 className="details-title">{detailsFood.title}</h1>
              <p style={{ color: 'rgb(184, 11, 106)' }}>500 g</p>
              <Row className="mt-4">
                <Col md={5}>
                  <span className="fw-bold">Ingredients</span>
                  <br />
                  - Dolor sit amet
                  <br />- consetetur sadipscing
                </Col>
                <Col md={5}>
                  <span className="fw-bold">Benefits</span>
                  <br />- {detailsFood.type}
                  <br />- Consetetur sadipscing
                </Col>
              </Row>

              <Row>
                <Col>
                  <h1 className="details-price">{detailsFood.price} RON</h1>
                </Col>
                <Col className="arrow-left">
                  <img
                    src={arrowLeft}
                    alt="arrowLeft"
                    className="icon-arrow-left"
                    onClick={() => previousFood(detailsFood.id)}
                  />
                </Col>
              </Row>

              <Row className="d-flex justify-content-between">
                <Col>
                  <Button size="lg" className="details-btn">
                    Order
                  </Button>
                </Col>
                <Col className="arrow-right">
                  <img
                    src={arrowRight}
                    alt="arrowRight"
                    className="icon-arrow-right"
                    onClick={() => nextFood(detailsFood.id)}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default News;
