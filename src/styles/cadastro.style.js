import styled from "styled-components";

export const Content = styled.div`
  main {
    /* max-width: 560px; */
    margin: auto;
    padding: 3rem 5rem;
    color: #345b77;
  }

  .agendamento-form {
    /* max-width: 330px; */
  }

  .agendamento-form input {
    height: 60px;
  }

  .agendamento-form > div {
    margin-bottom: 15px;
  }

  .form-button {
    background-color: #00b3f3;
    color: #fff;
    height: 60px;
    width: 100%;
  }

  .forgot-password {
    color: #007bff;
    font-weight: 500;
    font-size: 14px;
  }

  .subform {
    background-color: #f3f3f3;
    padding: 20px;
    border-radius: 5px;
  }

  .subform label {
    margin: 5px 0;
  }

  .subform-hide {
    display: none;
  }

  @keyframes fader-soon {
    0% {
      opacity: 0;
      display: none;
    }
    100% {
      opacity: 1;
      display: block;
    }
  }

  .subform-appear {
    opacity: 1;
    display: block;
    animation: fader-soon 1s;
  }
`;
