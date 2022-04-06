import "./menu.css";
import React from 'react';
import Typist from 'react-typist';

export default function Menu() {

  const toppings = [
    { "Salsa": ["Hot", "Mild", "Verde"] },
    { "Lettuce": [] },
    { "Cheese": [] },
    { "Cilantro": [] },
    { "Onion": [] },
    { "Jalapeños": [] },
    { "Sour Cream": [] },
  ]

  const pricedToppings = [
    { item: "Extra rice", price: "+$1.25" },
    { item: "Extra beans", price: "+$1.25" },
    { item: "Guacamole", price: "+$1.49" },
    { item: "Queso", price: "+$1.50" },
    { item: "Avocado slices", price: "+$0.99" }
  ]

  const menu = [
    {
      category: "Build-Your-Own Burrito or Bowl",
      madeOf: [
        "Homemade flour tortillas",
        "Rice",
        "Black or refried beans",
        "choice of protein",
        "Toppings"],
      proteinOptions: [
        { option: "Grilled chicken", price: "$9.99" },
        { option: "Shredded chicken", price: "$9.99" },
        { option: "Grilled beef", price: "$11.49" },
        { option: "Shredded beef", price: "$9.99" },
        { option: "Ground beef", price: "$9.25" },
        { option: "Fajita mix", price: "$9.99" },
      ],
    },
    {
      category: "Tacos",
      madeOf: [
        "Homemade flour or soft corn tortillas",
        "Choice of protein",
        "Toppings"],
      proteinOptions: [
        { option: "Grilled chicken", price: "$9.99" },
        { option: "Shredded chicken", price: "$9.99" },
        { option: "Grilled beef", price: "$11.49" },
        { option: "Shredded beef", price: "$9.99" },
        { option: "Ground beef", price: "$9.25" },
        { option: "Fajita mix", price: "$9.99" },
      ],
    },
    {
      category: "Quesadillas",
      madeOf: [
        "Homemade flour tortillas",
        "Cheese",
        "Choice of protein",
        "Toppings"],
      proteinOptions: [
        { option: "Grilled chicken", price: "$9.99" },
        { option: "Shredded chicken", price: "$9.99" },
        { option: "Grilled beef", price: "$11.49" },
        { option: "Shredded beef", price: "$9.99" },
        { option: "Ground beef", price: "$9.25" },
        { option: "Fajita mix", price: "$9.99" },
        { option: "Ham and cheese", price: "$9.50" },
      ]
    },
    {
      category: "Tortas with French Fries",
      proteinOptions: [
        { option: "Grilled chicken", price: "$9.99" },
        { option: "Shredded chicken", price: "$9.99" },
        { option: "Grilled beef", price: "$11.49" },
        { option: "Shredded beef", price: "$9.99" },
      ]
    },
  ]

  function Toppings() {
    return (
      <div className="topping-col">
        {toppings.map((topping) => {
          const key = Object.keys(topping)[0];
          return <div key={key} className="topping">
            {key}
            {(topping[key].length > 0) &&
              <div className="topping-array">
                {topping[key].map((item) => {
                  return <div key={item}>{item}</div>;
                })}
              </div>}
          </div>
        })}
      </div>
    )
  }

  function PricedToppings() {
    return (
      <div className="topping-col">
        {pricedToppings.map((topping) => {
          return (
            <div key={topping.item} className="priced-topping">
              <div className="topping">
                {topping.item}
              </div>
              <div className="price">
                {topping.price}
              </div>
            </div>)
        })}
      </div>
    )
  }

  function AllDayMenu() {
    return (
      <div>
        {menu.map((menuItem, menuItemIndex) => {
          return (
            <div key={menuItemIndex} className="menu-item">
              <div className="menu-item-decor"/>
              <div className="menu-category">
                {menuItem.category}
              </div>
              <div className="menu-description">
                {menuItem.madeOf && menuItem.madeOf.map((madeOf, madeOfIndex) => {
                  return <div key={madeOfIndex}>{madeOf}</div>
                })}
              </div>
            </div>
          )
        })}
      </div>
    )
  }

  return (

    <div className="container">
      <div className="menu-container">

        <div className="toppings">
          <div className="topping-header">
            OUR FRESH TOPPINGS
          </div>

          <div className="topping-row">
            <Toppings />
            <PricedToppings />
          </div>
        </div>

        <div className="menu">
          <AllDayMenu />
        </div>

      </div>
    </div>
  )
}
