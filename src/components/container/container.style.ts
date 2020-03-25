import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 15px;
  width: 100%;
  @media (min-width: 576px) {
    max-width: 540px;
  }
  @media (min-width: 768px) {
    max-width: 720px;
  }
  @media (min-width: 992px) {
    max-width: 960px;
  }
  @media (min-width: 1200px) {
    max-width: 1140px;
  }
  &:before {
    content: ' ';
    display: table;
  }
  &:after {
    clear: both;
    content: ' ';
    display: table;
  }
`;

export const ContainerFluid = styled.div`
  margin: 0 auto;
  max-width: 1420px;
  padding: 0 15px;
  width: 100%;
  @media (min-width: 768px) {
    padding: 0 45px;
  }
  &:before {
    content: ' ';
    display: table;
  }
  &:after {
    clear: both;
    content: ' ';
    display: table;
  }
`;
