import React from "react";

const DetailsLayout = ({ children, modal }) => {
  return (
    <>
      {modal}
      {children}
    </>
  );
};

export default DetailsLayout;
