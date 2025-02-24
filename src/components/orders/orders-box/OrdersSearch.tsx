import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { InputBase, styled } from "@mui/material";
import { useState } from "react";

interface Props {
  onSearch: (value: string) => void;
}

const StyledSearch = styled("form")({
  display: "flex",
  backgroundColor: "#efefef",
  borderRadius: "0.6rem",
  paddingLeft: "14px",
  maxHeight: "2rem",
});

export default function OrdersSerach({ onSearch }: Props) {
  const [searchField, setSearchField] = useState<string>("");

  const handleSearch = () => {
    const trimmedSearch = searchField.trim();
    onSearch(trimmedSearch.length > 0 ? trimmedSearch : "");
  };

  return (
    <StyledSearch
      onSubmit={(event) => {
        event.preventDefault();
        handleSearch();
      }}
    >
      <InputBase
        size={"small"}
        placeholder="Search..."
        onChange={(event) => setSearchField(event.target.value)}
        sx={{ flexGrow: 1, paddingTop: "3.2px" }}
      />
      <IconButton
        onClick={handleSearch}
        sx={{ padding: "0", paddingRight: "0.2rem" }}
      >
        <SearchIcon />
      </IconButton>
    </StyledSearch>
  );
}
