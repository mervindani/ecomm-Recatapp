import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  cursor: pointer;

  @media screen and (max-width: 800px) {
    padding: 10px;
    height: 60px;
    margin-bottom: 20px;
  }
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
  @media screen and (max-width: 800px) {
    padding: 0px;
    width: 50px;
  }
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 22px;
  @media screen and (max-width: 800px) {
    width: 80%;
    font-size: 15px;
  }
`;

export const LinkOption = styled(Link)`
  padding: 10px 15px;
`;
