import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ESPMLogo from '../../assets/LogoESPMFundoBranco.svg';
import { AiFillHome } from 'react-icons/ai';
import {FaBuilding} from 'react-icons/fa';
import {FaSchool} from 'react-icons/fa';
import {IoMdSchool} from 'react-icons/io';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Avatar from '@mui/material/Avatar';
import './style.css';

const options = [
  'Sair',
  'Configurações',
];

const ITEM_HEIGHT = 48;

const drawerWidth = 240;

function PageContainer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = [{title: "Home", icon: <AiFillHome style={{color:'#ffff'}}/>}, {title: "Empresas", icon: <FaBuilding style={{color:'#ffff'}}/>}
  , {title: "Escolas", icon: <FaSchool style={{color:'#ffff'}}/>}, {title: "Alunos", icon: <IoMdSchool style={{color:'#ffff'}}/>}]

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const drawer = (
    <div style={{backgroundColor:'#A80532', height:'100vh', display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
      <Toolbar>
        <div className='LogoESPM'>
        <img src={ESPMLogo}  width="200" height="100" alt='Espm logo'/>
        </div>
      </Toolbar>
      <div>
      <h2 style={{marginLeft:'15px', fontFamily:'Quicksand', color:'#ffff', marginTop:'-150px'}}>Menu</h2>
      <div style={{backgroundColor:'#850226', margin:'0 15px 0 15px', borderRadius:'10px', fontFamily:'Quicksand', color:'#ffff'}}>
      <List>
        {menuItems.map(item => (
          <ListItem key={item.title} disablePadding sx={{fontFamily:'Quicksand', fontSize:'20px'}}>
          <ListItemButton>
            <ListItemIcon>
              {item.icon}              
            </ListItemIcon>
            <ListItemText primary={item.title} sx={{fontFamily:'Quicksand', fontSize:'20px'}}/>
          </ListItemButton>
        </ListItem>
        ))}
      </List>
        </div>
        </div>
        <div>
          <Divider style={{ marginBottom:'5px'}}/>
          <div className='UserLoggedIn'>
            <div className='Avatar'>
              <div className='Foto'>
                <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
              </div>
            </div>
            <div className='AvatarName'>
              <h3>Thiago Miotti</h3>
            </div>
            <div className='Settings'>
            <IconButton
              aria-label="more"
              id="long-button"
              aria-controls={open ? 'long-menu' : undefined}
              aria-expanded={open ? 'true' : undefined}
              aria-haspopup="true"
              onClick={handleClick}
      >
        <MoreVertIcon/>
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >
        {options.map((option) => (
          <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
            {option}
          </MenuItem>
        ))}
      </Menu>
            </div>
          </div>
        </div>
    </div>
  );



  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className='BackgroundVector'>
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
        style={{backgroundColor:'#ffff', margin:'15px'}}
      >
        
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' }, color:'black' }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" noWrap component="div" style={{color:'#000000', fontFamily:'Quicksand', fontWeight:'bold'}}>
            {props.title}
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        {props.children}
      </Box>
      
    </Box>
    </div>
  );
}


export default PageContainer;