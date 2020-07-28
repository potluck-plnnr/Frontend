import React from "react";

const Potluck = () => {
  return (
    <div>
      Attendee Form
      <form>
        <label htmlFor="name">Name</label>
        <input type="text" value="name" />
        <label htmlFor="date">Date</label>
        <input type="date" value="date" />
        <label htmlFor="time">Time</label>
        <input type="time" value="time" />
        <label htmlFor="items">Dish Provided</label>
        <select name="items">
          <option value="appetizer">Appetizer</option>
          <option value="entree">Entree</option>
          <option value="side">Sides</option>
          <option value="dessert">Dessert</option>
        </select>
        <label htmlFor="comments">Comments/Remarks</label>
        <textarea type="type" value="text" />
        <button>Enter</button>
      </form>
    </div>
  );
};

export default Potluck;
