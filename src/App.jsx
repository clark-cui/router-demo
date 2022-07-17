import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { Link } from "react-router-dom";

import "./App.css";

export default function App() {
  return (
    <div>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <h2>a标签跳转</h2>
        <a href="/">home</a>
        <br />
        <a href="/invoices">invoices</a>
        <br />
        <a href="/expenses">expenses</a>
        <br />
        <h2>link组件跳转</h2>
        <Link to="/">home</Link> | <Link to="/invoices">Invoices</Link> |{" "}
        <Link to="/expenses">Expenses</Link>
      </nav>
    </div>
  );
}
