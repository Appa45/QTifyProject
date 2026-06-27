import React from "react";
import styles from "./Search.module.css";
import SearchIcon from "../../assets/search-icon.svg";
import useAutocomplete from "@mui/base/useAutocomplete";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";

const Listbox = styled("ul")({
  width: "100%",
  margin: 0,
  padding: 0,
  position: "absolute",
  borderRadius: "0px 0px 10px 10px",
  border: "1px solid #34C94B",
  top: 60,
  maxHeight: "500px",
  zIndex: 10,
  overflowY: "auto",
  left: 0,
  right: 0,
  listStyle: "none",
  backgroundColor: "#121212",
});

function Search({ searchData = [], placeholder = "Search a song of your choice" }) {
  const navigate = useNavigate();

  const {
    getRootProps,
    getInputProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
    value,
  } = useAutocomplete({
    id: "search-autocomplete",
    options: searchData,
    getOptionLabel: (option) => option?.title || "",
  });

  const onSubmit = (e) => {
    e.preventDefault();

    if (value?.slug) {
      navigate(`/album/${value.slug}`);
    }
  };

  return (
    <div style={{ position: "relative" }}>
      <form className={styles.wrapper} onSubmit={onSubmit}>
        <div {...getRootProps()}>
          <input
            className={styles.search}
            placeholder={placeholder}
            {...getInputProps()}
          />
        </div>

        <button className={styles.searchButton} type="submit">
          <img src={SearchIcon} alt="search" />
        </button>
      </form>

      {groupedOptions.length > 0 && (
        <Listbox {...getListboxProps()}>
          {groupedOptions.map((option, index) => (
            <li
              key={option.id}
              {...getOptionProps({ option, index })}
              className={styles.listElement}
            >
              <div>
                <p className={styles.albumTitle}>{option.title}</p>
              </div>
            </li>
          ))}
        </Listbox>
      )}
    </div>
  );
}

export default Search;