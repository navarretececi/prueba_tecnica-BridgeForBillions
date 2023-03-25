import "./BtnSearch.css";
import Btn from "./Btn";
import React, { useState } from "react";
import { AppContext } from "../../resultContext";
import { search } from "../../services";

const BtnSearch = () => {
  const [input, setInput] = useState("");
  const { setResult } = React.useContext(AppContext);

  const handlerInput = (e) => {
    setInput(e.target.value);
  };
  console.log("input: ", input);

  const handlerSearch = (input) => {
    search(input)
      .then((data) => {
        console.log("data", data);
        setResult(data);
        setInput("");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container_search">
      <input
        id="searchbox"
        autoComplete="off"
        value={input}
        onChange={handlerInput}
        type="search"
        placeholder="Search"
      />
      <Btn btn_text="Search" onClick={handlerSearch} />
    </div>
  );
};

export default BtnSearch;
