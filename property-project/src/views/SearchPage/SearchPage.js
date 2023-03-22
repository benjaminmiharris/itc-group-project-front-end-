import React from "react";
import DropDown from "../../components/MultiSelect/DropDown";

const SearchPage = () => {
  const items = ["item 1", "item 2", "item 3"];

  return (
    <div>
      <DropDown items={items} defaultLabel={"select"} />
    </div>
  );
};

export default SearchPage;
