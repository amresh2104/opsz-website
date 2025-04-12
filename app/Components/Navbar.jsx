"use client";
import React, { useState, useEffect } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "../Utils/constants";
import { useRouter, usePathname } from "next/navigation";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  // Add scroll event listener to detect when user scrolls
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Initial check in case page loads scrolled
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenNavMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCloseNavMenu = (url) => {
    handleRedirect(url);
    setIsMenuOpen(false);
  };

  const handleRedirect = (url) => {
    router.push(url);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        background: scrolled
          ? "linear-gradient(to right, rgba(45, 0, 82, 0.95), rgba(122, 31, 162, 0.95), rgba(26, 0, 51, 0.95))"
          : "transparent",
        backdropFilter: scrolled ? "blur(10px)" : "none",
        color: "#EFEFEF",
        boxShadow: scrolled ? "0 4px 20px rgba(0,0,0,0.1)" : "none",
        border: "none",
        transition: "background 0.3s ease, backdropFilter 0.3s ease, boxShadow 0.3s ease",
        zIndex: 1100,
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            width: "auto",
            height: "auto",
            img: {
              width: "90px",
              "@media (max-width: 1200px)": {
                width: "80px",
              },
              "@media (max-width: 900px)": {
                width: "70px",
              },
              "@media (max-width: 600px)": {
                width: "60px",
              },
            },
          }}
          onClick={() => handleRedirect("/")}
        >
          <img src="/NavLogo.svg" alt="nav-logo" />
        </Box>

        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            gap: "1.5rem",
            fontSize: "15px",
          }}
        >
          {NavLink.map((item) => (
            <Typography
              key={item.name}
              sx={{
                color: "#EFEFEF",
                cursor: "pointer",
                transition: "color 0.3s ease",
                "&:hover": {
                  color: "#3b82f6",
                },
                position: "relative",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  bottom: -2,
                  left: 0,
                  width: pathname === item.url ? "100%" : "0%",
                  height: "2px",
                  backgroundColor: "#a855f7",
                  transition: "width 0.3s ease",
                  borderRadius: "2px",
                },
                "&:hover::after": {
                  width: "100%",
                },
                opacity: scrolled ? 1 : 0.9,
                fontWeight: pathname === item.url ? 600 : 400,
                textDecoration: pathname === item.url ? "none" : "none",
                padding: "4px 0",
              }}
              onClick={() => handleRedirect(item.url)}
            >
              {item.name}
            </Typography>
          ))}
        </Box>

        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          <Button
            variant="contained"
            sx={{
              background: "linear-gradient(to right, #a855f7, #003F68)",
              color: "white",
              fontWeight: 550,
              borderRadius: "7px",
              padding: "0.5rem 1rem",
              textTransform: "none",
              cursor: "pointer",
              boxShadow: scrolled ? "0 4px 10px rgba(0,0,0,0.2)" : "none",
              transition: "box-shadow 0.3s ease",
              "&:hover": {
                background: "linear-gradient(to right, #9747FF, #003F68)",
                boxShadow: "0 6px 15px rgba(0,0,0,0.25)",
              },
            }}
            onClick={() => handleRedirect("/chatbot")}
          >
            Schedule a Briefing
          </Button>
        </Box>

        <Box
          sx={{
            display: { xs: "flex", md: "none" },
            position: "relative",
            zIndex: 200,
          }}
        >
          <IconButton
            size="large"
            onClick={handleOpenNavMenu}
            sx={{ color: "#EFEFEF" }}
          >
            <MenuIcon />
          </IconButton>
        </Box>

        <Box
          sx={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            background: "rgba(45, 0, 82, 0.95)",
            backdropFilter: "blur(10px)",
            padding: "1.5rem",
            transform: isMenuOpen ? "translateY(0)" : "translateY(-100%)",
            opacity: isMenuOpen ? 1 : 0,
            transition: "transform 0.5s ease-in-out, opacity 0.5s ease-in-out",
            flexDirection: "column",
            zIndex: 100,
            paddingTop: "2rem",
            paddingBottom: "2rem",
            pointerEvents: isMenuOpen ? "auto" : "none",
            display: "flex",
            boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
          }}
        >
          {NavLink.map((item) => (
            <Typography
              key={item.name}
              sx={{ 
                color: "#EFEFEF", 
                cursor: "pointer",
                fontWeight: pathname === item.url ? 600 : 400,
                padding: "0.75rem 0.5rem",
                margin: "0.25rem 0",
                borderRadius: "4px",
                transition: "all 0.2s ease",
                background: pathname === item.url ? "rgba(168, 85, 247, 0.2)" : "transparent",
                borderLeft: pathname === item.url ? "3px solid #a855f7" : "3px solid transparent",
                "&:hover": {
                  background: "rgba(168, 85, 247, 0.1)",
                  paddingLeft: "0.75rem",
                },
                fontSize: "16px",
              }}
              onClick={() => handleCloseNavMenu(item.url)}
            >
              {item.name}
            </Typography>
          ))}

          <Button
            variant="contained"
            sx={{
              background: "linear-gradient(to right, #a855f7, #003F68)",
              color: "#FFFFFF",
              fontWeight: 550,
              borderRadius: "7px",
              padding: "0.75rem 1rem",
              textTransform: "none",
              marginTop: "2rem",
              cursor: "pointer",
              boxShadow: "0 4px 15px rgba(0,0,0,0.15)",
              "&:hover": {
                background: "linear-gradient(to right, #9747FF, #003F68)",
                boxShadow: "0 6px 20px rgba(0,0,0,0.2)",
              },
            }}
            onClick={() => handleCloseNavMenu("/chatbot")}
          >
            Schedule a Briefing
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
