import { mainTheme } from '#core/theme/main.theme.js';
import { css } from '@emotion/css';

export const buttons = css`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-top: ${mainTheme.spacing(3.5)};
`;

export const steps = css`
  min-height: 400px;
  width: 100%;
  padding-top: ${mainTheme.spacing(3.5)};
`;

export const title = css`
  text-align: center;
`;
