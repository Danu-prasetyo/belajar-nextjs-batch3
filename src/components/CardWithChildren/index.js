import React from "react";

/** props children :
 * properti yang dipake untuk ngirim komponen anak(children) ke dalam komponen induk(parent)
 * contoh ini Card adalah komponen parent sebagai wrapper
 * children adalah komponen yang ada di dalam komponen parent <Card>{komponen children}</Card> */
const Card = ({ children, cardClassname }) => {
  return <div className={`bg-white rounded-lg shadow w-[300px] ${cardClassname}`}>{children}</div>;
};

export default Card;
