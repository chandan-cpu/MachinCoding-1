const Settings = ({ data, setData }) => {
  const { themes } = data;
  const handelChange = (e) => {
    setData((prev) => ({
      ...prev,
      themes: e.target.name,
    }));
  };
  console.log(themes);

  return (
    <div>
      <div>
        <label>dark</label>
        <input
          type="radio"
          name="dark"
          id=""
          checked={themes === "dark"}
          onChange={handelChange}
        />
      </div>
      <div>
        <label>light</label>
        <input
          type="radio"
          name="light"
          id=""
          checked={themes === "light"}
          onChange={handelChange}
        />
      </div>
    </div>
  );
};

export default Settings;
