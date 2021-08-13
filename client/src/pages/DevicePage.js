import React from "react";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import BigStar from "../assets/BigStar.svg";

const DevicePage = () => {
  const device = {
    id: 1,
    name: "Samsung",
    price: 25000,
    rating: 5,
    img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-purple-select-2021?wid=470&hei=556&fmt=jpeg&qlt=95&.v=1617130317000",
  };
  const description = [
      {id:1, title: 'Оперативная память', description: '5 гб'},
      {id:2, title: 'Камера', description: '12 мп'},
      {id:3, title: 'Процессор', description: 'Пентиум 3'},
      {id:4, title: 'Кол-во ядер', description: '2'},
      {id:5, title: 'Аккумулятор', description: '4000 мАч'},
  ]
  return (
    <Container className="mt-2">
      <Row>
        <Col md={4}>
          <Image width={300} height={300} src={device.img} />
        </Col>
        <Col md={4}>
          <Row className="d-flex flex-column align-items-center">
            <h2>{device.name}</h2>
            <div
              className="d-flex align-items-center justify-content-center"
              style={{
                background: `url(${BigStar}) no-repeat center center`,
                width: 240,
                height: 240,
                backgroundSize: "cover",
                fontSize: 64,
              }}
            >
              {device.rating}
            </div>
          </Row>
        </Col>
        <Col md={4}>
            <Card
                className="d-flex flex-column align-items-center justify-content-around"
                style={{width:300, height:300, fontSize: 32, border: '5px solid lightgray'}}
            >
                <h3>{device.price}</h3>
                <Button variant={'outline-dark'}>Добавить в корзину</Button>
            </Card>
        </Col>
      </Row>
      <Row className="d-flex flex-column m-3">
          <h1>Характеристики</h1>
          {description.map((info, index)=>
                <Row key={info.id} style={{background: index % 2 === 0?'lightgray':'transpare', padding: 10}}>
                    {info.title}: {info.description}
                </Row>
            )}
      </Row>
    </Container>
  );
};

export default DevicePage;
