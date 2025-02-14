import {
  Box,
  IconButton,
  InputBase,
  MenuItem,
  Select,
  SelectChangeEvent,
  styled,
} from "@mui/material";
import { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import { Marketplace } from "../types/marketplace";

const APP_URL = "http://127.0.0.1:8000/marketplaces/api";

const StyledSelect = styled(Select<string[]>)({
  backgroundColor: "#efefef",
  maxHeight: "2rem",
  borderRadius: "0.6rem",
  ".MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
});

const StyledSearch = styled("div")({
  backgroundColor: "#efefef",
  borderRadius: "0.6rem",
  paddingLeft: "14px",
  maxHeight: "2rem",
});

const options = ["All", "Agrijardin ES", "Amazon"];

export default function OrdersFilterRow() {
  const [marketplaces, setMarketplaces] = useState<Marketplace[]>([]);
  const [selectedSources, setSelectedSources] = useState<string[]>([
    options[0],
  ]);

  useEffect(() => {
    axios
      .get(`${APP_URL}/list-marketplace/`)
      .then((response) => {
        const marketplaces: Marketplace[] = response.data.map(
          (item: Marketplace) => ({
            id: item.id,
            name: item.name,
          })
        );
        setMarketplaces(marketplaces);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        console.log("done");
      });
  }, []);

  const handleChange = (event: SelectChangeEvent<string[]>) => {
    const values = event.target.value as string[];

    if (values[values.length - 1] === options[0] && values.length > 1) {
      setSelectedSources([options[0]]);
    } else {
      setSelectedSources(values.filter((value) => value !== options[0]));
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        padding: "0.6rem",
        justifyContent: "space-between",
      }}
    >
      <StyledSelect
        size="small"
        sx={{ width: "14rem" }}
        value={selectedSources}
        onChange={handleChange}
        multiple
      >
        {marketplaces.map((marketplace, index) => (
          <MenuItem
            key={index}
            value={marketplace.name}
            // selected={selectedSources.includes(option)}
          >
            {marketplace.name}
          </MenuItem>
        ))}
      </StyledSelect>
      <StyledSearch>
        <InputBase
          size={"small"}
          placeholder="Search..."
          sx={{ paddingTop: "3.2px" }}
        />
        <IconButton sx={{ padding: "0", paddingRight: "0.2rem" }}>
          <SearchIcon />
        </IconButton>
      </StyledSearch>
    </Box>
  );
}
