import React from 'react';

import '@fontsource-variable/oswald';
import '#styles/default-global-theme/default-global.scss';
import { Metadata } from 'next';

interface Props {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: 'Public Portal: Design Sistem',
  icons: ['/favicon.svg'],
};

const RootLayout = (props: Props) => {
  const { children } = props;
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
