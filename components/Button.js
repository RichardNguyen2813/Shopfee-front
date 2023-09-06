import React from "react";
import styled, {css} from "styled-components";
import {primary} from "@/lib/colors";


export const ButtonStyle = css`
  border:0;
  padding: 10px 15px;
  width: 60%;
  border-radius: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  text-decoration: none;
  font-family: 'Poppins', sans-serif;
  font-weight:500;
  justify-content: center;
  margin: auto;
   
    background-color: #FF9900;
    color: #FFFFFF;
  svg{
    height: 16px;
    margin-right: 5px;
  }
  ${props => props.block && css`
  color: #FFFFFF;
  `}
  ${props => props.white && !props.outline && css`
  background-color:#FF9900;
    color: #FFFFFF;
  `}
  ${props => props.white && props.outline && css`
  background-color:#FF9900;
    color: #FFFFFF;
    
  `}
  ${props => props.black && !props.outline && css`
  background-color:#FF9900;
     color: #FFFFFF;;
  `}
  ${props => props.black && props.outline && css`
    background-color:#FF9900;
    color: #FFFFFF;
    
  `}
  ${props => props.primary && !props.outline && css`
    background-color:#FF9900;
    width: 100%;
    color:#FFFFFF;
  `}
  ${props => props.primary && props.outline && css`
  background-color:#FF9900;
  color:#FFFFFF;
    
  `}
  ${props => props.size === 'l' && css`
    font-size:1.2rem;
    padding: 10px 20px;
    svg{
      height: 20px;
    }
  `}
`;

const StyledButton = styled.button`
  ${ButtonStyle}
`;



export default function Button({children,...rest}) {
  return (
    <StyledButton {...rest}>{children}</StyledButton>
  );
}