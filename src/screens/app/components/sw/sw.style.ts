import styled from 'styled-components';

import { colors } from 'src/utils';

export const Wrapper = styled.div`
  background-color: rgba(33, 33, 33, 0.9);
  border-radius: 3px;
  color: #fff;
  font-size: 13px;
  left: 50%;
  min-width: 296px;
  padding: 7.5px;
  position: fixed;
  text-align: center;
  -webkit-transform: translate(-50%, 0);
  -ms-transform: translate(-50%, 0);
  transform: translate(-50%, 0);
  z-index: 99;
  display: flex;
  align-items: center;
  bottom: 10px;
  justify-content: center;
  z-index: 9999;
`;

export const Button = styled.button`
  background-color: #fff;
  color: ${colors.gray[900]};
  border-radius: 3px;
  border: none;
  cursor: pointer;
  margin-left: 5px;
  padding: 5px 7.5px;
  -moz-transition: all 0.2s ease;
  -webkit-transition: all 0.2s ease;
  transition: all 0.2s ease;
  &:hover {
    background-color: ${colors.theme.primary[500]};
    color: #fff;
  }
`;
