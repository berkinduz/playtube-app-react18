import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import { logo } from "../utils/constants";
import { SearchBar } from "./";

const Navbar = () => (
  <Stack
    direction="row"
    alignItems="center"
    p={2}
    sx={{ position: "sticky", top: 0, justifyContent: "space-between" }}
  >
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="logo" height={45} />
      <Typography
        variant="h4"
        sx={{
          color: "#fff",
          ml: "20px",
          fontFamily: "fantasy",
          display: { xs: "none", md: "block" },
        }}
      >
        play<span style={{ color: "red", marginLeft: "3px" }}>Tube</span>
      </Typography>
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;
