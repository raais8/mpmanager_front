import { useEffect, useState } from "react";
import { Marketplace } from "../../../types/marketplace/marketplaceTypes";
import {
  Select,
  styled,
  MenuItem,
  Checkbox,
  ListItemText,
  SelectChangeEvent,
} from "@mui/material";

const StyledSelect = styled(Select<number[]>)({
  backgroundColor: "#efefef",
  maxHeight: "2rem",
  borderRadius: "0.6rem",
  ".MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
  width: "100%",
});

interface Props {
  marketplaces: Marketplace[];
  onMarketplaceSelectionChange: (value: number[]) => void;
}

export default function MarketplaceFilter({
  marketplaces,
  onMarketplaceSelectionChange,
}: Props) {
  const [selectedMarketplaces, setSelectedMarketplaces] = useState<number[]>(
    []
  );

  useEffect(() => {
    if (marketplaces.length > 0) {
      setSelectedMarketplaces(
        marketplaces.map((marketplace) => marketplace.id)
      );
    }
  }, [marketplaces]);

  const handleChange = (event: SelectChangeEvent<number[]>) => {
    const value = event.target.value as number[];
    setSelectedMarketplaces(value);
    onMarketplaceSelectionChange(value);
  };

  return (
    <StyledSelect
      size="small"
      value={selectedMarketplaces}
      onChange={handleChange}
      renderValue={(selected) =>
        marketplaces
          .filter((marketplace) => selected.includes(marketplace.id))
          .map((marketplace) => marketplace.name)
          .join(", ")
      }
      multiple
    >
      {marketplaces.map((marketplace) => (
        <MenuItem key={marketplace.id} value={marketplace.id}>
          <Checkbox
            checked={selectedMarketplaces.includes(marketplace.id)}
            sx={{ padding: "0", marginRight: "1rem" }}
          />
          <ListItemText primary={marketplace.name} />
        </MenuItem>
      ))}
    </StyledSelect>
  );
}
