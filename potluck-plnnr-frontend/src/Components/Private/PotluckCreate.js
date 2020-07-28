import React from "react";
import Auth from "../../Utilities/AxiosWithAuth";

let initialData = {
    name: name,
    date: date,
    time: time,
    items: [],
}

let CreatePotluck = (props) => {

    let [state, newState] = useState(data)

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      name: name,
      date: date,
      time: time,
      items: [],
    };

    Auth()
      .post("/potluck", data)
      .then((res) => {
        console.log(res);
        updateColors(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>{/* Form Here */}</form>
    </div>
  );
};

export default CreatePotluck;
