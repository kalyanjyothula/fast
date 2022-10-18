import styled from "styled-components";

export const HomepageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 2rem;
  height: 100vh;
`;

export const UserLoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
`;

export const UserLoginHeader = styled.h1`
  font-size: 1.75rem;
  text-transform: capitalize;
  margin-bottom: 0;
`;

export const UserLoginHeaderSubtitle = styled.p`
  font-size: 1rem;
  margin-top: 0;
  margin-bottom: 0.75rem;
  color: #726e6d;
  opacity: 0.6;
`;

export const UserLoginInputContainer = styled.input`
  padding: 0.25rem 0.75rem;
  margin: 0.25rem 0;
  height: 50px;
  width: auto;
  border: 1px solid #c8c6c6;
  border-radius: 5px;
  background-color: #f5f0ef;

  ::placeholder {
    font-size: 0.95rem;
    opacity: 0.6;
  }
`;

export const UserLoginButton = styled.button`
  height: 50px;
  width: 100%;
  padding: 0.25rem 0.75rem;
  margin: 0.5rem auto;
  background: #fc5737;
  border: none;
  border-radius: 5px;
  color: #fff;
  /* font-weight: 600; */
  font-size: 1rem;
  cursor: pointer;
`;

export const VerifyOTPFormContainer = styled.form`
  display: flex;
  justify-content: space-evenly;
`;

export const VerifyOTPInput = styled.input`
  display: inline-block;
  width: 45px;
  height: 45px;
  text-align: center;
  /* margin: 0.25rem; */
  border: 1px solid #c8c6c6;
  border-radius: 5px;
  background-color: #f5f0ef;
`;

export const ResendOTPContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 0.25rem;
`;

export const ResendOTPContent = styled.p`
  font-size: 1rem;
  margin-top: 0;
  margin-bottom: 0.75rem;
`;

export const ResendOTPLink = styled.span`
  color: blue;
  font-size: 1rem;
  cursor: pointer;
  font-weight: 600;
`;
