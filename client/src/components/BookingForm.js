import React from 'react';
import { ErrorMessage, Field, Formik, Form } from "formik";
import * as Yup from "yup";
import DateView from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import "../App.css";
import TextError from "./TextError";

const initialValues = {
    name: "",
    idNumber: "",
    sampleMode: "",
    slot: "",
    id: "",
    mobileNumber: +91,
    gender: "",
    address: "",
    emailID: "",
    dob: null,
    wardNumber: "",
    nagarNigam: "",
    location: "",
};
const onSubmit = (values, onSubmitProps) => {
    getLocation();
    console.log(values);
    onSubmitProps.resetForm();
    alert("Form Submitted");
};
// const validate = values => {
//     let errors = {};
//     if (!values.name) errors.name = "Required";
//     if (!values.idNumber) errors.idNumber = "Required";
//     if (!values.id) errors.id =  "Required";
//     return errors;
// };
const validationSchema = Yup.object({
    id: Yup.string().required("Required"),
    idNumber: Yup.string().required("Required"),
    name: Yup.string().required("Required"),
    slot: Yup.string().required("Required"),
    gender: Yup.string().required("Required"),
    nagarNigam: Yup.string().required("Required"),
    address: Yup.string().required("Required"),
    sampleMode: Yup.string().required("Required"),
    dob: Yup.date().required("Required").nullable(),
    emailID: Yup.string().email("Invalid email format").required("Required"),
    wardNumber: Yup.number().positive().integer().min(10).max(999),
    mobileNumber: Yup.number().positive().integer().min(911111111111).max(919999999999).required("Required")
});
const sampleOptions = [
    {key: "Home Collection (Only for individuals aged 65yrs & above)", value: "home"},
    {key: "Drive-in", value: "drive"}
];
const idOptions = [
    {key: "Aadhar Card", value: "aadhar"},
    {key: "Passport", value: "passport"}
];
const genderOptions = [
    {key: "MALE", value: "male"},
    {key: "FEMALE", value: "female"},
    {key: "OTHERS", value: "other"}
]
const nnOptions = [
    {key: "Heritage, Jaipur", value: "heritage"},
    {key: "Greater, Jaipur", value: "greater"}
]

function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(showPosition);
    } else { 
      initialValues.location = "Geolocation is not supported by this browser.";
    }
  }
      
function showPosition(position) {
    initialValues.location ="Latitude: " + position.coords.latitude + 
    "Longitude: " + position.coords.longitude;
}
// function getLocation() {
//     function success(position) {
//         const latitude  = position.coords.latitude;
//         const longitude = position.coords.longitude;
//         var mapLink = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
//         return mapLink;
//     }
//     function error() {
//         return "User denied location permission";
//     }
//     initialValues.location = navigator.geoLocation.getCurrentPosition(success, error);
// };
// if (window.navigator.geolocation) getLocation();

function BookingForm({click}) {
    return (
        <Formik className="Apps" initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            {formik => (
                <Form>
                    <h2>Please fill all the details</h2>
                    <div className="form-control">
                        <label>Mode of Sample Collection:</label>
                        <Field name="sampleMode">
                            {({field}) => {
                                return sampleOptions.map(option => (
                                    <>
                                        <input type="radio" id={option.value} {...field} value={option.value} checked={field.value === option.value} />
                                        <label>{option.key}</label>
                                    </>
                                ))
                            }}
                        </Field>
                        <ErrorMessage component={TextError} name="sampleMode" />
                    </div>
                    <div className="form-control">
                        <label>Slot Availability:</label>
                        Available for the next day-
                        <Field as="select" id="slot" name="slot">
                            <option value="">Select an option</option>
                            <option value="10-10.3">10:00 - 10:30</option>
                            <option value="12-12.3">12:00 - 12:30</option>
                            <option value="13-13.3">13:00 - 13:30</option>
                            <option value="14-14.3">14:00 - 14:30</option>
                            <option value="15-15.3">15:00 - 15:30</option>
                        </Field>
                        <ErrorMessage component={TextError} name="slot" />
                    </div>
                    <div className="form-control">
                        <label>
                            ID Proof:
                        </label>
                        <Field name="id">
                            {({field}) => {
                                return idOptions.map(option => (
                                    <>
                                        <input type="radio" id={option.value} {...field} value={option.value} checked={field.value === option.value} />
                                        <label>{option.key}</label>
                                    </>
                                ))
                            }}
                        </Field>
                        <ErrorMessage component={TextError} name="id" />
                    </div>
                    <div className="form-control">
                        <label>
                            ID Proof Number:
                        </label>
                        <Field type="text" id="idNumber" name="idNumber" />
                        <ErrorMessage component={TextError} name="idNumber" />
                    </div>
                    <div className="form-control">
                        <label>
                            Name as per the ID Proof:
                        </label>
                        <Field type="text" id="name" name="name" />
                        <ErrorMessage component={TextError} name="name" />
                    </div>
                    <div className="form-control">
                        <label>Date of Birth:</label>
                        <Field name="dob">
                            {({field, form}) => (
                                <DateView id="dob" placeholderText="Click to select a date" maxDate={new Date()} showYearDropdown dropdownMode="scroll" {...field} selected={field.value} onChange={val => form.setFieldValue("dob", val)} />
                            )}
                        </Field>
                        <ErrorMessage component={TextError} name="dob" />
                    </div>
                    <div className="form-control">
                        <label>Gender:</label>
                        <Field name="gender">
                            {({field}) => {
                                return genderOptions.map(option => (
                                    <>
                                        <input type="radio" id={option.value} {...field} value={option.value} checked={field.value === option.value} />
                                        <label>{option.key}</label>
                                    </>
                                ))
                            }}
                        </Field>
                        <ErrorMessage component={TextError} name="gender" />
                    </div>
                    <div className="form-control">
                        <label>Mobile Number:</label>
                        <Field type="number" id="mobileNumber" name="mobileNumber" />
                        <ErrorMessage component={TextError} name="mobileNumber" />
                    </div>
                    <div className="form-control">
                        <label>Address:</label>
                        <Field id="address" placeholder="House Number, Colony, City with PIN Code" type="text" name="address" />
                        <ErrorMessage name="address" component={TextError} />
                    </div>
                    <div className="form-control">
                        <label>Ward Number:</label>
                        <Field type="number" id="wardNumber" name="wardNumber" />
                        <ErrorMessage component={TextError} name="wardNumber" />
                    </div>
                    <div className="form-control">
                        <label>Nagar Nigam:</label>
                        <Field name="nagarNigam">
                            {({field}) => {
                                return nnOptions.map(option => (
                                    <>
                                        <input type="radio" id={option.value} {...field} value={option.value} checked={field.value === option.value} />
                                        <label>{option.key}</label>
                                    </>
                                ))
                            }}
                        </Field>
                        <ErrorMessage component={TextError} name="nagarNigam" />
                    </div>
                    <div className="form-control">
                        <label>Email ID:</label>
                        <Field type="email" id="emailID" name="emailID" />
                        <ErrorMessage component={TextError} name="emailID" />
                    </div>
                    <button onClick={click} >Go Back</button>
                    <button type="submit">Submit</button>
                </Form>
            )}
        </Formik>
    )
}

export default BookingForm
