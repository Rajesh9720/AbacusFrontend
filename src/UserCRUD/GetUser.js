import React from "react";
import { Table, Button } from "react-bootstrap";
import axios from "axios";
import "./App.css"



const apiUrl = "https://localhost:7045/API/Student";

class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      users: [],
      response: {},
    };
  }

  componentDidMount() {
    axios
      .get(apiUrl + "/AllStudentDetails")
      .then((response) => response.data)
      .then(
        (result) => {
          this.setState({
            users: result,
          });
        },
        (error) => {
          this.setState({ error });
        }
      );
  }

  deleteUser(id) {
    const { users } = this.state;
    axios.delete(apiUrl + "/DeleteUserDetails/" + id).then((result) => {
      alert(result.data);
      this.setState({
        response: result,
        users: users.filter((user) => user.id !== id),
      });
    });
  }

  render() {
    const { error, users } = this.state;
    if (error) {
      return <div>Error:{error.message}</div>;
    } else {
      return (
        <div>
          <table>
            <thead className="btn-primary">
              <tr>
                <th>studentsName</th>
                <th>age</th>
                <th>grade</th>
                <th>email</th>
                <th>password</th>
                <th>contactNumber</th>
               {/* <th>Action</th>  */}
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} data-testid="userrow">
                  <td>{user.studentsName}</td>
                  <td>{user.age}</td>
                  <td>{user.grade}</td>                  
                  <td>{user.email}</td>
                  <td>{user.password}</td>
                  <td>{user.contactNumber}</td>
                  <td>

                  
                    {/* <Button
                      variant="info"
                      onClick={() => this.props.editUser(user.id)}
                    >
                      Edit
                    </Button> */}
                    <button
                      variant="danger"
                      onClick={() => this.deleteUser(user.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }
  }
}

export default UserList;
