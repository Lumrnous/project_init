import React from "react";
import { useLocation } from "react-router-dom";
export default function Register() {
  const obj = useLocation();
  console.log(obj);
  return <div>Register</div>;
}
