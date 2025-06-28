function Userinf({ user }) {
  return (
    <div
      style={{
        border: "1px solid",
        padding: "10px",
        width: "400px",
        margin: "40px",
        borderRadius: "10px",
      }}
    >
      <h4>
        Name: <span style={{ color: "green" }}>{user.firstname}</span>
      </h4>
      <h4>
        lastname: <span style={{ color: "green" }}>{user.lastname}</span>
      </h4>{" "}
      <h4>
        email: <span style={{ color: "green" }}>{user.email}</span>
      </h4>{" "}
    </div>
  );
}

export default Userinf;

export function Profile() {
  return <h1>this profile </h1>;
}
