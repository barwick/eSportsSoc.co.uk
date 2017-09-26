import { css } from 'styled-components';

export const media = {
  mobile: (...args) => css`@media (max-width: 700px) {${css(...args)};}`,
};
