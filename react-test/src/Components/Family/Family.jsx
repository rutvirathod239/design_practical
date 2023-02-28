
import "./family.css"
import Typography from "@mui/material/Typography";
import UserImage from "../../assets/images/Mask-Group-2.png"
import UserIcon from "../../assets/images/user-normal-icon.svg"
import { SearchOutlined } from "@mui/icons-material";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "&::-webkit-scrollbar": {
      width: 7,
    },
    "&::-webkit-scrollbar-track": {
      boxShadow: `inset 0 0 6px rgba(0, 0, 0, 0.3)`,
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "darkgrey",
      outline: `1px solid slategrey`,
    },
  },
}));
const Family = ({ismobileview}) =>{
    const familyarray = [
        {
          name:"John Smith",
          type:"ADMIN"
        },
        {
          name:"John Smith",
          type:"MEMBER"
        },
        {
          name:"Dianne Russell",
          type:"MEMBER"
        },
        {
          name:"Lisa Smith",
          type:"MEMBER"
        },
        {
          name:"Sean Michaletz",
          type:"MEMBER"
        },
        {
          name:"John Smith",
          type:"MEMBER"
        },
        {
          name:"John Smith",
          type:"MEMBER"
        },
    
      ];
      const classes = useStyles();
    return (
    <>
        <Box className='family' py={3} sx={{borderRadius:"6px", paddingLeft: ismobileview ? "10px" : "25px" , paddingRight: ismobileview ? "10px": "25px" }}>
        <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center", mb:2}}>
          <Typography variant="h6"> Family  </Typography>
          <Box sx={{display:"flex",alignItems:"center"}} >
            <SearchOutlined style={{marginRight:"10px",top:"5px"}} />
            <Button variant="contained" className={"green-color3 button"} color={"success"}  size={"small"}> Add New</Button>
          </Box>
        </Box>
        <div className='familyuserlist1'>
        {/* <div className={classes.root}> */}
          {familyarray.map((item, index)=>{
            return(
              <div key={index} className={`family-listbox ${item.type === "MEMBER" ? "blue-color" : "yellow-color"}`}>
                <Box sx={{display:"flex",alignItems:"center"}}>
                  <img src={UserImage} alt="UserImg"/>
                  <Typography sx={{ ml:1,fontSize:"13px",fontWeight:"400"}} >{item.name}</Typography>
                </Box>
                <Box sx={{display:"flex"}}>                  
                  <Chip label={item.type} className={item.type === 'MEMBER' ? 'blue-dark-color' : 'white-color'}  sx={{ borderRadius:"2px",backgroundColor: item.type === 'MEMBER' ? '#CAD7F5' : '#FFFFFF',maxHeight:"25px",fontSize:"10px"}} />
                  {item.type === "ADMIN" && 
                    <Typography sx={{background:"#ffffff",display:"flex",borderRadius:"2px",maxHeight:"25px"}} py={1} px={1} ml={1} >
                        <img src={UserIcon} alt="UserIcon" width="13px"/>
                    </Typography>}
                </Box>
              </div>
            )
          })}
        </div>
      </Box>
    </>)
}
export default Family