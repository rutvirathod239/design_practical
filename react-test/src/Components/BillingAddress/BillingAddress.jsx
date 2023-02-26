
import "./billingaddress.css"
import { useState } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { FormLabel, TextField, Checkbox, Select, MenuItem, Button } from "@mui/material";

const BillingAddress = () => {
    const [buttontype, setbuttontype] = useState('edit')
    return (
        <>
            {/* <div style={{ paddingTop: "20px", paddingLeft: "20px" }}> */}
                <Box className="biiling-address" px={4} py={3} sx={{ borderRadius: "6px" }}>
                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
                        <Typography variant="h6">
                            Billing Address
                        </Typography>
                        <Box className="appear-button-lg" >
                            <Button variant="contained" className={`button ${buttontype === "edit" ? "black-button" : "green-button"}`} text={`${buttontype === "edit" ? "Edit Details" : "Save"}`} size={"sm"} onClick={() => setbuttontype("save")} >
                                {`${buttontype === "edit" ? "Edit Details" : "Save"}`}
                            </Button>
                        </Box>
                    </Box>
                    <div className='billing-address-form'>
                        <FormGroup>
                            <Box sx={{ display: "flex", flexDirection: "column", rowGap: "15px" }}>
                                <FormControlLabel control={<Checkbox defaultChecked style={{ color: "#F8991F" }} />} 
                                    label={<Box sx={{ fontSize: "14px" }}>Same as Home Address</Box>} />

                                <Box sx={{ display: "flex", gap: "14px" }}>
                                    <Box sx={{ display: "flex", justifyContent: "center", flexDirection: "column", width: "50%" }}>
                                        <FormLabel sx={{ color: "#202020", fontSize: "12px", textAlign: "left" }}>First Name:</FormLabel>
                                        <TextField
                                            id="firstname"
                                            sx={{ width: "100%" }}
                                            className="form-input"
                                            value="John"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                    </Box>
                                    <Box sx={{ display: "flex", justifyContent: "center", flexDirection: "column", width: "50%" }}>
                                        <FormLabel sx={{ color: "#202020", fontSize: "12px", textAlign: "left" }}>Last Name:</FormLabel>
                                        <TextField
                                            id="lastname"
                                            className="form-input"
                                            value="Smith"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                    </Box>
                                </Box>

                                <Box sx={{ display: "flex", gap: "14px", justifyContent: "space-between" }}>
                                    <Box className={"address-field-width"} sx={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
                                        <FormLabel sx={{ color: "#202020", fontSize: "12px", textAlign: "left" }}>Address Line 1:</FormLabel>
                                        <TextField
                                            id="address1"
                                            className="form-input"
                                            value="123 fredline street"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                    </Box>
                                    <div className={"disappear-button-lg"} style={{ width: "50%" }}>
                                        <Box sx={{ display: "flex", justifyContent: "center", flexDirection: "column", width: "100%" }}>
                                            <FormLabel sx={{ color: "#202020", fontSize: "12px", textAlign: "left" }}>Address Line 2:</FormLabel>
                                            <TextField
                                                id="address2"
                                                className="form-input"
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                            />
                                        </Box>
                                    </div>

                                </Box>

                                <Box sx={{ display: "flex", justifyContent: "space-between", rowGap: "14px", flexWrap: "wrap" }} className="form-input-bottom-box">
                                    <Box sx={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
                                        <FormLabel sx={{ color: "#202020", fontSize: "12px", textAlign: "left" }}>Country:</FormLabel>
                                        <TextField
                                            id="country"
                                            className="form-input-disabled"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            value="US"
                                            disabled
                                        />
                                    </Box>
                                    <Box sx={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
                                        <FormLabel sx={{ color: "#202020", fontSize: "12px", textAlign: "left" }}>State/Province/Region:</FormLabel>
                                        <Select placeholder="Select" className="form-input-select">
                                            <MenuItem value={1} selected>India</MenuItem>
                                            <MenuItem value={2}>USA</MenuItem>
                                            <MenuItem value={3}>UK</MenuItem>
                                            <MenuItem value={4}>Japan</MenuItem>
                                            <MenuItem value={5}>Spain</MenuItem>
                                        </Select>
                                    </Box>

                                    <Box sx={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
                                        <FormLabel sx={{ color: "#202020", fontSize: "12px", textAlign: "left" }}>City:</FormLabel>
                                        <TextField
                                            id="city"
                                            placeholder="Enter city name"
                                            className="form-input"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                    </Box>

                                    <Box sx={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
                                        <FormLabel sx={{ color: "#202020", fontSize: "12px", textAlign: "left" }}>Zip Code:</FormLabel>
                                        <TextField
                                            id="zipcode"
                                            placeholder="Enter zip code"
                                            className="form-input"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                    </Box>

                                </Box>
                                <div className="disappear-button-lg">
                                    <Box sx={{ display: "flex", justifyContent: "end", marginTop: "40px" }}>
                                        <Button variant="contained" className={`button ${buttontype === "edit" ? "black-button" : "green-button"}`} 
                                        size={"sm"} onClick={() => setbuttontype("save")} > {`${buttontype === "edit" ? "Edit Details" : "Save"}`} </Button>
                                    </Box>
                                </div>
                            </Box>
                        </FormGroup>
                    </div>
                </Box>
            {/* </div> */}
        </>
    )
}

export default BillingAddress