import React, { Component } from "react";
// import Information from './Information.module.css'

const regularExpression = RegExp(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/)

const validation = ({ error, ...rest }) => {
    let checkValidation = false;

    Object.values(error).forEach(val => {
        if (val.length > 0) {
            checkValidation = false
        } else {
            checkValidation = true
        }
    });

    Object.values(rest).forEach(val => {
        if (val === null) {
            checkValidation = false
        } else {
            checkValidation = true
        }
    });

    return checkValidation;
};


export class Information extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: '',
            email: '',
            password: '',
            error: {
                name: '',
                email: '',
                password: ''
            }
        }
    }

    onFormSubmit = event => {
        event.preventDefault();

        if (validation(this.state)) {
            console.log(this.state)
        } else {
            console.log("Error occured");
        }
    };


    formObject = event => {

        event.preventDefault();

        const { name, value } = event.target;

        let error = { ...this.state.error };

        switch (name) {
            case "name":
                error.name = value.length < 5 ? "Name should be 5 characaters long" : "";
                break;
            case "email":
                error.email = regularExpression.test(value)
                    ? ""
                    : "Email is not valid";
                break;
            case "password":
                error.password =
                    value.length < 5 ? "Password should 5 characaters long" : "";
                break;
            default:
                break;
        }

        this.setState({
            error,
            [name]: value,

        })

    };

    render() {

        const { error } = this.state;

        return (
            <div className="contact container py-5">
                <div className="row py-5">
                    <div className="header col-md-12 text-center pt-4 ">
                        <h1>CONTACT</h1>
                        <i class=" fa-solid fa-star fs-1  pb-3 "></i>
                    </div>
                    <form className='form-controlll ' onSubmit={this.onFormSubmit}>

                        <div className="Name  ">
                            <label className="mb-2"><strong></strong></label>
                            <input required type="text" placeholder='UserNAme' name="name" onChange={this.formObject} className={error.name.length > 0 ? "is-invalid form-control" : "form-control"} />

                            {error.name.length > 0 && (
                                <span className="invalid-feedback">{error.name}</span>
                            )}
                        </div>

                        <div className="Name ">
                            <label className="mb-2"><strong></strong></label>
                            <input
                                required
                                type="email"
                                name="email"
                                placeholder='UserEmail'
                                className={error.email.length > 0 ? "is-invalid form-control" : "form-control"}
                                onChange={this.formObject} />

                            {error.email.length > 0 && (
                                <span className="invalid-feedback">{error.email}</span>
                            )}
                        </div>

                        <div className="Name ">
                            <label className="mb-2"><strong></strong></label>
                            <input
                                required
                                type="password"
                                name="password"
                                placeholder='UserNumber'
                                className={error.password.length > 0 ? "is-invalid form-control" : "form-control"}
                                onChange={this.formObject} />

                            {error.password.length > 0 && (
                                <span className="invalid-feedback">{error.password}</span>
                            )}
                        </div>

                        <div className="d-grid mt-3">
                            <button type="submit" className="btn btn-block btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}