function InnerCollegeLoop({ clg }) {
  return (
    <div
      style={{
        backgroundColor: "#ccc",
        padding: "10px",
        borderBottom: "2px solid #000",
        margin: "10px",
        borderRadius: "10px",
      }}
    >
      <h1>
        Student email: <span>{clg.email}</span>
      </h1>
      <ul>
        <li>
          <h3>Student-vc {clg.first_name}</h3>
        </li>
        <li>
          <h3>Student-lastname {clg.last_name}</h3>
        </li>
        <div>
          <h1>course </h1>
          {clg.courses.map((course, index) => (
            <div key={index}>
              <li>
                <h4>{course.course_name}</h4>
              </li>
            </div>
          ))}
        </div>
      </ul>
    </div>
  );
}
export default InnerCollegeLoop;
