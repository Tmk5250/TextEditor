import React from "react";
import { useContext } from "react";
import noteContext from "../Context/noteContext";

export default function About() {
 const a= useContext(noteContext)
  return (
    <>
      <div>hi knj s ----{a.name}+++++</div>
    </>
  );
}
