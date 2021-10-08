import { Flex } from "@chakra-ui/react";
import styled from "styled-components";

// export const Container = styled.header`
//   h1 {
//     font-weight: 800;
//     font-size: 1.5rem;
//   }
//   .header-top {
//     padding: 10px 50px;
//     height: 85px;
//     display: flex;
//     align-items: center;
//   }

//   .header-bottom {
//     padding: 30px 50px;
//     height: auto;
//   }

//   .header-bottom-text {
//     margin-top: 20px;
//   }
// `;

export const FlexCustom = styled(Flex)`
  height: 100%;
`;

export const Title = styled.h1`
  font-weight: bold;
  font-size: 1.5rem;
`;
