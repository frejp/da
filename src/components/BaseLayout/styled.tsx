import styled from 'styled-components';

export const PageWrapper = styled.div`
  -webkit-box-flex: 1;
  -webkit-flex: 1 0 auto;
  -moz-box-flex: 1;
  -ms-flex: 1 0 auto;
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  margin: 10px;
  min-height: 100%;
  flex-direction: column;
`;

export const AppWrapper = styled.div`
  min-width: 100%;
  min-height: 100%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -moz-box-orient: vertical;
  -moz-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
`;
