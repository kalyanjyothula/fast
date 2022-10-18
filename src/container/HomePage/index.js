import React, { useState, useEffect } from "react";
import {
  RecaptchaVerifier,
  getAuth,
  signInWithPhoneNumber,
  onAuthStateChanged,
} from "firebase/auth";
import PropTypes from "prop-types";
import {
  HomepageContainer,
  ResendOTPContainer,
  ResendOTPContent,
  ResendOTPLink,
  UserLoginButton,
  UserLoginContainer,
  UserLoginHeader,
  UserLoginHeaderSubtitle,
  UserLoginInputContainer,
  VerifyOTPFormContainer,
  VerifyOTPInput,
} from "./elements";
import { toast } from "react-toastify";

function HomePage(props) {
  const [mobile, setMobile] = useState(null);
  const [otpScreen, setOtpScreen] = useState(true);
  const [sendCodeLoading, setSendCodeLoading] = useState(false);
  const [verifyCodeLoading, setVerifyCodeLoading] = useState(false);

  const handleInputChange = (e) => {
    // e.preventDefault();
    // console.log(e.target.value);
    const { value } = e.target;
    setMobile(value);
  };

  useEffect(() => {
    const auth = getAuth();
    window.recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
        callback: function (response) {
          console.log("Captcha Resolved");
        },
        defaultCountry: "IN",
      },
      auth
    );
  }, []);

  const handleSendCode = (e, val) => {
    e.preventDefault();
    const auth = getAuth();
    setSendCodeLoading(true);
    setVerifyCodeLoading(false);
    const pattern = new RegExp("^[0-9]{10}$");
    if (mobile && mobile.length === 10 && pattern.test(mobile)) {
      const appVerifier = window.recaptchaVerifier;

      signInWithPhoneNumber(auth, `+91${mobile}`, appVerifier)
        .then((confirmationResult) => {
          toast.success("OTP send from our service");

          if (val === 1) setOtpScreen((prev) => !prev);
          window.confirmationResult = confirmationResult;
        })
        .then(() => setSendCodeLoading(false))
        .catch((error) => {
          console.log(error.message);
          toast.error("Something Went Wrong, Try again !");
          window.recaptchaVerifier.clear();
        });
    } else {
      toast.error("Invalid Mobile Number !");
    }
  };

  const validateDigit = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    e.target.value = e.target.value.replace(/[^0-9]/g, "");
  };

  const changeTab = (val) => {
    let ele = document.getElementsByClassName("otp");
    // console.log(ele, "otp");
    if (ele[val - 1].value !== "") {
      ele[val].focus();
    } else if (ele[val - 1].value === "") {
      console.log(ele[val - 2]);
      ele[val - 2].focus();
    }
  };

  const handleVerifyCode = (e) => {
    e.preventDefault();
    let ele = document.getElementsByClassName("otp");
    // console.log(ele);
    let otp = "";
    for (let i = 0; i < 6; i++) {
      otp += ele[i].value;
    }
    // console.log(otp);
    window.confirmationResult
      .confirm(otp)
      .then((confirmationResult) => {
        toast.success("verification Successful");
        window.localStorage.setItem("fast_user", JSON.stringify(mobile));

        // onAuthStateChanged((user) => {
        //   if (user) {
        //     window.localStorage.setItem("fast_user", JSON.stringify(user));
        //     window.open("/app");
        //   }
        // });
      })
      .then(() => window.open("/app", "_self"))
      .catch((err) => toast.error(err.message));
  };

  return (
    <HomepageContainer>
      <div id="recaptcha-container"></div>
      {otpScreen ? (
        <UserLoginContainer>
          <UserLoginHeader>Enter Your Mobile Number</UserLoginHeader>
          <UserLoginHeaderSubtitle>
            We will send you the 4 digit verification code
          </UserLoginHeaderSubtitle>
          <UserLoginInputContainer
            type="text"
            name="mobile"
            placeholder="Enter Mobile Number"
            onChange={handleInputChange}
            required
          />
          <UserLoginButton type="button" onClick={(e) => handleSendCode(e, 1)}>
            {!sendCodeLoading ? "Send Code" : "Sending Code ..."}
          </UserLoginButton>
        </UserLoginContainer>
      ) : (
        <UserLoginContainer>
          <UserLoginHeader>OTP Verification</UserLoginHeader>
          <UserLoginHeaderSubtitle>
            Enter the verification code we just sent on your Mobile Number
          </UserLoginHeaderSubtitle>
          <VerifyOTPFormContainer>
            <VerifyOTPInput
              type="text"
              className="otp"
              onInput={validateDigit}
              onKeyUp={() => changeTab(1)}
              maxLength={1}
            />
            <VerifyOTPInput
              type="text"
              className="otp"
              onInput={validateDigit}
              onKeyUp={() => changeTab(2)}
              maxLength={1}
            />
            <VerifyOTPInput
              type="text"
              className="otp"
              onInput={validateDigit}
              onKeyUp={() => changeTab(3)}
              maxLength={1}
            />
            <VerifyOTPInput
              type="text"
              className="otp"
              onInput={validateDigit}
              onKeyUp={() => changeTab(4)}
              maxLength={1}
            />
            <VerifyOTPInput
              type="text"
              className="otp"
              onInput={validateDigit}
              onKeyUp={() => changeTab(5)}
              maxLength={1}
            />
            <VerifyOTPInput
              type="text"
              className="otp"
              onInput={validateDigit}
              onKeyUp={() => changeTab(6)}
              maxLength={1}
            />
          </VerifyOTPFormContainer>
          <UserLoginButton type="button" onClick={handleVerifyCode}>
            {!verifyCodeLoading ? "Verify" : "Verifying"}
          </UserLoginButton>
          <ResendOTPContainer>
            <ResendOTPContent>Didn't Received code?</ResendOTPContent>
            <ResendOTPLink onClick={(e) => handleSendCode(e, 2)}>
              &nbsp; Resend
            </ResendOTPLink>
          </ResendOTPContainer>
        </UserLoginContainer>
      )}
    </HomepageContainer>
  );
}

HomePage.propTypes = {};

export default HomePage;
