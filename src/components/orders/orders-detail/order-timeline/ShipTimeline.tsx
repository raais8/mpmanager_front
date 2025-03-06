import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@mui/lab";
import ElementBox from "../../../common/ElementBox";
import { styled } from "@mui/material";
import ElementBoxTitle from "../../../common/ElementBoxTitle";

const StyledTimelineOppositeContent = styled(TimelineOppositeContent)({
  minWidth: "95px",
  padding: "0",
  paddingTop: "8px",
  paddingRight: "8px",
});

const StyledTimelineContent = styled(TimelineContent)({
  minWidth: "95px",
  padding: "0",
  paddingTop: "6px",
  paddingLeft: "8px",
});

export default function ShipTimeline() {
  return (
    <>
      <ElementBoxTitle title="Shipping Timeline" />
      <ElementBox>
        <Timeline position="right" sx={{ margin: "0" }}>
          <TimelineItem>
            <StyledTimelineOppositeContent
              color="text.secondary"
              variant="body2"
            >
              04/07/2025 <br /> 9:34
            </StyledTimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="success" />
              <TimelineConnector />
            </TimelineSeparator>
            <StyledTimelineContent>Order Confirmed</StyledTimelineContent>
          </TimelineItem>
          <TimelineItem>
            <StyledTimelineOppositeContent
              color="text.secondary"
              variant="body2"
            >
              05/07/2025 <br /> 11:44
            </StyledTimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="success" />
              <TimelineConnector />
            </TimelineSeparator>
            <StyledTimelineContent>Order Prepared</StyledTimelineContent>
          </TimelineItem>
          <TimelineItem>
            <StyledTimelineOppositeContent
              color="text.secondary"
              variant="body2"
            >
              06/07/2025 <br /> 10:14
            </StyledTimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="success" />
              <TimelineConnector />
            </TimelineSeparator>
            <StyledTimelineContent>Order Dispatched</StyledTimelineContent>
          </TimelineItem>
          <TimelineItem>
            <StyledTimelineOppositeContent
              color="text.secondary"
              variant="body2"
            ></StyledTimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="secondary" />
              <TimelineConnector />
            </TimelineSeparator>
            <StyledTimelineContent>In Transit</StyledTimelineContent>
          </TimelineItem>
          <TimelineItem>
            <StyledTimelineOppositeContent
              color="text.secondary"
              variant="body2"
            ></StyledTimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
            </TimelineSeparator>
            <StyledTimelineContent>Delivered</StyledTimelineContent>
          </TimelineItem>
        </Timeline>
      </ElementBox>
    </>
  );
}
