import React, { useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";
import { Formik, setIn } from "formik";
import * as Yup from "yup";
import * as API from "./../../services/api";
import axios from "axios";

function EmailAndPasswordForm() {
  const [invalid, setInvalid] = useState(false);

  function login(email, password) {
    let authenticate = {
      username: email,
      password: password
    };
    axios
      .post(`${API.URL}/authenticate`, authenticate)
      .then(response => {
        localStorage.setItem("user", JSON.stringify(response.data) );
      })
      .catch(function(error) {
        if(error.response.status === 403) {
          setInvalid(true);
        }
        console.log(error);
      });
  }

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          login(values.email, values.password);
          setSubmitting(false);
        }, 500);
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string().email().required("Required"),
        password: Yup.string()
          .required("Required")
          .min(4, "Minimum of 4 characters")
      })}
    >
      {props => {
        const {
          values,
          touched,
          errors,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit
        } = props;
        return (
          <Form noValidate onSubmit={handleSubmit}>
            {invalid && <Alert variant="warning">User not found</Alert>}
            <Form.Group controlId="email" className="mb-3">
              <Form.Control
                type="email"
                placeholder="Email"
                onChange={handleChange}
                value={values.email}
                onBlur={handleBlur}
              />
              {errors.email &&
                touched.email &&
                <div className="input-feedback">
                  {errors.email}
                </div>}
            </Form.Group>
            <Form.Group controlId="password" className="mb-3">
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={handleChange}
                value={values.password}
                onBlur={handleBlur}
              />
              {errors.password &&
                touched.password &&
                <div className="input-feedback">
                  {errors.password}
                </div>}
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              disabled={isSubmitting}
              block
            >
              Submit
            </Button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default EmailAndPasswordForm;
