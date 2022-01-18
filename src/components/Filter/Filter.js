import React from "react";
import PropTypes from "prop-types";
import s from "./Filter.module.css";

export default function Filter({ value, onChange }) {
  return (
    <label htmlFor="search">
      <input
        className={s.filter}
        id="search"
        placeholder="search contact"
        type="text"
        value={value}
        onChange={onChange}
      />
    </label>
  );
}

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
