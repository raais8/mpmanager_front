import { Grid2, IconButton, Stack } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import ArrowBackIosIconNew from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useState } from "react";

interface Props {
  images: string[];
}

export default function ImageCarousel({ images }: Props) {
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <Stack sx={{ overflow: "hidden" }}>
      <img
        src={images[currentImage]}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          borderRadius: "0.5rem",
          display: "block",
        }}
      />
      <Grid2
        container
        spacing={2}
        alignItems="center"
        sx={{ marginTop: "0.5rem", justifyContent: "center" }}
      >
        <Grid2
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <IconButton
            disableRipple
            onClick={() =>
              setCurrentImage((prevImage) =>
                prevImage === 0 ? images.length - 1 : prevImage - 1
              )
            }
          >
            <ArrowBackIosIconNew sx={{ height: "1rem" }} />
          </IconButton>
        </Grid2>
        <Grid2
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          {images.map((_, index) => (
            <IconButton
              key={index}
              onClick={() => setCurrentImage(index)}
              disableRipple
              sx={{ padding: 0 }}
            >
              <CircleIcon
                sx={{
                  height: "0.8rem",
                  color: index === currentImage ? "black" : "grey",
                }}
              />
            </IconButton>
          ))}
        </Grid2>
        <Grid2
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <IconButton
            disableRipple
            onClick={() =>
              setCurrentImage((prevImage) =>
                prevImage === images.length - 1 ? 0 : prevImage + 1
              )
            }
          >
            <ArrowForwardIosIcon sx={{ height: "1rem" }} />
          </IconButton>
        </Grid2>
      </Grid2>
    </Stack>
  );
}
