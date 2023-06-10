import { HiSearch } from "react-icons/hi";
import { FaTimes } from "react-icons/fa";

import { useState } from "react";

export default function SearchBar(props) {
  const {onSearch} = props;

  const [isFocus, setIsFocus] = useState("");

  return (
    <div>
      <input onFocus={() => setIsFocus(true)} onBlur={() => setIsFocus(false)} type="search" />
      {isFocus ? <FaTimes/> : <HiSearch/>}
      <button onClick={onSearch}>Agregar</button>
    </div>
  );
}
