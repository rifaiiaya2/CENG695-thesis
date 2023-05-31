import React, { useEffect } from "react";
import "./../Search/Search.css";
import SearchIcon from "@mui/icons-material/Search";
import AOS from "aos";

function Search(props) {
  const { placeholder, data, searched, page } = props;

  const onChange = (e) => {
    if (page === "categories") {
      const newData = data.filter(
        (data) =>
          data.name.includes(e.target.value)); 
      searched(newData);
    }
    if (page === "items") {
      const newData = data.filter(
        (data) =>
          data.name.includes(e.target.value)); 
      searched(newData);
    }
  };

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="main">
      <div className="form-group has-search">
        <span className="form-control-feedback">
          <SearchIcon />
        </span>
        <input
          type="text"
          className="form-control"
          placeholder={placeholder}
          onChange={onChange}
        />
      </div>
    </div>
  );
}

export default Search;
