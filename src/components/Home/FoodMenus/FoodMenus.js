import React, { useState } from "react";
import menulist from "./MenuList";
import Foods from "./Foods";

// menu list
const FoodMenus = () => {
  const [menus, setMenus] = useState(menulist);

  const filter = (cateItem) => {
    const updatedItem = menulist.filter((element) => {
      return element.category === cateItem;
    });
    setMenus(updatedItem);
  };
  return (
    <div id="foods">
      <div className="d-flex justify-content-center mt-5 mb-4">
        <button
          onClick={() => setMenus(menulist)}
          className="border-0 button-background mx-2 px-4 py-2 rounded"
        >
          All Menus
        </button>
        <button
          onClick={() => filter("breakfast")}
          className="border-0 button-background mx-2 px-4 py-2 rounded"
        >
          BreakFast
        </button>

        <button
          onClick={() => filter("lunch")}
          className="border-0 button-background mx-2 px-4 py-2 rounded"
        >
          Lunch
        </button>
        <button
          onClick={() => filter("dinner")}
          className="border-0 button-background mx-2 px-4 py-2 rounded"
        >
          Dinner
        </button>
      </div>

      <div className=" row container mx-auto">
        {menus.map((menus) => (
          <Foods menus={menus} key={menus.id}></Foods>
        ))}
      </div>
    </div>
  );
};

export default FoodMenus;
