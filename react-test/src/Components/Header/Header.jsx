import {
  AppBar,
  Toolbar,
  Typography,
  MenuItem,
  Drawer,
  IconButton,
  Avatar,
  Menu,
  MenuList,
  Container, Button
} from "@mui/material";
import { List, ListItem, ListItemText } from "@mui/material";
import "./header.css"
import submenu from "../../assets/images/Component330.svg"
import React, { useState, useEffect } from "react";

import ProfilePhoto from "../../assets/images/Profileimg.png";
import MenuIcon from "@mui/icons-material/Menu";
import useMediaQuery from "@mui/material/useMediaQuery/useMediaQuery";
import CloseIcon from "@mui/icons-material/Close";
import UserIcon from "../../assets/images/Mask-Group-2.png"
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";

import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";


const Header = () => {
  const [menuItems, setMenuItems] = useState(false);
  const [submenuItems, setSubMenuItems] = useState(false);
  const [showDrawer, setShowDrawer] = useState(false);
  const [isDrawer, setIsDrawer] = useState(false);
  const [indexs, setIndexs] = useState(false);
  const [menudata, setMenuData] = useState();
  const [editProfilePhoto, setEditProfilePhoto] = useState(false)
  const [anchorEl, setAnchorEl] = useState(null)
  useEffect(() => {
    const windowWidth = window.innerWidth;

    if (windowWidth >= 750 && windowWidth <= 992) {
      setIsDrawer(false);
    } else if (windowWidth <= 1024) {
      setIsDrawer(true);
    } else {
      setIsDrawer(false);
    }

    window.addEventListener("resize", () => {
      const width = window.innerWidth;
      if (width >= 1024 && width <= 1024) {
        setIsDrawer(false);
      } else if (width <= 1024) {
        setIsDrawer(true);
      } else {
        setIsDrawer(false);
      }
    });
  }, []);
  const handleImage = () => {
    setEditProfilePhoto(!editProfilePhoto);
  }
  const matche1 = useMediaQuery("(max-width:749px)");
  const submenuitemlist = [{ name: "Menu 1", list: ["My Programs", "New Programs", "Program Invites", "Program Request"] },
  { name: "Menu 2" },
  { name: "Menu 3" }]
  const handleMenuData = (event, name) => {
    
    setMenuItems(!menuItems)
    setMenuData(name)
    setAnchorEl(event.currentTarget)
  }
  
  const navigationMenu = (
    submenuitemlist.map((item, index) => (
      <Typography key={index}>

        <MenuItem
          aria-owns={menuItems ? "simple-menu" : null}
          aria-haspopup="true"
          onMouseOver={(e) => { handleMenuData(e, item.name) }}
          className="textStyle">{matche1 && <img src={submenu} alt="" />}{item.name}
        </MenuItem>
        { item.list &&  
        <Menu open={item.name === menudata && menuItems}
          onClose={() => setMenuItems(false)}
          id="simple-menu"
          anchorEl={anchorEl}
          onRequestClose={() => setMenuItems(false)}
          style={{ top: 35 }}
        >
          <div className="subMenu" onMouseLeave={() => setMenuItems(false)}> {item.list.map((list, i) => (<MenuItem key={i} className="list" >
            {list}
          </MenuItem>))}</div>
        </Menu>}
      </Typography>
    ))
  );
  const handleData = (i) => {
    setIndexs(i);
    setSubMenuItems(!submenuItems)
  }
  const isMobile = (
    <>

      <Drawer
        className='drawer-main'
        open={showDrawer}
        onClose={() => setShowDrawer(!showDrawer)}>
        <Container className="drawer">
          <div className="div">
            <div className="responsiveheader">
              <Typography className="responsivelogo">
                Logo
              </Typography>
              <Button variant="contained" onClick={() => setShowDrawer(false)} className="button" style={{ height:"35px",width:"35px", minWidth: "30px", padding: "6px", backgroundColor: "#F7F7F7", color: "#000000" }}>
                <CloseIcon />
              </Button>
            </div>

            <IconButton className="responsiveavtar">
              <div className={editProfilePhoto ? "Profile-photo add-border" : "Profile-photo"} role='presentation' onKeyDown={handleImage} onClick={handleImage}>
                <img src={ProfilePhoto} style={{ display: "block" }} alt="Profile-img" />
                <div className={"edit"} >{!editProfilePhoto ? <CameraAltOutlinedIcon style={{ fontSize: "18px", color: "gray" }} /> : <CameraAltOutlinedIcon style={{ fontSize: "18px", color: "#F8991F" }} />}</div>
                {editProfilePhoto &&
                  <div className="edit-select">
                    <List style={{ backgroundColor: "#232E3E", padding: "0px", borderRadius: "8px", color: "white", width: "100%", zIndex: "21" }}>
                      <ListItem style={{ padding: "0" }} onClick={handleImage}>
                        <ListItemText className={"menu-Items"} style={{ padding: "10px", margin: "0", borderRadius: "8px 8px 0px 0px" }}>Upload Now</ListItemText>
                      </ListItem>
                      <ListItem style={{ padding: "0" }} onClick={handleImage}>
                        <ListItemText className={"menu-Items"} style={{ padding: "10px", margin: "0", borderRadius: "0px 0px 8px 8px " }} >Remove</ListItemText>
                      </ListItem>
                    </List>
                  </div>}
              </div>
              <div className="username"><p className="name">Jhon Smith</p>
                <div><span className="location">Main St. Farmington, CA 123</span></div></div>


            </IconButton>
            {submenuitemlist.map((item, index) => (
              <Typography component={"div"} key={index} className="menulist">
                <MenuItem className="menuItemList"
                  onClick={() => handleData(index)}><div className="list-items-box"><img style={{ marginRight: "15px" }} src={submenu} alt="" />{item.name}</div>{!item.list?.length ? null : item.list?.length && submenuItems && indexs === index ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                </MenuItem>
                {submenuItems && indexs === index && <MenuList className="sublist">
                  {item.list.map((list, i) => (<MenuItem key={i} >
                    {list}
                  </MenuItem>))}
                </MenuList>}
              </Typography>
            ))}
          </div>
        </Container>
      </Drawer>
      <IconButton className='menuIcon' onClick={() => setShowDrawer(!showDrawer)}>
        <MenuIcon />
      </IconButton>
      <Typography className="logo">
        Logo
      </Typography>
    </>
  )
  return (
    <AppBar className="header-color">
      <Toolbar>
        {!isDrawer ?
          <>
            <Typography className="logo">
              Logo</Typography>
            <div className="navBar">
              {navigationMenu}
            </div>
          </> : isMobile}
        <IconButton className="avtar" style={{ right: !isDrawer ? "40px" : "20px" }}>
          <NotificationsNoneIcon style={{ color: "#ffffff", marginRight: "20px" }} />
          <Avatar alt="" src={UserIcon} />
        </IconButton>
      </Toolbar>

    </AppBar>
  );
}
export default Header