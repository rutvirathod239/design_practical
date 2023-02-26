
import "./invitations.css"
import { useState } from "react"
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import UserImage from "../../assets/images/Mask-Group-2.png"
import Check from "../../assets/images/Icon awesome-check.svg"
import Close from "../../assets/images/Icon material-close.svg"
import { Button } from "@mui/material";
const Invitations = () => {
    const [toggleOptions, setToggleOptions] = useState(false)
    const ChangeOption = () => {
        setToggleOptions(!toggleOptions);
    }
    const invitationarray = {
        Sent: [
            {
                name: "You",
                member: "have invited johnsmith@gmail.com to become family member."
            },
            {
                name: "You",
                member: "have invited johnsmith@gmail.com to become family member."
            }, {
                name: "You",
                member: "have invited johnsmith@gmail.com to become family member."
            }, {
                name: "You",
                member: "have invited johnsmith@gmail.com to become family member."
            }, {
                name: "You",
                member: "have invited johnsmith@gmail.com to become family member."
            }, {
                name: "You",
                member: "have invited johnsmith@gmail.com to become family member."
            }, {
                name: "You",
                member: "have invited johnsmith@gmail.com to become family member."
            }, {
                name: "You",
                member: "have invited johnsmith@gmail.com to become family member."
            }, {
                name: "You",
                member: "have invited johnsmith@gmail.com to become family member."
            }, {
                name: "You",
                member: "have invited johnsmith@gmail.com to become family member."
            }, {
                name: "You",
                member: "have invited johnsmith@gmail.com to become family member."
            },
            {
                name: "You",
                member: "have invited johnsmith@gmail.com to become family member."
            },
            {
                name: "You",
                member: "have invited johnsmith@gmail.com to become family member."
            },
            {
                name: "You",
                member: "have invited johnsmith@gmail.com to become family member."
            },
            {
                name: "You",
                member: "have invited johnsmith@gmail.com to become family member."
            },
        ],
        Received: [
            {
                name: "John Smith",
                member: "have invited you to become his family member."
            },
            {
                name: "John Smith",
                member: "have invited you to become his family member."
            },
            {
                name: "Dianne Russell",
                member: "have invited you to become his family member."
            },
            {
                name: "John Smith",
                member: "have invited you to become his family member."
            },
            {
                name: "Dianne Russell",
                member: "have invited you to become his family member."
            }
        ]
    };

    return (
        <>
            <Box className='invitation' px={4} py={4} sx={{ borderRadius: "6px" }}>
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
                    <Typography variant="h6">
                        Invitations
                    </Typography>
                    <Box sx={{ backgroundColor: "#DBDBDB", borderRadius: "70px", display: "flex" }}>
                        <div className={!toggleOptions && "arrow"}>
                            <Button variant="contained" className={!toggleOptions ? "yellow-color-btn active button" : "yellow-color-btn button"} onClick={ChangeOption}  size={"small"} >
                            {`Sent (${invitationarray?.Sent?.length})`}
                            </Button>
                        </div>
                        <div className={toggleOptions && "arrow"}>
                            <Button variant="contained"  className={toggleOptions ? "yellow-color-btn active button" : "yellow-color-btn button"} onClick={ChangeOption}  size={"small"} >
                            {`Received (${invitationarray?.Received?.length})`}
                            </Button>
                        </div>
                    </Box>
                </Box>
                <div className='familyuserlist'>
                    {(toggleOptions ? invitationarray.Received : invitationarray.Sent).map((item, index) => {
                        return (
                            <div key={index} className={"family-userlist-box blue-color"}>
                                <Box sx={{ display: "flex", alignItems: "center" }}>
                                    {item.name === "You" ? null : <img src={UserImage} alt="UserImage" />}
                                    <Typography sx={{ ml: 2, fontSize: "12px", fontWeight: "400", textAlign: "start" }} className="inner-text" ><Typography variant='string' sx={{ color: "#F8991F" }}>{item.name}</Typography>  {item.member}</Typography>
                                </Box>
                                {item.name === "You" ? null : <Box sx={{ maxWidth: "70px", minWidth: "70px", display: "flex", justifyContent: "space-between"}}>
                                    {item.name === "You" ? null : <Button variant="contained" color="success" style={{ maxWidth: '30px', maxHeight: '30px', minWidth: '30px', minHeight: '30px'}}   >
                                           { <img src={Check} alt=""/>} </Button>}
                                    {item.name === "You" ? null : <Button variant="contained" color="error"  style={{ maxWidth: '30px', maxHeight: '30px', minWidth: '30px', minHeight: '30px'}} > 
                                    <img src={Close} alt="" /></Button>}
                                </Box>}
                            </div>
                        )
                    })}
                </div>
            </Box>
        </>
    )

}
export default Invitations