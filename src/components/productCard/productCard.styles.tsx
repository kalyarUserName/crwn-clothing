import styled from "styled-components";

import {
  InvertedButton,
  GoogleSignInButton,
  BaseButton,
} from "../button/button.styles";

export const ProductCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  img {
    width: 100%;
    height: 95%;
    object-fit: cover;
    margin-bottom: 5px;
  }

  ${BaseButton},${GoogleSignInButton}${InvertedButton} {
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 255px;
    display: none;
  }

  &:hover {
    img {
      opacity: 0.8;
    }

    ${BaseButton},${GoogleSignInButton}${InvertedButton} {
      opacity: 0.85;
      display: flex;
    }
  }
  @media screen and (max-width: 800px) {
    width: 40vw;

    ${BaseButton},${GoogleSignInButton}${InvertedButton} {
      width: 30px;
      height: 70px;
      font-size: 14px;
      paddimg-bottom: 20px;
    }

    &:hover {
      img {
        opacity: unset;
      }

      ${BaseButton},${GoogleSignInButton}${InvertedButton} {
        opacity: unset;
      }
    }
  }
`;

export const Footer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

export const Name = styled.span`
  width: 90%;
  margin-bottom: 15px;
  @media screen and (max-width: 800px) {
    width: 70%;
  }
`;

export const Price = styled.span`
  width: 20%;
  text-align: right;
`;
