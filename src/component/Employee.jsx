import React from "react";
import femaleProfile from "../image/female.jpeg";
import maleProfile from "../image/male.png";
import "../image/img.css";

const Employee = ({employees,selectedTeam,handleEmployeeCardClick,handleTeamSelectionChange}) => {
 
  return (
    <main className="container">
      <div class="row justify-content-center mt-3 mb-3">
        <div class="col-8">
          <select
            className="form-select form-select-lg"
            value={selectedTeam}
            onChange={handleTeamSelectionChange}
            
          >
            <option value="TeamA">Team-A</option>
            <option value="TeamB">Team-B</option>
            <option value="TeamC">Team-C</option>
            <option value="TeamD">Team-D</option>
          </select>
        </div>
      </div>

      <div class="row justify-content-center mt-3 mb-3">
        <div class="col-8">
          <div className="card-collection">
            {employees.map((emp) => {
              return (
                <div
                key={emp.id}
                  id={emp.id}
                  className={(emp.teamName === selectedTeam ? 'card m-2 standout' : 'card m2')}
                  style={{ cursor: "pointer" }}
                  onClick={handleEmployeeCardClick}
                >
                  {emp.gender === "male" ? (
                    <img src={maleProfile} className="card-img-top" />
                  ) : (
                    <img src={femaleProfile} className="card-img-top" />
                  )}

                  <div className="card-body">
                    <h5 className="card-title">Full Name: {emp.fullName}</h5>
                    <p className="card-text">
                      <b>Designation : </b>
                      {emp.designation}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Employee;
