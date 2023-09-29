import React from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
/* import { Formik } from "formik"; */

class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {},
      errors: {}
    }

    this.handleChange = this.handleChange.bind(this);
    this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);
  };

  handleChange(e) {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields
    });
    /* console.log(fields); */

  }

  sendData() {
    console.log(this.state.fields)
    axios.post("http://localhost:8520/saveCust", this.state.fields);
    alert("Form submitted");
    <Navigate to="/" />
  }

  submituserRegistrationForm(e) {
    e.preventDefault();
    if (this.validateForm()) {
      let fields = {};
      fields["firstName"] = "";
      fields["lastName"] = "";
      fields["emailId"] = "";
      fields["contactNo"] = "";
      fields["password"] = "";
      fields["address"] = "";
      fields["city"] = "";
      fields["state"] = "";
      fields["country"] = "";
      fields["gender"] = "";
      this.setState({ fields: fields });
      console.log(fields);

      this.sendData()
      /* setCustomer({ ...customer, [e.target.name]: e.target.value }); */
      /* axios.post("http://localhost:8520/saveCust", fields); */
      alert("Form submitted");
      /* <Navigate to="/"/> */
    }
  }

  validateForm() {

    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    if (!fields["firstName"]) {
      formIsValid = false;
      errors["firstName"] = "*Please enter your firstName.";
      console.log(formIsValid)
    }

    if (typeof fields["firstName"] !== "undefined") {
      if (!fields["firstName"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["firstName"] = "*Please enter alphabet characters only.";
        console.log(formIsValid)
      }
    }

    if (!fields["lastName"]) {
      formIsValid = false;
      errors["lastName"] = "*Please enter your lastName.";
      console.log(formIsValid)
    }

    if (typeof fields["lastName"] !== "undefined") {
      if (!fields["lastName"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["lastName"] = "*Please enter alphabet characters only.";
        console.log(formIsValid)
      }
    }

    if (!fields["emailId"]) {
      formIsValid = false;
      errors["emailId"] = "*Please enter your email-ID.";
      console.log(formIsValid)
    }

    if (typeof fields["emailId"] !== "undefined") {
      //regular expression for email validation
      var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if (!pattern.test(fields["emailId"])) {
        formIsValid = false;
        errors["emailId"] = "*Please enter valid email-ID.";
        console.log(formIsValid)
      }
    }

    if (!fields["contactNo"]) {
      formIsValid = false;
      errors["contactNo"] = "*Please enter your contact no.";
      console.log(formIsValid)
    }

    if (typeof fields["contactNo"] !== "undefined") {
      if (!fields["contactNo"].match(/^[0-9]{10}$/)) {
        formIsValid = false;
        errors["contactNo"] = "*Please enter valid mobile no.";
        console.log(formIsValid)
      }
    }

    if (!fields["password"]) {
      formIsValid = false;
      errors["password"] = "*Please enter your password.";
      console.log(formIsValid)
    }

    if (typeof fields["password"] !== "undefined") {
      if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
        formIsValid = false;
        errors["password"] = "*Please enter secure and strong password.";
        console.log(formIsValid)
      }
    }

    if (!fields["address"]) {
      formIsValid = false;
      errors["address"] = "*Please enter Valid Address.";
      console.log(formIsValid)
    }

    if (typeof fields["address"] !== "undefined") {
      if (!fields["address"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["address"] = "*Please enter alphabet characters only.";
        console.log(formIsValid)
      }
    }

    if (!fields["city"]) {
      formIsValid = false;
      errors["city"] = "*Please enter your city.";
      console.log(formIsValid)
    }

    if (typeof fields["city"] !== "undefined") {
      if (!fields["city"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["city"] = "*Please enter alphabet characters only.";
        console.log(formIsValid)
      }
    }

    if (!fields["state"]) {
      formIsValid = false;
      errors["state"] = "*Please enter your state.";
      console.log(formIsValid)
    }

    if (typeof fields["state"] !== "undefined") {
      if (!fields["state"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["state"] = "*Please enter alphabet characters only.";
        console.log(formIsValid)
      }
    }

    if (!fields["country"]) {
      formIsValid = false;
      errors["country"] = "*Please enter your country.";
      console.log(formIsValid)
    }

    if (typeof fields["country"] !== "undefined") {
      if (!fields["country"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["country"] = "*Please enter alphabet characters only.";
        console.log(formIsValid)
      }
    }

    if (!fields["gender"]) {
      formIsValid = false;
      errors["gender"] = "*Please enter your gender.";
      console.log(formIsValid)
    }
    if (typeof fields["gender"] !== "undefined") {
      if ((fields["gender"] === 'male' || fields["gender"] === 'female')) {
        formIsValid = false;
        errors["gender"] = "Please Select One of the Options";
        console.log(formIsValid)
      }
    }

    this.setState({
      errors: errors
    });
    console.log(formIsValid)
    return formIsValid;
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
            <h2 className="text-center m-4">Register Customer</h2>
            <form method="post" name="userRegistrationForm" onSubmit={this.submituserRegistrationForm} >
              <label>First Name</label>
              <input type="text" name="firstName" value={this.state.fields.firstName || ''} onChange={this.handleChange} />
              <div className="errorMsg">{this.state.errors.firstName}</div>

              <label>Last Name</label>
              <input type="text" name="lastName" value={this.state.fields.lastName || ''} onChange={this.handleChange} />
              <div className="errorMsg">{this.state.errors.lastName}</div>

              <label>Email ID:</label>
              <input type="text" name="emailId" value={this.state.fields.emailId || ''} onChange={this.handleChange} />
              <div className="errorMsg">{this.state.errors.emailId}</div>

              <label>Mobile No:</label>
              <input type="text" name="contactNo" value={this.state.fields.contactNo || ''} onChange={this.handleChange} />
              <div className="errorMsg">{this.state.errors.contactNo}</div>

              <label>Password</label>
              <input type="password" name="password" value={this.state.fields.password || ''} onChange={this.handleChange} />
              <div className="errorMsg">{this.state.errors.password}</div>

              <label>Address</label>
              <input type="address" name="address" value={this.state.fields.address || ''} onChange={this.handleChange} />
              <div className="errorMsg">{this.state.errors.address}</div>

              <label>City</label>
              <input type="city" name="city" value={this.state.fields.city || ''} onChange={this.handleChange} />
              <div className="errorMsg">{this.state.errors.city}</div>

              <label>State</label>
              <input type="state" name="state" value={this.state.fields.state || ''} onChange={this.handleChange} />
              <div className="errorMsg">{this.state.errors.state}</div>

              <label>Country</label>
              <input type="country" name="country" value={this.state.fields.country || ''} onChange={this.handleChange} />
              <div className="errorMsg">{this.state.errors.country}</div>

              <label>Gender</label>
              <input type="radio" name="gender" value="Male" checked={this.state.fields.gender === "Male"} onChange={this.handleChange} /> Male
              <input type="radio" name="gender" value="Female" checked={this.state.fields.gender === "Female"} onChange={this.handleChange} /> Female
              <div className="errorMsg">{this.state.errors.gender}</div>

              <input type="submit" className="button" value="Register" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

/* ReactDOM.render(<RegisterForm />, document.getElementById('root')); */
export default RegistrationForm;