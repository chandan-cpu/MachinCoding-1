const Profil = ({ data, setData, error }) => {
  const { name, age, email } = data;
  console.log("error is", error);
  const handelChange = (e) => {
    setData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  //   console.log(data);
  return (
    <div>
      <div>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => handelChange(e)}
        ></input>
        <span>{error.name}</span>
      </div>
      <div>
        <label>Age</label>
        <input
          type="number"
          name="Age"
          value={age}
          onChange={handelChange}
        ></input>
      </div>
      <div>
        <label>Email</label>
        <input
          type="text"
          name="email"
          value={email}
          onChange={(e) => handelChange(e)}
        ></input>
      </div>
    </div>
  );
};

export default Profil;
