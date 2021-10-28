import styled from "styled-components";

export const Content = styled.div`
  main {
    /* max-width: 560px; */
    margin: auto;
    padding: 3rem 5rem;
    color: ${({ theme }) => theme.colors.secondary.main.color};
  }

  .title {
    font-weight: 800;
    font-size: 1.2rem;
    margin-bottom: 10px;
  }

  .agendamento-form {
    max-width: 330px;
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
`;
