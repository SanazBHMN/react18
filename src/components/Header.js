import React from "react";

const Header = () => {
  const getYear = () => {
    const newDate = new Date();

    return newDate.getFullYear();
  };

  return (
    <>
      <div>The date is {getYear()}</div>
    </>
  );
};

export default Header;
