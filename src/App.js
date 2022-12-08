import React from "react";
import "./App.css";
export default function App() {
  const array = [
    {
      id: 1,
      name: "Fresh and",
      name2: 'Healthy Salad',
      price: "60 calories",
      Time: "Time",
      Portion: "Portion",
    }
  ];
  const arr2 = [
    {
      id: 2,
      name: "Delicious Spicy",
      name2:"Beef Noodles",
      price: "150 calories",
      Time: "5 mins",
      Portion: "3persons",
    }
  ];
  const arr3 = [
    {
      id: 3,
      name: "Red Hot BBQ",
      name2:"Chicken Wings",
      price: "120 calories",
      Time: "5 mins",
      Portion: "3persons",
    }
  ];
  const arr4 = [
    {
      id: 4,
      name: "Healthy Fruit",
      name2:"Smoothis",
      price: "110 calories",
      Time: "5 mins",
      Portion: "3persons"
    },
  ];
  const arr5 = [
    {
      id: 5,
      name: "Red Hot BBQ",
      name2:"Chicken Wings",
      price: "120 calories",
      Time: "5 mins",
      Portion: "3persons",
    },
  ];
  return (
    <div>
      <div className="heder">
        <h2 className="logo">c</h2>
        <p className="logo_name">COOKING</p>
      </div>
      <div className="content">
        <h1>Simples and</h1>
        <h1 className="text2">Tasty Recipes</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          <br />
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          <br />
          since the 1500s, when an unknown printer took a galley of type and
          <br />
          scrambled it to make a type specimen book.
          <br />
        </p>
      </div>
      <div className="image_text">
        <img src="./p1.jpg" className="image" alt="name" />
        <p>
          <b>By chanthaboun Wang</b>
        </p>
      </div>
      <div className="box">
        {array.map((row) => (
          <div className="box_list" key={row.id}>
            <img src="./salad.png" alt="value" className="box_image" />
            <br />
            <br />
            {row.name}
            <br />
            {row.name2}
            <br />
            {row.price}
            <br />
            <br />
            <hr />
            <div className="footer_conten">
              <p>Time</p>
              <p>Portion</p>
            </div>
            <div className="footer_text">
              <h6>5 mins</h6>
              <h6>3 persons</h6>
            </div>
          </div>
        ))}
        {arr2.map((row2) => (
          <div className="box_list2" key={row2.id}>
            <img src="./noodle.jpg" className="box_image2" alt="image2" />
            <br />
            <br />
            {row2.name}
            <br />
            {row2.name2}
            <br />
            {row2.price}
            <br />
            <br />
            <hr />
            <div className="footer_conten">
              <p>Time</p>
              <p>Portion</p>
            </div>
            <div className="footer_text">
              <h6>18 mins</h6>
              <h6>2 persons</h6>
            </div>
          </div>
        ))}
        {arr3.map((row3) => (
          <div className="box_list3" key={row3.id}>
            <img src="./Chicken.jpg" className="box_image2" alt="image3" />
            <br />
            <br />
            {row3.name}
            <br />
            {row3.name2}
            <br />
            {row3.price}
            <br />
            <br />
            <hr />
            <div className="footer_conten">
              <p>Time</p>
              <p>Portion</p>
            </div>
            <div className="footer_text">
              <h6>45 mins</h6>
              <h6>3 persons</h6>
            </div>
          </div>
        ))}
        {arr4.map((row4) => (
          <div className="box_list4" key={row4.id}>
            <img src="./Fruit.jpg" className="box_image2" alt="image3" />
            <br />
            <br />
            {row4.name}
            <br />
            {row4.name2}
            <br />
            {row4.price}
            <br />
            <br />
            <hr />
            <div className="footer_conten">
              <p>Time</p>
              <p>Portion</p>
            </div>
            <div className="footer_text">
              <h6>12 mins</h6>
              <h6>2 persons</h6>
            </div>
          </div>
        ))}
        {arr5.map((row5) => (
          <div className="box_list5" key={row5.id}>
            <img src="./Chicken.jpg" className="box_image2" alt="image3" />
            <br />
            <br />
            {row5.name}
            <br />
            {row5.name2}
            <br />
            {row5.price}
            <br />
            <br />
            <hr />
            <div className="footer_conten">
              <p>Time</p>
              <p>Portion</p>
            </div>
            <div className="footer_text">
              <h6>30 mins</h6>
              <h6>3 persons</h6>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
