import React from "react";

export default function Greeting() {
  let curDate = new Date();
  curDate = curDate.getHours();
  let greeting = "";

  if (curDate >= 1 && curDate < 12) {
    greeting = "Good Morning";
  } else if (curDate >= 12 && curDate < 16) {
    greeting = "Good Afternoon";
  } else if (curDate >= 16 && curDate < 18) {
    greeting = "Good Evening";
  } else {
    greeting = "Good Night";
  }
  return (
    <>
      <h1>{greeting}, Harsh </h1>
    </>
  );
}
