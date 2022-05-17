import withData from "hocs/withData";
import React from "react";

function UserList(props) {
  return (
    <div className="col-6">
        <h3>User List</h3>
      {props.data.map((user) => {
        return (
          <div className="card mb-3" key={user.email}>
            <div className="card-body">
              <h4 className="card-title">{user.hoTen}</h4>
              <p className="card-text">{user.email}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default withData(UserList);
