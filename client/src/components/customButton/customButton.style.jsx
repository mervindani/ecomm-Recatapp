import styled, { css } from "styled-components";

const buttonStyles = css`
  background-color: black;
  color: white;
  border: none;
  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

const invertedButtonStyle = css`
  background-color: white;
  color: black;
  border: 1px solid black;
  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;

const googleButtonStyle = css`
  background-color: rgb(17, 110, 141);
  color: white;
  &:hover {
    background-color: rgb(4, 32, 37);
    border: 1px solid rgba(0, 0, 0, 0);
  }
`;

const selectButton = (props) => {
  if (props.isGoogleSignin) {
    return googleButtonStyle;
  }
  return props.inverted ? invertedButtonStyle : buttonStyles;
};

export const CustomButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  // letter-spacing: 2px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  @media screen and (max-width: 400px) {
    font-size: 12px;
    width: auto;
  }

  text-transform: uppercase;
  font-family: inherit;
  font-weight: lighter;

  cursor: pointer;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  ${selectButton}
`;
