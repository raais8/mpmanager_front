import { Box } from "@mui/material";
import { Marketplace } from "../../../../types/marketplace/marketplaceTypes";
import TabsHeader from "./TabsHeader";
import TabPanel from "./TabPanel";
import { useState } from "react";

interface Props {
  marketplaces: Marketplace[];
}

export default function MarketplaceProductTabs({ marketplaces }: Props) {
  const [selectedMarketplace, setSelectedMarketplace] = useState<number>(
    marketplaces[0].id
  );

  return (
    <Box>
      <TabsHeader
        marketplaces={marketplaces}
        selectedMarketplace={selectedMarketplace}
        setSelectedMarketplace={(value) => setSelectedMarketplace(value)}
      />
      <TabPanel
        marketplace={marketplaces.find(
          (marketplace) => marketplace.id === selectedMarketplace
        )}
      />
    </Box>
  );
}
