import React, { useState } from "react";
import style from "./donateForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const DonateTab = () => {
  const initialValues = {
    FName: "",
    LName: "",
    telephone: "",
    emails: "",
    address: "",
    donationType: "",
    donorType: "",
  };

  const validationSchema = Yup.object().shape({
    FName: Yup.string().required("First name is required"),
    telephone: Yup.string()
      .matches(
        /^(0\d{9})$|^(\+94\d{9})$/,
        "Please enter a valid telephone number"
      )
      .required("Telephone number is required"),
    emails: Yup.string()
      .email("Please enter a valid email address")
      .required("Email is required"),
    address: Yup.string().required("Address is required"),
    donationType: Yup.string().required("Please select a donation type"),
    donorType: Yup.string().required("Please select a donor type"),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div
      className={`tab-pane fade show active `}
      id="pills-home"
      role="tabpanel"
      aria-labelledby="pills-home-tab"
      tabindex="0"
    >
      <div className={style.divDonateTabContent}>
        <span className={style.DonateThank}>
          <p>
            Thank you for taking part in Athwela, a project initiated by ITFSU
            to help the undergraduates with financial difficulties. To register
            for donations, please fill the below form for a coordinator from
            Athwela team to contact you.
          </p>

          <p>
            You can also find the yearly fund allocations for the scholarships
            here.
          </p>
        </span>

        <div className={style.ContentBeADonor}>
          <span className={style.TitleBeADonor}>Be a Donor</span> <br />
          Fill the form to be a donor of Athwela project.
        </div>

        <div className={style.FormBeADonor}>
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
          >
            {({ errors, touched }) => (
              <Form>
                <table>
                  <tbody>
                    {/* row 1 */}
                    <tr>
                      <td className={style.tdLableLeft}>
                        <label className={`form-label`} htmlFor="FirstName">
                          First Name/ Company Name
                          <span className={style.req}>*</span>
                        </label>

                        <Field
                          type="text"
                          name="FName"
                          className={` ${style.ipLeft} ${
                            touched.FName && errors.FName
                              ? "form-control is-invalid"
                              : "form-control"
                          } ${
                            touched.FName && !errors.FName
                              ? "form-control is-valid"
                              : "form-control"
                          }`}
                        />

                        <div className={style.errorMsg}>
                          <ErrorMessage name="FName" />
                        </div>
                      </td>

                      <td className={style.tdLableRight}>
                        <label
                          className={`form-label`}
                          id="input2"
                          htmlFor="LasttName"
                        >
                          Last Name
                        </label>

                        <Field
                          type="text"
                          name="LName"
                          className={` ${style.ipLeft} ${
                            touched.FName && !errors.FName
                              ? "form-control is-valid"
                              : "form-control"
                          }`}
                        />

                        <div className={style.errorMsg}>
                          <ErrorMessage name="LName" />
                        </div>
                      </td>
                    </tr>

                    {/* row 2 */}
                    <tr>
                      <td className={style.tdLableLeft}>
                        <label className={`form-label`} htmlFor="telephone">
                          Telephone<span className={style.req}>*</span>
                        </label>

                        <Field
                          type="text"
                          name="telephone"
                          className={` ${style.ipLeft} ${
                            touched.telephone && errors.telephone
                              ? "form-control is-invalid"
                              : "form-control"
                          } ${
                            touched.telephone && !errors.telephone
                              ? "form-control is-valid"
                              : "form-control"
                          }`}
                        />

                        <div className={style.errorMsg}>
                          <ErrorMessage name="telephone" />
                        </div>
                      </td>

                      <td className={style.tdLableRight}>
                        <label className={`form-label`} htmlFor="email">
                          Email
                          <span className={style.req} n>
                            *
                          </span>
                        </label>

                        <Field
                          type="text"
                          name="emails"
                          className={` ${style.ipRight} ${
                            touched.emails && errors.emails
                              ? "form-control is-invalid"
                              : "form-control"
                          } ${
                            touched.emails && !errors.emails
                              ? "form-control is-valid"
                              : "form-control"
                          } `}
                        />

                        <div className={style.errorMsg}>
                          <ErrorMessage name="emails" />
                        </div>
                      </td>
                    </tr>

                    {/* row 3 */}

                    <tr>
                      <td colspan="2" className={style.tdLableFull}>
                        <label className={`form-label`} htmlFor="address">
                          Address<span className={style.req}>*</span>
                        </label>

                        <Field
                          type="text"
                          name="address"
                          className={` ${style.ipFull} ${
                            touched.address && errors.address
                              ? "form-control is-invalid"
                              : "form-control"
                          } ${
                            touched.address && !errors.address
                              ? "form-control is-valid"
                              : "form-control"
                          }`}
                        />

                        <div className={style.errorMsg}>
                          <ErrorMessage name="address" />
                        </div>
                      </td>
                    </tr>

                    {/* row 4 */}
                    <tr>
                      <td className={style.tdLableLeft}>
                        <label className={`form-label`} htmlFor="donationType">
                          Donation Type<span className={style.req}>*</span>
                        </label>

                        <Field
                          name="donationType"
                          as="select"
                          className={` ${style.ipLeft} ${
                            touched.donationType && errors.donationType
                              ? "form-select is-invalid"
                              : "form-select"
                          } ${
                            touched.donationType && !errors.donationType
                              ? "form-select is-valid"
                              : "form-select"
                          }`}
                        >
                          <option value="def" selected aria-disabled>
                            {" "}
                          </option>
                          <option value="m">Monthly</option>
                          <option value="y">Yearly</option>
                          <option value="o">One Time</option>
                        </Field>

                        <div className={style.errorMsg}>
                          <ErrorMessage name="donationType" />
                        </div>
                      </td>
                    </tr>

                    {/* row 5 */}
                    <tr>
                      <td className={style.tdLableLeft}>
                        <label className={`form-label`} htmlFor="donorType">
                          Donor Type<span className={style.req}>*</span>
                        </label>

                        <Field
                          name="donorType"
                          as="select"
                          className={` ${style.ipLeft} ${
                            touched.donorType && errors.donorType
                              ? "form-select is-invalid"
                              : "form-select"
                          } ${
                            touched.donorType && !errors.donorType
                              ? "form-select is-valid"
                              : "form-select"
                          }`}
                        >
                          <option value="def" selected aria-disabled>
                            {" "}
                          </option>
                          <option value="a">Alumni</option>
                          <option value="b">Business</option>
                          <option value="i">Individual</option>
                        </Field>

                        <div className={style.errorMsg}>
                          <ErrorMessage name="donorType" />
                        </div>
                      </td>
                    </tr>

                    {/* row 6 */}

                    <tr>
                      <td>
                        <input
                          type="submit"
                          className={`btn btn-danger ${style.btnSubmit} ${style.formButton}`}
                        />

                        <input
                          type="reset"
                          className={`btn btn-light ${style.btnReset} ${style.formButton}`}
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};
export default DonateTab;

function validateFirstName() {
  var fName = document.getElementById(fName);
  if (fName == "") {
    alert("This field is required");
    return false;
  }
}
