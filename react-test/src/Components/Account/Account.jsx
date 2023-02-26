import { useEffect, useState } from "react";
import { Grid, Button,useMediaQuery } from "@mui/material";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import "./account.css"

const Account = () => {
    const view = useMediaQuery("(max-width:750px)");
    const [message, setMessage] = useState("Success Message Here")    
    const [isWarning, setisWarning] = useState(false)
   
    useEffect(() => {
        if (isWarning === true) {
            setMessage("Warning message Here")

        } else {
            setMessage("Success Message Here")
        }

    }, [isWarning])
    return (
        <>
            <div className="accountView">
                <span className="title">My Account</span>
                {!view && <div className={isWarning ? 'warningMessageBox' : 'successMessageBox'} onClick={() => { setisWarning(!isWarning) }}>{message}</div>}
                {!view && <Button className="viewbutton">View Button</Button>}
                {view &&
                    <Grid>
                        <div role='presentation' ><MoreHorizIcon /></div>
                        <ArrowDropUpIcon className="arrowtooltip" />

                    </Grid>}
            </div>
        </>)
}
export default Account