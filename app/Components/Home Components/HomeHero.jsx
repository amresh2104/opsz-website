import { Box, Typography, Button } from "@mui/material";
import React from "react";

const HomeHero = () => {
  return (
    <main
      style={{
        background: "linear-gradient(to right, #2D0052, #7A1FA2, #1A0033)",
        color: "#EFEFEF",
        position: "relative", 
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "2rem",
          position: "relative",
        }}
      >
        <div
          style={{
            background:
              "radial-gradient(circle, rgba(255,255,255,0.3) 10%, rgba(64,0,128,1) 70%, black 100%)",
            height: "500px",
            width: "60%",
            position: "absolute",
            top: "2%", 
            left: "0%",
            zIndex: 0,
            borderRadius: "50%",
            filter: "blur(50px)",
          }}
        ></div>
        <Box
          sx={{
            position: "relative",
            zIndex: 2, 
            width: "auto",
            height: "auto",
            img: {
              width: "100%",
              maxWidth: "700px",
              marginTop: "50px",
              "@media (max-width: 1200px)": { maxWidth: "600px" },
              "@media (max-width: 900px)": { maxWidth: "500px" },
              "@media (max-width: 600px)": { maxWidth: "400px" },
            },
          }}
        >
          <img
            src="/HeroLogo.svg"
            alt="Hero Logo"
            style={{
              width: "100%",
              display: "block",
              borderRadius: "12px",
            }}
          />
        </Box>
        <Box
          sx={{
            marginTop: "2rem",
            textAlign: "left",
            maxWidth: "700px",
            padding: "1.5rem",
            position: "relative",
            zIndex: 2,
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              color: "#EFEFEF",
              fontSize: { xs: "2.5rem", sm: "3.5rem" },
            }}
          >
            A FORCE{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #FFFFFF, #805AD5)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              MULTIPLIER
            </span>
            <br />
            <Typography
              variant="h3"
              sx={{
                fontWeight: "bold",
                color: "#EFEFEF",
                fontSize: { xs: "4rem", sm: "5rem" },
              }}
            >
              FOR <span style={{ color: "#3B82F6" }}>IT</span>{" "}
              <span style={{ color: "#9B4DFF" }}>TEAMS</span>
            </Typography>
          </Typography>

          <Typography
            sx={{
              color: "#D3D3D3",
              mt: 2,
              fontSize: { xs: "0.8rem", sm: "1.1rem" },
              maxWidth: "500px",
            }}
          >
            OpsZ revolutionizes IT Management with intelligent agents that
            streamline operations and enhance efficiency. Experience a solution
            designed for today's dynamic environments.
          </Typography>

          <Button
            variant="contained"
            sx={{
              background: "linear-gradient(to right, #6D28D9, #3B0A45)",
              color: "white",
              fontWeight: 550,
              borderRadius: "12px",
              padding: "0.5rem 2rem",
              textTransform: "none",
              mt: 3,
            }}
          >
            SCHEDULE A DEMO
          </Button>
        </Box>
      </Box>
    </main>
  );
};

export default HomeHero;
