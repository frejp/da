import styled from 'styled-components';

export const PrimaryButton = styled.button`
  background-color: white;
  text-align: center;
  font-family: SimplonNorm-Bold, Helvetica, sans-serif;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: 0.125em;
  text-transform: uppercase;
  font-weight: normal;
  -webkit-font-smoothing: antialiased;
  color: black;
  width: 100%;
  outline: none;
  text-decoration: none;
  border-width: 1px;
  border-style: solid;
  border-color: black;
  padding: 15px 0px;
  margin: 15px;
  margin-bottom: 5px;
  width: 320px;
  :hover {
    background-color: black;
    cursor: pointer;
    color: white;
  }
`;
