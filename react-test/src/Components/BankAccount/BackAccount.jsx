
import Box from "@mui/material/Box";
import { useMediaQuery } from "@mui/material";
import Typography from "@mui/material/Typography";
import MasterCardImage from "../../assets/images/mastercard-icon.png"

import Button from "@mui/material/Button";
import "./bankaccount.css"

const BankAccount = () => {
    const queryview = useMediaQuery("(max-width:767px)");
    const carddata = [
        {
            accountnumber: "123456789123",
            expirydate: "09/27"
        },
        {
            accountnumber: "789456123789",
            expirydate: "08/25"
        },
    ];
    return (
        // <div style={{paddingLeft:"20px",height:"200px"}}>
        <Box className='bank-account' px={3} py={3} sx={{ borderRadius: "6px" }}>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
                {!queryview && <Typography variant="h6">
                    Bank Account
                </Typography>}
            </Box>
            <div className='bank-account-users'>
                {carddata.map((item, index) => {
                    return (
                        <div key={index} className={"bank-account-user-box white-background"}>
                            <Box sx={{ display: "flex", alignItems: "center", flexDirection: "row", justifyContent: "space-between", width: "100%" }}>
                                <Box sx={{ display: "flex" }}>
                                    <img src={MasterCardImage} style={{height:"57px",marginTop:"30px"}} alt="MasterCardImg" />
                                    <Box sx={{ padding: "19px 22px 17px 15px", display: "flex", flexDirection: "column", gap: "1px", textAlign: "left" }}>
                                        <p className={"font-medium margin-y-0 bank-account-black-color"}>**** **** {item.accountnumber.slice(8, 12)}</p>
                                        <p className={"font-medium margin-y-0 bank-account-grey-color"}>Expires {item.expirydate}</p>
                                    </Box>
                                </Box>
                                <Button className={"green-color button appear-button"} variant="contained" color="success"  size={"sm"} > Edit</Button>

                            </Box>
                        </div>
                    )
                })}
            </div>
        </Box>
        // </div>
    )
}
export default BankAccount;