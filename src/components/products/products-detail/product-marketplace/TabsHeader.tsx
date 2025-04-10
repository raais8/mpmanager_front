import { Avatar, Tab, Tabs } from "@mui/material";
import { Marketplace } from "../../../../types/marketplace/marketplaceTypes";
import { CountryCodeAbbreviation } from "../../../../utils/formatters/orderFormatter";

interface Props {
  marketplaces: Marketplace[];
  selectedMarketplace: number;
  setSelectedMarketplace: (marketplaceId: number) => void;
}

export default function TabsHeader({
  marketplaces,
  selectedMarketplace,
  setSelectedMarketplace,
}: Props) {
  return (
    <Tabs
      value={selectedMarketplace}
      variant="scrollable"
      scrollButtons="auto"
      onChange={(_, value) => setSelectedMarketplace(value)}
      slotProps={{
        indicator: {
          sx: {
            display: "none",
          },
        },
      }}
      sx={{
        minHeight: "1rem",
      }}
    >
      {marketplaces.map((marketplace) => (
        <Tab
          key={marketplace.id}
          value={marketplace.id}
          icon={
            <Avatar
              src={marketplace.logo_url}
              sx={{ height: "1.5rem", width: "1.5rem" }}
            />
          }
          iconPosition="start"
          label={`${marketplace.name} ${CountryCodeAbbreviation[marketplace.country].toUpperCase()}`}
          sx={{
            minHeight: "1rem",
            backgroundColor:
              marketplace.id === selectedMarketplace ? "#ffffff" : "#f9f9f9",
            borderTopLeftRadius: "0.6rem",
            borderTopRightRadius: "0.6rem",
            marginRight: "0.2rem",
            fontWeight:
              marketplace.id === selectedMarketplace ? "bold" : "normal",
            "&.Mui-selected": {
              color: "black",
            },
          }}
          disableRipple={true}
        />
      ))}
    </Tabs>
  );
}
