import styled from 'styled-components';

interface FormErrorMessageProp {
  color?: string;
  textAlign?: string;
}

export const FormErrorMessage = styled.div<FormErrorMessageProp>`
  color: ${(props) => props.color};
  text-align: ${(props) => props.textAlign};
  margin-top: 5px;
  font-family: FreightTextProBook-Italic, Georgia, sans-serif;
  font-size: 14px;
  line-height: 21px;
  -webkit-font-smoothing: antialiased;
  margin-left: 15px;
`;
