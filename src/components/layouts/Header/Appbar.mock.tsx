import { Navigation } from "@toolpad/core";
import { extendTheme } from "@mui/material";
import DescriptionIcon from "@mui/icons-material/Description";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SecurityIcon from "@mui/icons-material/Security";
import LocalCarWashIcon from "@mui/icons-material/LocalCarWash";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import LocalPoliceIcon from "@mui/icons-material/LocalPolice";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import PlaceIcon from "@mui/icons-material/Place";
import DownloadIcon from "@mui/icons-material/Download";

//--- Logo
export const BRANDING = {
  logo: <img src="https://mui.com/static/logo.png" alt="MUI logo" />,
  title: "e-Report",
  homeUrl: "/",
};

//-- theme dashboard
export const demoTheme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        background: {
          default: "#f5f5f5",
          paper: "#ffffff",
        },
      },
    },
    dark: {
      palette: {
        background: {
          default: "#f5f5f5",
          paper: "#ffffff",
        },
      },
    },
  },
  colorSchemeSelector: "class",
  breakpoints: {
    values: {
      xs: 0,
      sm: 670,
      md: 1240,
      lg: 1350,
      xl: 1565,
    },
  },
});

//--- Menu Sidebar
export const NAVIGATION: Navigation = [
  {
    segment: "",
    title: "ภาพรวม",
    icon: <DashboardIcon fontSize="small" />,
  },
  {
    segment: "info-point",
    title: "ข้อมูลจุดตรวจ",
    icon: <SecurityIcon fontSize="small" />,
    children: [
      {
        segment: "detail",
        title: "detail",
        icon: <DescriptionIcon fontSize="small" />,
      },
    ],
  },
  {
    segment: "info-accident",
    title: "ข้อมูลอุบัติเหตุ",
    icon: <LocalCarWashIcon fontSize="small" />,
    // children: [],
  },
  {
    segment: "accept-list",
    title: "รายการรออนุมัติ",
    icon: <PendingActionsIcon fontSize="small" />,
    // children: [],
  },
  {
    segment: "measure",
    title: "มาตรการ 365",
    icon: <LocalPoliceIcon fontSize="small" />,
    // children: [],
  },
  {
    segment: "reports",
    title: "รายงาน",
    icon: <InsertChartIcon fontSize="small" />,
  },
  {
    segment: "e-map",
    title: "e-Map",
    icon: <PlaceIcon fontSize="small" />,
  },
  {
    segment: "export",
    title: "Export",
    icon: <DownloadIcon fontSize="small" />,
  },
];
