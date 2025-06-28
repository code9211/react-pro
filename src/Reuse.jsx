import Userinf from "./UserComponent";

function Reuse() {
  const dummyvalue = [
    {
      id: 1,
      firstname: "sumit",
      lastname: "ruhela",
      email: "sumit@gmail.com",
    },
    {
      id: 2,
      firstname: "sumit",
      lastname: "ruhela",
      email: "sumit@gmail.com",
    },
  ];

  return (
    <div>
      <h1>Reuse component </h1>

      {dummyvalue.map((data) => (
        <div key={data.id}>
          <Userinf user={data}></Userinf>
        </div>
      ))}
    </div>
  );
}

export default Reuse;
