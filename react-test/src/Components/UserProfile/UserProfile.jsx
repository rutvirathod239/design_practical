
import { useState } from "react";
import Typography from "@mui/material/Typography";
import "./userprofile.css";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";

import ProfilePhoto from "../../assets/images/Profileimg.png"
import Box from "@mui/material/Box";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { FormLabel, Grid, List, ListItem, ListItemText, TextField ,Button } from "@mui/material";


const UserProfile = () => {
    
    const [updateProfilePhoto, setUpdateProfilePhoto] = useState(false);

    const handleProfilePhotoSetting = () => {
        setUpdateProfilePhoto(!updateProfilePhoto);
    }
    return (<>
        {/* <div style={{padding:"20px"}}> */}
        
            <Box className='profilebox' px={4} py={3} sx={{ borderRadius: "6px" }}>
                <Grid className='Profile-photo-main'>
                    <Grid>
                        <div role='presentation' className={updateProfilePhoto ? "Profile-photo add-border" : "Profile-photo"} onKeyDown={handleProfilePhotoSetting} onClick={handleProfilePhotoSetting}>
                            <img src={ProfilePhoto} style={{ display: "block" }} alt="Profile-img" />
                            <div className={"update"} >{!updateProfilePhoto ?
                                 <CameraAltOutlinedIcon style={{ fontSize: "18px", color: "gray", marginTop: "4px" }} /> : 
                                 <CameraAltOutlinedIcon style={{ fontSize: "18px", color: "#F8991F", marginTop: "4px" }} />}</div>
                            {updateProfilePhoto &&
                                <div className="updateselected">
                                    <List style={{ backgroundColor: "#232E3E", padding: "0px", borderRadius: "8px", color: "white", width: "100%", zIndex: "21" }}>
                                        <ListItem style={{ padding: "0" }} onClick={handleProfilePhotoSetting}>
                                            <ListItemText className={"profilemenuitems"} >Upload Now</ListItemText>
                                        </ListItem>
                                        <ListItem style={{ padding: "0" }} onClick={handleProfilePhotoSetting}>
                                            <ListItemText className={"profilemenuitems"}  >Remove</ListItemText>
                                        </ListItem>
                                    </List>
                                </div>}
                        </div>
                    </Grid>
                    <Grid className='profilename'>
                        <Grid className='profilename-location'>
                            <Typography variant="h6" >John Smith</Typography>
                            <Typography variant="caption" display="block"><LocationOnIcon style={{ fontSize: "15px" }} />Main St. Farmington, CA 123</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <div className="divider" />
                <Grid className='profileinputfields'>
                    <Grid className="input-1">
                        <Grid className="input-line">
                            <Grid className="input-Label"><FormLabel className="inputfullwidth" sx={{ color: "black", textAlign: "left", lineHeight: "0.9", font: "normal normal normal 14px/16px Work Sans" }}>First Name:</FormLabel></Grid>
                            <Grid className="input-field">
                                <TextField
                                    placeholder="First Name"
                                    id="firstname"
                                    defaultValue={"John"}
                                    className="form-input"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                /></Grid>
                        </Grid>
                        <Grid className="input-line">
                            <Grid className="input-Label">
                                <FormLabel className="inputfullwidth" sx={{ color: "black", textAlign: "left", lineHeight: "0.9", font: "normal normal normal 14px/16px Work Sans" }}>Last Name:</FormLabel></Grid>
                            <Grid className="input-field">
                                <TextField
                                    placeholder="Last Name"
                                    defaultValue={"Smith"}
                                    id="lastname"
                                    className="form-input"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                /></Grid>
                        </Grid>
                        <Grid className="input-line">
                            <Grid className="input-Label"><FormLabel className="inputfullwidth" sx={{ color: "black", textAlign: "left", lineHeight: "0.9", font: "normal normal normal 14px/16px Work Sans" }}>Email:</FormLabel></Grid>
                            <Grid className="input-field">
                                <TextField
                                    
                                    placeholder="Email"
                                    value={"johnsmith@yahoo.com"}
                                    id="email"
                                    className="form-input"
                                    disabled
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                /></Grid>
                        </Grid>
                    </Grid>
                    <Grid className="input-1" style={{ paddingLeft: "20px" }}>
                        <Grid className="input-line">
                            <Grid className="input-Label"><FormLabel className="inputfullwidth" sx={{ color: "black", textAlign: "left", lineHeight: "0.8", font: "normal normal normal 14px/16px Work Sans" }}>Phone:</FormLabel></Grid>
                            <Grid className="input-field">
                                <TextField
                                    placeholder="Phone"
                                    defaultValue={"+1(324)234-2345"}
                                    id="phone"
                                    className="form-input"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </Grid>
                        </Grid>
                        <Grid className="input-line">
                            <Grid className="input-Label">
                                <FormLabel className="inputfullwidth" sx={{ color: "black", textAlign: "left", lineHeight: "0.9", font: "normal normal normal 14px/16px Work Sans" }}>Graduation Year:</FormLabel></Grid>
                            <Grid className="input-field">
                                <TextField
                                    placeholder="Graduation Year"
                                    defaultValue={"1988"}
                                    id="year"
                                    className="form-input"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </Grid>
                        </Grid>
                        <Grid className="input-line media-dob-none">
                            <Grid className="input-Label"><FormLabel className="inputfullwidth" sx={{ color: "black", textAlign: "left", lineHeight: "0.9", font: "normal normal normal 14px/16px Work Sans" }}>Date of Birth:</FormLabel></Grid>
                            <Grid className="input-field">
                                <TextField
                                    placeholder="Date of Birth"
                                    defaultValue={"23/09/1960"}
                                    id="dob"
                                    className="form-input"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                /></Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid className='Profile-photo-button'>
                    <Grid className="media-767-button-none">
                        <Button variant="contained" className={"profile-button"} color={"success"}  size={"sm"} >Save Changes</Button>
                        <Button variant="contained" className={"profile-button dark"}  color={"success"}  size={"sm"} >Change Password</Button>
                        <Button variant="contained" className={"profile-button"} color={"error"}  size={"sm"} >Leave Family</Button>
                    </Grid>
                    <Grid className="media-767-button">
                        <Button variant="contained" className={"profile-button dark "} size={"sm"} > Edit </Button>
                    </Grid>
                </Grid>

            </Box>
        
        {/* </div> */}
    </>)
}
export default UserProfile