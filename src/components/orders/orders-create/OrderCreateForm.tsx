import { Box, Stack } from "@mui/material";
import ElementBoxTitle from "../../common/ElementBoxTitle";
import ElementBox from "../../common/ElementBox";

export default function OrderCreateForm() {
  return (
    <form>
      <Stack spacing={2}>
        <Box>
          <ElementBoxTitle title="General" />
          <ElementBox>Test</ElementBox>
        </Box>
        <Box>
          <ElementBoxTitle title="Customer" />
          <ElementBox>Test</ElementBox>
        </Box>
        <Box>
          <ElementBoxTitle title="Items" />
          <ElementBox>Test</ElementBox>
        </Box>
      </Stack>
    </form>
  );
}
