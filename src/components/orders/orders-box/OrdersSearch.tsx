import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { InputBase, styled } from "@mui/material";

const StyledSearch = styled("div")({
  display: "flex",
  backgroundColor: "#efefef",
  borderRadius: "0.6rem",
  paddingLeft: "14px",
  maxHeight: "2rem",
});

export default function OrdersSerach() {
  return (
    <StyledSearch>
      <InputBase
        size={"small"}
        placeholder="Search..."
        sx={{ flexGrow: 1, paddingTop: "3.2px" }}
      />
      <IconButton sx={{ padding: "0", paddingRight: "0.2rem" }}>
        <SearchIcon />
      </IconButton>
    </StyledSearch>
  );
}
