import styled from "styled-components";

export const CategoryContainer = styled.div`
  display: grid;
  row-gap: 50px;
  column-gap: 10px;
  grid-template-columns: repeat(4, 1fr);
`;

export const CategoryTitle = styled.h2`
  font-size: 38px;
  text-align: center;
  margin-bottom: 25px;
`;
