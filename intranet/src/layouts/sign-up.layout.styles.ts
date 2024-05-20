import { css } from '@emotion/css';

import { mainTheme } from '#core/theme';

export const container = css`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  min-height: 100vh;
  width: 90%;
  max-width: 380px;
  gap: ${mainTheme.spacing(2)};
`;
