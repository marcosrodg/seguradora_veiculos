import logo from "../../images/freeDelivery.png";
import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  height: 94vh;
  background-image: url(${logo});
  background-size: 100% 100%;
  background-repeat: no-repeat;

`;

export const Content = styled.div`
  gap: 20px;
  display: flex;
  align-items: center;
  justify-content: 350px;
  flex-direction: column;
  width: 100%;
  box-shadow: 0 1px 2px #0003;
  background-color: white;
  max-width: 350px;
  padding: 20px;
  border-radius: 15px;
  border: 3px solid #f16e22f8;
`;

export const Label = styled.label`
  font-size: 28px;
  font-weight: 600;
  color: #fff;
`;

export const LabelSignup = styled.label`
  font-size: 16px;
  color: #676767;
`;

export const labelError = styled.label`
  font-size: 14px;
  color: red;
`;

export const Strong = styled.strong`
  cursor: pointer;

  a {
    text-decoration: none;
    color: #676767;
  }
`;
