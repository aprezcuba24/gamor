import styled from 'styled-components';

export const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const FormStyle = styled.div`
  width: 33.333333333%;
  background-color: ${({ theme }) => theme.login.backgroundColor};
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  padding: 50px;
  input {
    display: block;
    width: 100%;
    margin-bottom: 50px;
    border: 1px solid white;
    border-radius: 5px;
    height: 50px;
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export const Button = styled.button`
  width: 100%;
  border: 1px solid white;
  border-radius: 5px;
  height: 35px;
  background-color: ${({ theme }) => theme.login.buttonColor};
  border: 1px solid ${({ theme }) => theme.login.buttonColor};
  color: white;
`;

export const Error = styled.span`
  color: red;
`;
