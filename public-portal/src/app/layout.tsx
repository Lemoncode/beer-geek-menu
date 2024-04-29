import React from 'react';

interface Props {
  children: React.ReactNode;
}

const RootLayout = (props: Props) => {
  const { children } = props;
  return (
    <html lang="en">
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <title>Public Portal: Beer Geek Menu</title>
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
