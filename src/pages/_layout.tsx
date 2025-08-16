import "../styles.css";

import type { ReactNode } from "react";

type RootLayoutProps = { children: ReactNode };

export default async function RootLayout({ children }: RootLayoutProps) {
  const data = await getData();

  return (
    <>
      <meta name="description" content={data.description} />
      <link rel="icon" type="image/png" href="https://tylur.dev/favicon.ico" />
      <link rel="stylesheet" href="https://tylur.dev/style.css" />
      <main className="m-6 flex items-center *:min-h-64 *:min-w-64 lg:m-0 lg:min-h-svh lg:justify-center">
        {children}
      </main>
    </>
  );
}

const getData = async () => {
  const data = {
    description: "Chalker 8)",
  };

  return data;
};

export const getConfig = async () => {
  return {
    render: "static",
  } as const;
};
