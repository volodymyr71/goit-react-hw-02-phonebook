import React from "react";
import PropTypes from "prop-types";

const Filter = ({ filter, changeFilter }) => (
  <div className="Phonebook_block">
    <p>Find contacts by name</p>
    <label>
      <input type="text " value={filter} onChange={changeFilter}></input>
    </label>
  </div>
);

export default Filter;

Filter.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};
