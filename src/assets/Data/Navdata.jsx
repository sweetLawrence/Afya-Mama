import PersonAddIcon from '@mui/icons-material/PersonAdd';
import Intake from '../../components/Dashboard/Intake';
import History from '../../components/Dashboard/History';

// export const Navdata = ["Intake","History","Vitals","Lab Results"]
export const NavIcons = [PersonAddIcon,PersonAddIcon,PersonAddIcon,PersonAddIcon]

export const Navdata = [
    { name: 'Intake', component: Intake },
    // { name: 'History', component: History },
    // { name: 'Settings', component: Vitals },
  ];
  