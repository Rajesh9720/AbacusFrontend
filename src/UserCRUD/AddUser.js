import React from "react";
import { Row, Form, Col, Button } from "react-bootstrap";
import "./App.css"
class AddUser extends React.Component {
  constructor(props) {
    super(props);

    this.initialState = {
      //userId: '',     
      regStudentsName: "",
      regAge: "",
      regGrade: "",
      regEmail: "",
      regPassword: "",
      regContactNumber: ""
    };

    if (props.user.id) {
      this.state = props.user;
    } else {
      this.state = this.initialState;
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onFormSubmit(this.state);
    this.setState(this.initialState);
  }
  render() {
    let pageTitle;
    let actionStatus;
    if (this.state.id) {
      pageTitle = <h2>Edit User</h2>;
      actionStatus = <b>Update</b>;
    } else {
      pageTitle = <h2>Add User</h2>;
      actionStatus = <b>Save</b>;
      
    }

    return (
      <div className="Rajesh">
        <h2> {pageTitle}</h2>
        <Row>
          <Col sm={7}>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group controlId="regStudentsName">
                <Form.Label>StudentsName</Form.Label><br/>
                <Form.Control
                  type="text"
                  name="regStudentsName"
                  data-testid="firstname"
                  value={this.state.regStudentsName}
                  onChange={this.handleChange}
                  placeholder="StudentsName"
                />
              </Form.Group>
              <Form.Group controlId="regAge">
                <Form.Label>Age</Form.Label><br/>
                <Form.Control
                  type="text"
                  name="regAge"
                  data-testid="lastname"
                  value={this.state.regAge}
                  onChange={this.handleChange}
                  placeholder="Age"
                />
              </Form.Group>
              <Form.Group controlId="regGrade">
                <Form.Label>Grade</Form.Label><br/>
                <Form.Control
                  type="text"
                  name="regGrade"
                  data-testid="emailid"
                  value={this.state.regGrade}
                  onChange={this.handleChange}
                  placeholder="Grade"
                />
              </Form.Group>
              <Form.Group controlId="regEmail">
                <Form.Label>Email</Form.Label><br/>
                <Form.Control
                  type="text"
                  name="regEmail"
                  data-testid="mobile"
                  value={this.state.regEmail}
                  onChange={this.handleChange}
                  placeholder="Email"
                />
              </Form.Group>
              <Form.Group controlId="regPassword">
                <Form.Label>Password</Form.Label><br/>
                <Form.Control
                  type="text"
                  name="regPassword"
                  data-testid="address"
                  value={this.state.regPassword}
                  onChange={this.handleChange}
                  placeholder="Password"
                />
              </Form.Group>

              <Form.Group controlId="regContactNumber">
                <Form.Label>ContactNumber</Form.Label><br/>
                <Form.Control
                  type="text"
                  name="regContactNumber"
                  data-testid="pincode"
                  value={this.state.regContactNumber}
                  onChange={this.handleChange}
                  placeholder="ContactNumber"
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  type="hidden"
                  name="userId"
                  value={this.state.id}
                /><br/>
                <button variant="success" type="submit">
                  {actionStatus}
                </button>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </div>
    );
  }
}

export default AddUser;
