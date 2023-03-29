// import Otp from "rc-otp-input/Otp";
// import "./pssword.css";
// import Grid from "@mui/material/Unstable_Grid2";
// import { Button, Typography } from "@mui/material";
// import { Link } from "react-router-dom";
// import CountryPhoneInput, { ConfigProvider } from "antd-country-phone-input";
// import en from "world_countries_lists/data/countries/en/world.json";
// import "antd/dist/antd.css";
// import "antd-country-phone-input/dist/index.css";
// import {
//     InputLabel,
//     InputAdornment,
//     IconButton,
//     OutlinedInput,
// } from "@mui/material";
// import Visibility from "@mui/icons-material/Visibility";
// import VisibilityOff from "@mui/icons-material/VisibilityOff";
// import { useEffect, useState } from "react";
// import successImage from "../images/success.gif";
// import Logo from "../images/Logo.png";
// import { initializeApp } from "firebase/app";
// import {
//     getAuth,
//     signInWithPhoneNumber,
//     RecaptchaVerifier,
// } from "firebase/auth";

// import { app } from "../../../Utils/firebase";
// import { postService } from "../../../Utils/utils";

// export const OTP = (props) => {
//     useEffect(() => {
//         console.log(props);
//     }, []);

//     const [code, setCode] = useState("");
//     const [error, setError] = useState("");

//     const handelClick = () => {
//         if (props.otpDetails.confirmObj) {
//             props.otpDetails.confirmObj
//                 .confirm(code.toString())
//                 .then((result) => {
//                     console.log(result);
//                     props.nextPage(props.otpDetails);
//                 })
//                 .catch((error) => {
//                     setError(error.message);
//                 });
//         }
//     };
//     return (
//         <Grid
//             container
//             rowSpacing={1}
//             width={400}
//             justifyContent={"center"}
//             alignItems={"center"}
//             md={12}
//         >
//             <Grid
//                 display={"flex"}
//                 justifyContent={"center"}
//                 alignItems={"center"}
//                 md={12}
//                 xs={12}
//             // height={200}
//             >
//                 <img src={Logo} alt="Logo" />
//             </Grid>
//             <Grid
//                 display={"flex"}
//                 justifyContent={"center"}
//                 alignItems={"center"}
//                 md={12}
//                 xs={12}
//                 marginBottom={5}
//             >
//                 <label className="otpTitle">Verify Your Identity</label>
//             </Grid>
//             <Grid
//                 display={"flex"}
//                 justifyContent={"center"}
//                 alignItems={"center"}
//                 md={12}
//                 xs={12}
//                 lg={12}
//             >
//                 <label className="otpSubTitle">
//                     Please Enter The One-Time Password (OTP) To Verify Your Account
//                 </label>
//             </Grid>
//             <Grid
//                 display={"flex"}
//                 justifyContent={"center"}
//                 alignItems={"center"}
//                 md={12}
//                 xs={12}
//                 marginBottom={5}
//             >
//                 <label className="otpMsgSubTitle">
//                     A One-Time Password (OTP) Has Been Sent To {props.otpDetails.phoneNo}
//                 </label>
//             </Grid>
//             <Grid
//                 display={"flex"}
//                 justifyContent={"center"}
//                 alignItems={"center"}
//                 md={12}
//                 xs={12}
//             >
//                 <Otp
//                     autoFocus
//                     numOfFields={6}
//                     type="text"
//                     className="otp"
//                     onChange={(value) => setCode(value)}
//                 />
//             </Grid>
//             <Grid
//                 display={"flex"}
//                 justifyContent={"center"}
//                 alignItems={"center"}
//                 md={12}
//                 xs={12}
//             >
//                 <label>{error}</label>
//             </Grid>
//             <Grid
//                 display={"flex"}
//                 justifyContent={"center"}
//                 alignItems={"center"}
//                 md={12}
//                 xs={12}
//             >
//                 <Button className="otpBtn" onClick={handelClick}>
//                     VALIDATE
//                 </Button>
//             </Grid>
//             <Grid
//                 display={"flex"}
//                 justifyContent={"center"}
//                 alignItems={"center"}
//                 md={12}
//                 xs={12}
//             >
//                 <Link className="resendOtp">Resend one-time password (OTP)</Link>
//             </Grid>
//         </Grid>
//     );
// };

// export const PhoneForm = (props) => {
//     const [phoneNo, setPhoneNo] = useState(null);
//     const [fbAppn, setFbApp] = useState(null);
//     const [fbAuth, setFbAuth] = useState(null);
//     const [fbVerify, setFbVerify] = useState(null);
//     const [confirmationResult, setConfirmationResult] = useState(null);
//     const [error, setError] = useState("");
//     const getFlag = (short) => {
//         const data = require(`world_countries_lists/data/flags/24x24/${short.toLowerCase()}.png`);
//         // for dumi
//         if (typeof data === "string") {
//             return data;
//         }
//         // for CRA
//         return data.default;
//     };

//     useEffect(() => {
//         const auth = getAuth(app);
//         setFbAuth(auth);
//     }, []);

//     const handelClick = () => {
//         var uid = (Math.random().toString(36) + "00000000000000000").slice(2, 7);
//         document.getElementById(
//             "recaptcha-container"
//         ).innerHTML = `<div id=${uid}></div>`;

//         if (document.getElementById("recaptcha-container").firstChild) {
//             uid = (Math.random().toString(36) + "00000000000000000").slice(2, 7);
//             document.getElementById(
//                 "recaptcha-container"
//             ).innerHTML = `<div id=${uid}></div>`;
//         }

//         window.recaptchaVerifier = new RecaptchaVerifier(
//             uid,
//             {
//                 size: "invisible",
//                 callback: (response) => {
//                     console.log(response);
//                     // reCAPTCHA solved, allow signInWithPhoneNumber.
//                     // ...
//                 },
//                 "expired-callback": (er) => {
//                     console.log(er);
//                 },
//             },
//             fbAuth
//         );

//         const appVerifier = window.recaptchaVerifier;
//         setFbVerify(appVerifier);

//         signInWithPhoneNumber(
//             fbAuth,
//             "+" + phoneNo.code + phoneNo.phone,
//             appVerifier
//         )
//             .then((res) => {
//                 console.log("result", res);
//                 setConfirmationResult(res);
//                 props.nextPage({
//                     confirmObj: res,
//                     phoneNo: "+" + phoneNo.code + phoneNo.phone,
//                 });
//             })
//             .catch((error) => {
//                 setError(error.message);
//             });
//     };
//     return (
//         <Grid
//             container
//             rowSpacing={1}
//             width={400}
//             justifyContent={"center"}
//             alignItems={"center"}
//             md={12}
//         >
//             <Grid
//                 display={"flex"}
//                 justifyContent={"center"}
//                 alignItems={"center"}
//                 md={12}
//                 xs={12}
//             // height={200}
//             >
//                 <img src={Logo} alt="Logo" />
//             </Grid>
//             <Grid
//                 display={"flex"}
//                 justifyContent={"center"}
//                 alignItems={"center"}
//                 md={12}
//                 xs={12}
//                 marginBottom={5}
//             >
//                 <label className="otpTitle">Verify Your Identity</label>
//             </Grid>
//             <Grid
//                 display={"flex"}
//                 justifyContent={"center"}
//                 alignItems={"center"}
//                 md={12}
//                 xs={12}
//                 lg={12}
//             >
//                 <label className="otpSubTitle">
//                     Enter Your Phone Number And We Will Send You A (OTP) To Verify Your
//                     Identity To Reset Your Password.
//                 </label>
//             </Grid>
//             <Grid
//                 display={"flex"}
//                 justifyContent={"center"}
//                 alignItems={"center"}
//                 md={12}
//                 xs={12}
//                 marginBottom={5}
//             >
//                 <label className="otpMsgSubTitle">Enter your Phone Number</label>
//             </Grid>
//             <Grid
//                 display={"flex"}
//                 justifyContent={"center"}
//                 alignItems={"center"}
//                 md={6}
//                 xs={12}
//             >
//                 <ConfigProvider
//                     locale={en}
//                     areaMapper={(area) => {
//                         return {
//                             ...area,
//                             emoji: (
//                                 <img
//                                     alt="flag"
//                                     style={{ width: 18, height: 18, verticalAlign: "sub" }}
//                                     src={getFlag(area.short)}
//                                 />
//                             ),
//                         };
//                     }}
//                 >
//                     <CountryPhoneInput
//                         style={{ marginTop: 8 }}
//                         defaultValue={{ short: "TW" }}
//                         onChange={(value) => setPhoneNo(value)}
//                     />
//                 </ConfigProvider>
//             </Grid>
//             <Grid
//                 display={"flex"}
//                 justifyContent={"center"}
//                 alignItems={"center"}
//                 md={12}
//                 xs={12}
//             >
//                 <label>{error}</label>
//             </Grid>
//             <Grid
//                 display={"flex"}
//                 justifyContent={"center"}
//                 alignItems={"center"}
//                 md={12}
//                 xs={12}
//             >
//                 <Button className="nextBtn" onClick={handelClick}>
//                     NEXT
//                 </Button>
//             </Grid>
//             <Grid
//                 display={"flex"}
//                 justifyContent={"center"}
//                 alignItems={"center"}
//                 md={12}
//                 xs={12}
//             >
//                 <Button className="backBtn" onClick={() => props.backPage()}>
//                     BACK
//                 </Button>
//             </Grid>
//         </Grid>
//     );
// };

// export const CreateNewPassword = (props) => {
//     const [values, setValues] = useState({
//         amount: "",
//         password: "",
//         email: "",
//         weight: "",
//         weightRange: "",
//         showPassword: false,
//         conPassword: "",
//         error: null,
//     });
//     const handleChange = (prop) => (event) => {
//         setValues({ ...values, [prop]: event.target.value });
//     };

//     const handleClickShowPassword = () => {
//         setValues({
//             ...values,
//             showPassword: !values.showPassword,
//         });
//     };

//     const handleMouseDownPassword = (event) => {
//         event.preventDefault();
//     };
//     const handelClick = () => {
//         if (values.password !== values.conPassword) {
//             setValues({ ...values, error: "passwords don't mach" });
//             return;
//         } else setValues({ ...values, error: null });

//         if (values.password === "" || values.conPassword === "") {
//             setValues({ ...values, error: "please, fill the required fields" });
//             return;
//         } else {
//             var re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
//             if (!re.test(values.password)) {
//                 setValues({
//                     ...values,
//                     error: "Invalid password please, check the ruls below",
//                 });
//                 return;
//             } else setValues({ ...values, error: null });
//         }

//         postService("api/users/changePassword", {
//             phoneNo: props.otpDetails.phone,
//             newPassword: values.password,
//         }).then((res) => {
//             if (!res.data.status) {
//                 setValues({
//                     ...values,
//                     error: res.data.error,
//                 });
//                 return;
//             }
//             props.nextPage();
//         });

//         console.log(values);
//     };
//     return (
//         <Grid
//             container
//             rowSpacing={1}
//             width={400}
//             justifyContent={"center"}
//             alignItems={"center"}
//             md={12}
//         >
//             <Grid
//                 display={"flex"}
//                 justifyContent={"center"}
//                 alignItems={"center"}
//                 md={12}
//                 xs={12}
//             // height={200}
//             >
//                 <img src={Logo} alt="Logo" />
//             </Grid>
//             <Grid
//                 display={"flex"}
//                 justifyContent={"center"}
//                 alignItems={"center"}
//                 md={12}
//                 xs={12}
//             >
//                 <label className="otpTitle">Create A New Password</label>
//             </Grid>
//             <Grid
//                 display={"flex"}
//                 justifyContent={"center"}
//                 alignItems={"center"}
//                 md={12}
//                 xs={12}
//                 lg={12}
//             >
//                 <label className="otpSubTitle">
//                     In Order To Protect Your Account, Make Sure You Password:
//                 </label>
//             </Grid>
//             <Grid
//                 display={"flex"}
//                 justifyContent={"center"}
//                 alignItems={"end"}
//                 md={11}
//             >
//                 <InputLabel htmlFor="passwordInput" className="inputLabels">
//                     New Password
//                 </InputLabel>
//             </Grid>
//             <Grid
//                 display={"flex"}
//                 justifyContent={"center"}
//                 alignItems={"center"}
//                 md={6}
//                 xs={12}
//             >
//                 <OutlinedInput
//                     id="passwordInput"
//                     required
//                     type={values.showPassword ? "text" : "password"}
//                     value={values.password}
//                     className="textFeild"
//                     onChange={handleChange("password")}
//                     endAdornment={
//                         <InputAdornment position="end">
//                             <IconButton
//                                 aria-label="toggle password visibility"
//                                 onClick={handleClickShowPassword}
//                                 onMouseDown={handleMouseDownPassword}
//                                 edge="end"
//                             >
//                                 {values.showPassword ? <VisibilityOff /> : <Visibility />}
//                             </IconButton>
//                         </InputAdornment>
//                     }
//                 />
//             </Grid>

//             <Grid
//                 display={"flex"}
//                 justifyContent={"center"}
//                 alignItems={"end"}
//                 md={11}
//             >
//                 <InputLabel htmlFor="conPasswordInput" className="inputLabels">
//                     Confirm Password
//                 </InputLabel>
//             </Grid>
//             <Grid
//                 display={"flex"}
//                 justifyContent={"center"}
//                 alignItems={"center"}
//                 md={6}
//                 xs={12}
//             >
//                 <OutlinedInput
//                     id="conPasswordInput"
//                     required
//                     type={values.showPassword ? "text" : "password"}
//                     value={values.conPassword}
//                     className="textFeild"
//                     onChange={handleChange("conPassword")}
//                     endAdornment={
//                         <InputAdornment position="end">
//                             <IconButton
//                                 aria-label="toggle password visibility"
//                                 onClick={handleClickShowPassword}
//                                 onMouseDown={handleMouseDownPassword}
//                                 edge="end"
//                             >
//                                 {values.showPassword ? <VisibilityOff /> : <Visibility />}
//                             </IconButton>
//                         </InputAdornment>
//                     }
//                 />
//             </Grid>

//             <Grid
//                 display={"flex"}
//                 justifyContent={"center"}
//                 alignItems={"center"}
//                 md={12}
//                 xs={12}
//             >
//                 <label className="errMsg">{values.error}</label>
//             </Grid>
//             <Grid
//                 display={"flex"}
//                 justifyContent={"center"}
//                 alignItems={"center"}
//                 md={12}
//                 xs={12}
//             >
//                 <Button className="nextBtn" onClick={handelClick}>
//                     CONTINUE
//                 </Button>
//             </Grid>
//             <Grid
//                 display={"flex"}
//                 justifyContent={"center"}
//                 alignItems={"center"}
//                 md={12}
//                 xs={12}
//             >
//                 <label>
//                     Must Be 8 Characters In Length With 1 Uppercase And Lowercase Letter,
//                     1 Number And 1 Special Character
//                 </label>
//             </Grid>
//         </Grid>
//     );
// };

// export const SucessRestPassword = (props) => {
//     useEffect(() => {
//         setTimeout(() => {
//             props.resetPage();
//         }, 2200);
//     }, []);

//     return (
//         <Grid
//             container
//             rowSpacing={1}
//             width={400}
//             justifyContent={"center"}
//             alignItems={"center"}
//             md={12}
//         >
//             <Grid
//                 display={"flex"}
//                 justifyContent={"center"}
//                 alignItems={"center"}
//                 md={12}
//                 xs={12}
//             // height={200}
//             >
//                 <img src={Logo} alt="Logo" />
//             </Grid>
//             <Grid
//                 display={"flex"}
//                 justifyContent={"center"}
//                 alignItems={"center"}
//                 md={12}
//                 xs={12}
//             >
//                 <label className="otpTitle">Password Reset</label>
//             </Grid>
//             <Grid
//                 display={"flex"}
//                 justifyContent={"center"}
//                 alignItems={"center"}
//                 md={12}
//                 xs={12}
//                 lg={12}
//             >
//                 <img src={successImage} width={300} height={300} />
//             </Grid>
//         </Grid>
//     );
// };
