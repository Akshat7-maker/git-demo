// "use client";

// import Footer from "@/app/branding-listing/compontets/footer";
// import Header from "@/app/components/Header";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";

// export default function GeneralEnquiry() {
//   // ✅ Yup Validation Schema
//   const validationSchema = Yup.object({
//     name: Yup.string()
//       .min(2, "Too short")
//       .required("Name is required"),

//     email: Yup.string()
//       .email("Invalid email")
//       .required("Email is required"),

//     phone: Yup.string()
//       .matches(/^[0-9]{10}$/, "Enter valid 10 digit number")
//       .required("Phone number is required"),

//     enquiry: Yup.string()
//       .min(10, "At least 10 characters")
//       .required("Enquiry is required"),

//     terms: Yup.boolean()
//       .oneOf([true], "You must accept the terms"),
//   });

//   // ✅ Initial Values
//   const initialValues = {
//     name: "",
//     email: "",
//     phone: "",
//     enquiry: "",
//     terms: false,
//   };

//   // ✅ Submit Handler
//   const handleSubmit = (values: typeof initialValues) => {
//     console.log("Form Data:", values);
//     // API CALL HERE
//   };

//   return (
//     <>
//       <Header />

//       <section className="general-enq-sec">
//         {/* Heading */}
//         <section className="hadding-sec">
//           <div className="hadding-sec">
//             <div className="right-hadding">
//               <h1 className="name-font">General Enquiries</h1>
//             </div>
//             <div className="left-sub-hadding">
//               <p className="titlefont">
//                 Got a question or want to work with us? Reach out using the form
//                 below — our team at The Hair & Makeup Hub is always happy to help.
//               </p>
//             </div>
//           </div>
//         </section>

//         {/* Form */}
//         <section className="enquiry-form-sec">
//           <Formik
//             initialValues={initialValues}
//             validationSchema={validationSchema}
//             onSubmit={handleSubmit}
//           >
//             {({ isSubmitting }) => (
//               <Form className="general-enquiry-form">
//                 {/* Name */}
//                 <div className="form-group">
//                   <label className="form-label name-font">Name</label>
//                   <Field
//                     name="name"
//                     type="text"
//                     className="form-input"
//                   />
//                   <ErrorMessage
//                     name="name"
//                     component="p"
//                     className="error-text"
//                   />
//                 </div>

//                 {/* Email */}
//                 <div className="form-group">
//                   <label className="form-label name-font">
//                     Email Address
//                   </label>
//                   <Field
//                     name="email"
//                     type="email"
//                     className="form-input"
//                   />
//                   <ErrorMessage
//                     name="email"
//                     component="p"
//                     className="error-text"
//                   />
//                 </div>

//                 {/* Phone */}
//                 <div className="form-group">
//                   <label className="form-label name-font">
//                     Phone Number
//                   </label>
//                   <Field
//                     name="phone"
//                     type="tel"
//                     className="form-input"
//                   />
//                   <ErrorMessage
//                     name="phone"
//                     component="p"
//                     className="error-text"
//                   />
//                 </div>

//                 {/* Enquiry */}
//                 <div className="form-group">
//                   <label className="form-label name-font">Enquiry</label>
//                   <Field
//                     as="textarea"
//                     name="enquiry"
//                     className="form-textarea"
//                   />
//                   <ErrorMessage
//                     name="enquiry"
//                     component="p"
//                     className="error-text"
//                   />
//                 </div>

//                 {/* Terms */}
//                 <div className="form-checkbox">
//                   <Field type="checkbox" name="terms" />
//                   <span className="name-font">
//                     I agree to the terms and conditions
//                   </span>
//                 </div>
//                 <ErrorMessage
//                   name="terms"
//                   component="p"
//                   className="error-text"
//                 />

//                 {/* Submit */}
//                 <button
//                   type="submit"
//                   disabled={isSubmitting}
//                   className="submit-btn name-font"
//                 >
//                   {isSubmitting ? "Submitting..." : "Submit Enquiry"}
//                 </button>
//               </Form>
//             )}
//           </Formik>
//         </section>
//       </section>

//       <Footer />
//     </>
//   );
// }

// .error-text {
//   color: red;
//   font-size: 12px;
//   margin-top: 4px;
// }