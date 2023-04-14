import React, { FC } from "react";

type Props = {
  title: string;
};

const HeaderTitle: FC<Props> = ({ title }) => {
  return (
    <h3 className="absolute top-4 text-primary-1 uppercase text-xl md:font-extralight md:opacity-50 md:ml-5 md:top-20 md:text-2xl md:tracking-[20px]">
      {title}
    </h3>
  );
};

export default HeaderTitle;
