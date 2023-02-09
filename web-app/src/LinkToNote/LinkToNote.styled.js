import styled from "styled-components";
import { Link as _Link } from "react-router-dom";

export const Link = styled(_Link)`
  padding: 18px 12px;
  font-weight: bold;
  font-size: 18px;
  display: flex;
  height: 80px;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: inherit;
  background-color: ${({theme}) => theme.asideBackgroundColor};


  &:hover{
    filter:brightness(1.4);
  }
`;
