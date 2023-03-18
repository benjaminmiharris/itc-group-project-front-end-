import React from "react";
import { css } from "@emotion/react";
import BarLoader from "react-spinners/BarLoader";

const loadingStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Loader = () => {
  return (
    <div className="sweet-loading" css={loadingStyles}>
      <BarLoader color={"#158371"} loading={true} height={4} width={150} />
    </div>
  );
};

export default Loader;
