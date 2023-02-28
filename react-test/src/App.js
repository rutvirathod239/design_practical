
import './App.css';
import { useState } from 'react';
import Header from './Components/Header/Header';
import { Box } from '@mui/material';
import Grid from "@mui/material/Grid";
import useMediaQuery from "@mui/material/useMediaQuery";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TabPanel from "@mui/lab/TabPanel";
import { styled } from "@mui/material/styles";
import TabContext from "@mui/lab/TabContext";
import Account from './Components/Account/Account';
import UserProfile from './Components/UserProfile/UserProfile';
import BankAccount from './Components/BankAccount/BackAccount';
import BillingAddress from './Components/BillingAddress/BillingAddress';
import Family from './Components/Family/Family';
import Activity from './Components/Activity/Activity';
import Invitations from './Components/Invitations/Invitations';
// import { makeStyles } from "@material-ui/core/style";
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles({
  tabs: {
    textTransform: "none",
   
    fontSize:"12px",

    color: "#000000",
    "&.Mui-selected": {
      color: "#F8991F",
    },
    "&.Mui-focusVisible": {
      backgroundColor: "rgba(248, 153, 31, 0.32)",
    },
    "& .MuiTabs-indicator": {
      display: "flex",
      justifyContent: "center",
      backgroundColor: "#F8991F",
    },
    "& .MuiTab-root.Mui-selected": {
      color: '#F8991F'
    }
  }
})

function App() {
  const classes = useStyles();
  const desktopview = useMediaQuery("(max-width:1024px)");
  const mobileview = useMediaQuery("(max-width:767px)");
  const [value, setValue] = useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="App">
      <Header />
      <Box>
        {mobileview ?
          <Box sx={{ width: '100%' }}>
            <Account />
            <TabContext value={value}>
            <Tabs
             scrollButtons
             centered
              value={value}
              onChange={handleChange}
              className={classes.tabs}
              sx={{borderBottom:1,borderColor:"divider",textTransform:"none",padding:"0px"}}
            >
              <Tab sx={{textTransform:"none",padding:"0px"}} value="one" label="Profile" />
              <Tab sx={{textTransform:"none",padding:"0px"}} value="two" label="Wallet" />
              <Tab sx={{textTransform:"none",padding:"0px"}} value="three" label="Activities" />
              <Tab sx={{textTransform:"none",padding:"0px"}} value="four" label="Invitations" />

            </Tabs>
            <TabPanel  value="one">
              <Family isMobile={mobileview} />
              <UserProfile />
            </TabPanel>
            <TabPanel sx={{ padding: "0px" }} value="two">
              <BankAccount />
            </TabPanel>
            <TabPanel sx={{ padding: "0px" }} value="three"><Activity /></TabPanel>
            <TabPanel sx={{ padding: "0px" }} value="four"><Invitations /></TabPanel>
            </TabContext>
          </Box>
          :
          desktopview ?
            <Grid container sx={{ padding: "20px" }} rowSpacing={{ xs: 1, sm: 2, md: 3 }} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
              <Grid item xs={7}>
                <UserProfile />
              </Grid>
              <Grid item xs={5}>
                <Family />
              </Grid>
              <Grid item xs={6}>
                <BankAccount />
              </Grid>
              <Grid item xs={6}>
                <BillingAddress />
              </Grid>
              <Grid item xs={6}>
                <Activity />
              </Grid>
              <Grid item xs={6}>
                <Invitations />
              </Grid>
            </Grid>
            :
            <>
              <Account />
              <Box display="grid" className='grid_container'>
                <Box display="grid" className='main_container' item xs={4} sm={8} md={8} gap={2}>
                  <div className='profile_container'><UserProfile /></div>
                  <div className='account_container'><BankAccount /></div>
                  <div className='billing_container'><BillingAddress /></div>
                  <div className='activities_container'>
                    <Activity />
                  </div>
                </Box>
                <Box display="grid" item xs={4} sm={8} md={8} gap={2}>
                  <Grid item xs={12} sm={12} md={12}>
                    <Family />
                  </Grid>
                  <Grid item xs={12} sm={12} md={12}>
                    <Invitations />
                  </Grid>
                </Box>
              </Box>
            </>
        }
      </Box>

    </div>
  );
}

export default App;
