import React from "react";
import MultiplePizzas from "../assets/multiplePizzas.jpeg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
          


Welcome to Habibipizza, your one-stop shop for delicious,
          authentic Italian pizza. We are a family-owned and operated business that has been serving the community for over 20 years. We are passionate about our food and our customers, and we are committed to providing the best possible dining experience.

         We use only the freshest ingredients and traditional Italian recipes to create our pizzas. Our dough is made fresh daily, and our sauce is made with imported Italian tomatoes. We also offer a wide variety of toppings to choose from, so you can create the perfect pizza for your taste.

       In addition to our pizzas, we also offer a variety of other Italian dishes, such as pasta, salads, and appetizers. We also have a full bar, so you can enjoy a cold beer or glass of wine with your meal.

       Whether you are looking for a casual meal with friends or a special occasion dinner, Habibipizza is the perfect place to go. We invite you to come in and experience the taste of Italy for yourself.
        </p>
      </div>
    </div>
  );
}

export default About;