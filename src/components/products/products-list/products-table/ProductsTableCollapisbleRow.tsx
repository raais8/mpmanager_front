import {
  Avatar,
  Box,
  Chip,
  Collapse,
  IconButton,
  styled,
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableRow,
} from "@mui/material";
import { Product } from "../../../../types/product/productTypes";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import { useState } from "react";
import { Marketplace } from "../../../../types/marketplace/marketplaceTypes";
import { CountryCodeAbbreviation } from "../../../../utils/formatters/orderFormatter";

interface Props {
  product: Product;
  marketplaces: Marketplace[];
}

const StyledTableCell = styled(TableCell)({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#f7f7f7",
    fontWeight: "bold",
  },
  [`&.${tableCellClasses.body}`]: {
    backgroundColor: "#ffffff",
  },
});

const StyledTableSubcell = styled(TableCell)({
  backgroundColor: "#ffffff",
  borderBottom: "none",
});

export default function ProductsTableCollapsibleRow({
  product,
  marketplaces,
}: Props) {
  const [collapsed, setCollapsed] = useState(true);

  const renderParentMarketplaces = () => {
    let parentMarketplaces: number[] = [];
    let chips: JSX.Element[] = [];

    product.children.map((child) => {
      child.marketplaces.map((marketplace) => {
        if (!parentMarketplaces.includes(marketplace.id)) {
          parentMarketplaces.push(marketplace.id);
          const marketplaceData = marketplaces.find(
            (mp) => mp.id === marketplace.id
          );
          if (marketplaceData) {
            chips.push(
              <Chip
                key={marketplace.id}
                size="small"
                label={`${marketplaceData.name} ${CountryCodeAbbreviation[marketplaceData.country].toUpperCase()}`}
                avatar={<Avatar src={marketplaceData.logo_url} />}
                sx={{ backgroundColor: `${marketplaceData.color}` }}
              />
            );
          }
        }
      });
    });

    return chips;
  };

  return (
    <>
      <TableRow>
        <StyledTableCell>
          <IconButton size="small" onClick={() => setCollapsed(!collapsed)}>
            {collapsed ? <KeyboardArrowDown /> : <KeyboardArrowUp />}
          </IconButton>
        </StyledTableCell>
        <StyledTableCell>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <img src={product.image} height="60px" />
          </Box>
        </StyledTableCell>
        <StyledTableCell>{product.sku}</StyledTableCell>
        <StyledTableCell>{product.name}</StyledTableCell>
        <StyledTableCell>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
            {renderParentMarketplaces()}
          </Box>
        </StyledTableCell>
      </TableRow>
      <TableRow>
        <StyledTableCell colSpan={5} sx={{ padding: 0 }}>
          <Collapse in={!collapsed} timeout="auto" unmountOnExit>
            <Box>
              <Table size="small">
                <TableBody>
                  {product.children.map((child) => (
                    <TableRow key={child.id}>
                      <StyledTableSubcell width="5%"></StyledTableSubcell>
                      <StyledTableSubcell width="5%">
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            overflow: "hidden",
                            height: "60px",
                            width: "60px",
                          }}
                        >
                          <img
                            src={child.image}
                            width="100%"
                            height="100%"
                            style={{ objectFit: "cover" }}
                          />
                        </Box>
                      </StyledTableSubcell>
                      <StyledTableSubcell width="10%">
                        {child.sku}
                      </StyledTableSubcell>
                      <StyledTableSubcell width="40%">
                        {child.name}
                      </StyledTableSubcell>
                      <StyledTableSubcell width="40%">
                        <Box
                          sx={{
                            display: "flex",
                            flexWrap: "wrap",
                            gap: "0.5rem",
                          }}
                        >
                          {child.marketplaces.map((marketplace) => {
                            const mp = marketplaces.find(
                              (m) => m.id === marketplace.id
                            );
                            return mp ? (
                              <Chip
                                key={mp.id}
                                size="small"
                                label={`${mp.name} ${CountryCodeAbbreviation[mp.country].toUpperCase()}`}
                                avatar={<Avatar src={mp.logo_url} />}
                                sx={{ backgroundColor: `${mp.color}` }}
                              />
                            ) : null;
                          })}
                        </Box>
                      </StyledTableSubcell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </StyledTableCell>
      </TableRow>
    </>
  );
}
