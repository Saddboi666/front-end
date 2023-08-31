
import HomeIcon from "@mui/icons-material/Home";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
// import BarChartIcon from "@mui/icons-material/BarChart";
// import SettingsIcon from "@mui/icons-material/Settings";
// import PersonAddIcon from '@mui/icons-material/PersonAdd';
// import { CalendarMonth } from "@mui/icons-material";
// import { AddLocation } from "@mui/icons-material";
// import { AccountCircle } from "@mui/icons-material";
import { Person3 } from "@mui/icons-material";
export const sideBarData = [
    {
        id: 0,
        icon: <HomeIcon />,
        text: 'Dashboard',
        link: '/',
    },
    {
        id: 1,
        icon: <TravelExploreIcon />,
        text: 'Reservations',
        link: 'reservations',
    },
    {
        id: 2,
        icon: <Person3 />,
        text: 'Staff',
        link: 'staff',
    }
]