import styled from "styled-components";

export const Content = styled.div`
  margin: 30px auto;

  .info {
    margin: 20px 0;
  }

  .info-list {
    padding: 0 3rem;
  }

  .info-list a {
    color: ${({ theme }) => theme.colors.links.main.color};
  }
`;
