import { useState } from "react";
import Interest from "./Interest";
import Profile from "./Profil";
import Settings from "./Settings";
import { Activity } from "react";

const Tab = () => {
  const [active, setActive] = useState(0);
  const [data, setData] = useState({
    name: "Chandan",
    age: "26",
    email: "chandan123gmail.com",
    hobbies: ["Coding", "Playing", "Singing"],
    themes: "dark",
  });
  const [error, setError] = useState({});
  const tab = [
    {
      name: "Profie",
      component: Profile,
      validate: () => {
        const err = {};
        if (!data.name || data.length < 2) {
          err.name = "Name is not valid";
        }
        setError(err);
        return err.name ? false : true;
      },
    },
    {
      name: "Interest",
      component: Interest,
      validate: () => {
        const err = {};
        if (data.hobbies.length === 0) {
          err.hobbies = "click any hobby";
        }
        setError(err);
        return err.hobbies ? false : true;
      },
    },
    {
      name: "Settings",
      component: Settings,
      validate: () => {
        return true;
      },
    },
  ];

  const ActiveTab = tab[active].component;

  const handelPrev = () => {
    if (tab[active].validate()) setActive((prev) => prev - 1);
  };
  const handelNext = () => {
    if (tab[active].validate()) setActive((prev) => prev + 1);
  };
  const handelSubmit = () => {
    //api calll
    console.log(data);
  };
  console.log(ActiveTab);
  return (
    <div>
      <div className="list">
        {tab.map((item, i) => (
          <div
            key={i}
            className="container"
            onClick={() => {
              setActive(i);
            }}
          >
            {item.name}
          </div>
        ))}
      </div>
      <div className="component">
        <div>
          <ActiveTab data={data} setData={setData} error={error} />
        </div>
      </div>
      {active > 0 && <button onClick={handelPrev}>prev</button>}
      {active < tab.length - 1 && <button onClick={handelNext}>next</button>}
      {active === tab.length - 1 && (
        <button onClick={handelSubmit}>Submit</button>
      )}
    </div>
  );
};

export default Tab;
