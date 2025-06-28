import clgdata from "./assets/json/collegedata.json";
import InnerCollegeLoop from "./InnerCollegeLoop";

function CollegeData() {
  console.log(clgdata);

  return (
    <>
      <div>
        {clgdata.map((clg, index) => (
          <div key={index}>
            <InnerCollegeLoop clg={clg}></InnerCollegeLoop>
          </div>
        ))}
      </div>
    </>
  );
}

export default CollegeData;
