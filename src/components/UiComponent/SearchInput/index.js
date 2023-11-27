import React from "react";

import SearchWrapper from "./style";

const index = (props) => {
  const { onChange, value } = props;
  return (
    <SearchWrapper>
      <div class="search-container">
        <input
          className="search expandright"
          id="searchright"
          type="search"
          name="q"
          value={value}
          placeholder="Search"
          onChange={onChange}
        />
        <label class="searchbutton" for="searchright">
          <span class="mglass">&#9906;</span>
        </label>
      </div>
    </SearchWrapper>
  );
};

export default index;
