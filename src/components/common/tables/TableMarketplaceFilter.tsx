import { Marketplace } from "../../../types/marketplace/marketplaceTypes";
import {
  Select,
  styled,
  MenuItem,
  Checkbox,
  ListItemText,
  SelectChangeEvent,
  Chip,
  Box,
  Avatar,
} from "@mui/material";
import { CountryCodeAbbreviation } from "../../../utils/formatters/orderFormatter";

interface Props {
  marketplaces: Marketplace[];
  selectedMarketplaces: number[];
  onMarketplaceSelectionChange: (value: number[]) => void;
}

const StyledSelect = styled(Select<number[]>)({
  backgroundColor: "#efefef",
  borderRadius: "0.6rem",
  ".MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
  width: "100%",
});

export default function MarketplaceFilter({
  marketplaces,
  selectedMarketplaces,
  onMarketplaceSelectionChange,
}: Props) {
  const handleChange = (event: SelectChangeEvent<number[]>) => {
    const value = event.target.value as number[];
    onMarketplaceSelectionChange(value);
  };

  const renderMarketplaceChips = (
    selected: number[],
    marketplaces: Marketplace[]
  ) => {
    let chars = 0;
    let chips: JSX.Element[] = [];

    selected.some((value) => {
      const marketplace = marketplaces.find(
        (marketplace) => marketplace.id === value
      );
      if (marketplace) {
        const label = `${marketplace?.name} ${CountryCodeAbbreviation[marketplace?.country].toUpperCase()}`;
        chars += label.length;
        if (chars < 22) {
          const chip =
            marketplace.id === 0 ? (
              <Chip size="small" label="None" />
            ) : (
              <Chip
                key={marketplace.id}
                size="small"
                label={`${marketplace.name} ${CountryCodeAbbreviation[marketplace.country].toUpperCase()}`}
                avatar={<Avatar src={marketplace.logo_url} />}
                sx={{ backgroundColor: `${marketplace.color}` }}
              />
            );
          chips.push(chip);
          return false;
        } else {
          chips.push(
            <Chip
              key={value}
              size="small"
              label={`${selected.length - chips.length} more`}
            />
          );
          return true;
        }
      }
    });

    return chips;
  };

  return (
    <StyledSelect
      size="small"
      value={selectedMarketplaces}
      onChange={handleChange}
      renderValue={(selected) => (
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: "0.3rem" }}>
          {renderMarketplaceChips(selected, marketplaces)}
        </Box>
      )}
      multiple
    >
      {marketplaces.map((marketplace) => (
        <MenuItem key={marketplace.id} value={marketplace.id}>
          <Checkbox
            checked={selectedMarketplaces.includes(marketplace.id)}
            sx={{ padding: "0", marginRight: "1rem" }}
          />
          <ListItemText>
            {marketplace.id === 0 ? (
              <Chip size="small" label="None" />
            ) : (
              <Chip
                size="small"
                label={`${marketplace.name} ${CountryCodeAbbreviation[marketplace.country].toUpperCase()}`}
                avatar={<Avatar src={marketplace.logo_url} />}
                sx={{ backgroundColor: `${marketplace.color}` }}
              />
            )}
          </ListItemText>
        </MenuItem>
      ))}
    </StyledSelect>
  );
}
