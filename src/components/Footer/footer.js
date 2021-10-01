import styled from "styled-components";

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  background-color: #f0f0f0;
  max-width: 100%;
  padding: 3rem;
  color: #575757;

  h5 {
    font-weight: 700;
  }

  .footer-separator {
    background-color: #dfdfdf;
    height: 2px;
    width: 20px;
    margin: 2rem auto 4rem auto;
  }

  .footer-imgs {
    margin: auto auto 5rem auto;
    max-width: 540px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .footer-img {
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .footer-img:not(:last-child) {
    margin-right: 20px;
  }

  .footer-code {
    font-size: 13px;
  }
`;
