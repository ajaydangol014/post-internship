import React from "react";

interface IHeader {
  title: string;
  subtitle?: string;
}

const Header = (props: IHeader) => {
  const { title, subtitle } = props;

  return (
    <div>
      {title}
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
};

export default Header;
