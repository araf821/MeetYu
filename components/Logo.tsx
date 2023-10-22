import { FC } from "react";

interface LogoProps {}

const Logo: FC<LogoProps> = ({}) => {
  return (
    <p className="text-2xl font-bold tracking-wider md:text-3xl">
      Meet
      <span className="text-primary">Yu</span>
    </p>
  );
};

export default Logo;
