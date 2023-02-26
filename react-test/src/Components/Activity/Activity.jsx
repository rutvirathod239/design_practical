import "./activity.css"
import Box from "@mui/material/Box";
import { useMediaQuery } from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import UserIcon from "../../assets/images/users-icon.svg"
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
const Activity = () => {
    const view1 = useMediaQuery("(max-width:767px)");
    const activityarray = [
        {
            name: "Leslie Alexander updated her",
            type: "Account Type",
            time: "5 October 11:46 AM"
        },
        {
            name: "John Smith removed Mark Fleix from",
            type: "Family member",
            time: "5 October 10:01 AM"
        },
        {
            name: "Leslie Alexander updated her",
            type: "Account Type",
            time: "5 October 11:46 AM"
        },
        {
            name: "John Smith removed Mark Fleix from",
            type: "Family member",
            time: "4 October 11:00 AM"
        },
        {
            name: "Leslie Alexander updated her",
            type: "Account Type",
            time: "3 October 2:45 PM"
        },
        {
            name: "John Smith removed Mark Fleix from",
            type: "Family member",
            time: "3 October 2:45 PM"
        },
        {
            name: "Leslie Alexander updated her",
            type: "Account Type",
            time: "3 October 2:45 PM"
        },

    ];
    return (
        <>
            <Box className="activities" px={3} py={3} sx={{ borderRadius: "6px" }}>
                {!view1 && <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3 }}>
                    <Typography variant="h6">
                        Activities
                    </Typography>
                    <Button variant="contained" className={"green-color1"} color={"success"} size={"small"} >View All </Button>
                </Box>
                }
                <Timeline position="right" sx={{ p: "0px" }} className="timeline-activity">
                    {activityarray.map((item, index) => {
                        const isFirst = activityarray.length - 1 == index
                        return (
                            <TimelineItem key={index}>
                                <TimelineSeparator>                                    
                                    <TimelineDot className='setIcon' color='primary' sx={{ my: "5px" }}>
                                        <img key={index} src={UserIcon} alt="" style={{ maxWidth: "initial" }} />
                                    </TimelineDot>
                                    {!isFirst && <TimelineConnector />}
                                    
                                </TimelineSeparator>
                                <TimelineContent sx={{ py: "0px", px: 2, }}>
                                    <Typography variant="p" component="span" sx={{ fontSize: "14px" }}>
                                        {item.name}{" "}
                                        <span style={{ color: "#F8991F" }}>{item.type}</span>
                                    </Typography>
                                    <Typography sx={{ fontSize: "14px", color: "#C7C7C7" }}>{item.time}</Typography>
                                </TimelineContent>
                            </TimelineItem>
                        )
                    })}

                </Timeline>
            </Box>
        </>
    )
}
export default Activity