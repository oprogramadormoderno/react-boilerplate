import styled from 'styled-components';

import { colors } from '@utils';

export const Wrapper = styled.div`
  background-color: ${colors.red[500]};
  color: #fff;
  padding: 10px;
  position: fixed;
  text-align: center;
  top: 64px;
  width: 100%;
  z-index: 999;
`;

export const Text = styled.p`
  font-size: 14px;
  font-weight: 400;
  margin: 0;
  svg {
    width: 20px;
  }
`;
