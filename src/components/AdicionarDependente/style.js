import styled from "styled-components";

export const Main = styled.main`
  /* max-width: 560px; */
  margin: auto;
  padding: 0 5rem 3rem 5rem;
  color: #345b77;

  & .dependente-form {
    max-width: 330px;
  }
  & .dependente-form input {
    height: 60px;
  }
  & .dependente-form > div {
    margin-bottom: 15px;
  }
  & .form-button {
    background-color: #00b3f3;
    color: #fff;
    height: 60px;
    width: 100%;
  }
  & .forgot-password {
    color: #007bff;
    font-weight: 500;
    font-size: 14px;
  }
`;
