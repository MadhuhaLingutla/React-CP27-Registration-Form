// Write your JS code here
import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    firstname: '',
    lastname: '',
    firstErrMsg: '',
    lastErrMsg: '',
    isSubmitted: false,
  }

  checkLastName = event => {
    const errorMessage = event.target.value === '' ? 'Required' : ' '
    this.setState({lastErrMsg: errorMessage})
  }

  checkFirstName = event => {
    const errorMessage = event.target.value === '' ? 'Required' : ' '
    this.setState({firstErrMsg: errorMessage})
  }

  recordFirstName = event => {
    this.setState({firstname: event.target.value})
  }

  recordLastName = event => {
    this.setState({lastname: event.target.value})
  }

  getFirstNameField = () => {
    const {firstname} = this.state
    return (
      <div className="input-field-container">
        <label className="input-label" htmlFor="username">
          FIRST NAME
        </label>
        <input
          type="text"
          id="username"
          className="input-field"
          placeholder="First name"
          onBlur={this.checkFirstName}
          onChange={this.recordFirstName}
          value={firstname}
        />
      </div>
    )
  }

  getLastNameField = () => {
    const {lastname} = this.state
    return (
      <div className="input-field-container">
        <label className="input-label" htmlFor="username">
          LAST NAME
        </label>
        <input
          type="text"
          id="username"
          className="input-field"
          placeholder="Last name"
          onBlur={this.checkLastName}
          onChange={this.recordLastName}
          value={lastname}
        />
      </div>
    )
  }

  submitsuccessfully = () => {
    this.setState({
      isSubmitted: true,
      firstname: '',
      lastname: '',
      firstErrMsg: '',
      lastErrMsg: '',
    })
  }

  submitForm = event => {
    event.preventDefault()
    const {firstname, lastname} = this.state
    if (firstname !== '' && lastname !== '') {
      this.submitsuccessfully()
    } else if (firstname === '' && lastname === '') {
      this.setState({firstErrMsg: 'Required', lastErrMsg: 'Required'})
    } else if (firstname === '') {
      this.setState({firstErrMsg: 'Required'})
    } else if (lastname === '') {
      this.setState({lastErrMsg: 'Required'})
    }
  }

  displayFrom = () => {
    const {firstErrMsg, lastErrMsg} = this.state
    return (
      <form className="registration-form" onSubmit={this.submitForm}>
        {this.getFirstNameField()}
        <p className="err-msg">{firstErrMsg}</p>
        {this.getLastNameField()}
        <p className="err-msg">{lastErrMsg}</p>
        <button className="submit-button" type="submit">
          Submit
        </button>
      </form>
    )
  }

  submitAnotherResponse = () => {
    this.setState({isSubmitted: false})
  }

  displaySubmitSuccess = () => (
    <div className="success-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
        className="success-logo"
      />
      <p className="success-description">Submitted Successfully</p>
      <button
        className="another-button"
        type="button"
        onClick={this.submitAnotherResponse}
      >
        Submit Another Response
      </button>
    </div>
  )

  render() {
    const {isSubmitted} = this.state
    return (
      <div className="Registration-form-container">
        <h1 className="heading">Registration</h1>
        {isSubmitted ? this.displaySubmitSuccess() : this.displayFrom()}
      </div>
    )
  }
}

export default RegistrationForm
