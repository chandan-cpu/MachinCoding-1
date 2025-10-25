const Interest = ({ data, setData, error }) => {
  const { hobbies } = data;

  const handelChange = (e) => {
    setData((prev) => ({
      ...prev,
      hobbies: e.target.checked
        ? [...prev.hobbies, e.target.name]
        : prev.hobbies.filter((i) => i !== e.target.name),
    }));
  };
  console.log(hobbies);
  return (
    <div>
      <div>
        <label>Coding</label>
        <input
          type="checkbox"
          name="Coding"
          id=""
          checked={hobbies.includes("Coding")}
          onChange={handelChange}
        />
      </div>
      <div>
        <label>Singing</label>
        <input
          type="checkbox"
          name="Singing"
          id=""
          checked={hobbies.includes("Singing")}
          onChange={handelChange}
        />
      </div>
      <div>
        <label>Playing</label>
        <input
          type="checkbox"
          name="Playing"
          id=""
          checked={hobbies.includes("Playing")}
          onChange={handelChange}
        />
      </div>
      <span>{error.hobbies}</span>
    </div>
  );
};

export default Interest;
