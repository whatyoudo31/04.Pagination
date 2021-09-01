import React from "react";

const BookMark = ({ status, ...rest }) => {
  console.log(status);
  let fill = "";
  if (status === "true") fill = "-fill";
  if (status === "false") fill = "";

  return <i className={"bi bi-suit-heart" + fill}></i>;
};

export default BookMark;
