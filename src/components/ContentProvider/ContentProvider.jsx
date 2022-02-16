import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { useSelector } from "react-redux";
import { getNavigationBar } from "../../redux/selectors/selector";
import { isMobile } from "react-device-detect";
import Footer from "../Footer/Footer";
const ContentProvider = ({ children }) => {
  const NavigationBar = useSelector((state) => getNavigationBar(state));
  return (
      <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[50]
              : theme.palette.grey[900],
          flexGrow: 1,
          height: "100vh",
          overflow: "auto",
          visibility: () => (NavigationBar && isMobile ? "hidden" : "visible"),
        }}
      >
        <Toolbar />
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          {children}
        </Container>

      </Box>
  );
};
export default ContentProvider;
