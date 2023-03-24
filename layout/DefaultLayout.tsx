import React, { FC } from "react";
import { Exo_2 } from "next/font/google";

const inter = Exo_2({ subsets: ["latin"] });

type Props = {
  children: JSX.Element;
};

const DefaultLayout: FC<Props> = ({ children }) => {
  return (
    <>
      <div className={inter.className}>{children}</div>
    </>
  );
};

export default DefaultLayout;
