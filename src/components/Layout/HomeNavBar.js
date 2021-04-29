import React, {useState} from 'react'
import HomePage from '../../pages/Start/HomePage'
import NewMoviesPage from '../../pages/Movies/NewMoviesPage'
import BestMoviesPage from '../../pages/Movies/BestMoviesPage'

import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import FaceRoundedIcon from '@material-ui/icons/FaceRounded'
import MovieIcon from '@material-ui/icons/Movie'
import FavoriteIcon from '@material-ui/icons/Favorite'
import HelpIcon from '@material-ui/icons/Help'
import ShoppingBasket from '@material-ui/icons/ShoppingBasket'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import SearchIcon from '@material-ui/icons/Search'
import AddShoppingCartRoundedIcon from '@material-ui/icons/AddShoppingCartRounded'

import { fade } from '@material-ui/core/styles'
import MenuIcon from '@material-ui/icons/Menu'

import StripePage from '../../pages/Stripe/BasketPage'
import ContactPage from '../../pages/ContactPage'
import HistoryPage from '../../pages/Stripe/HistoryPage'

const TabPanel = ({ children, value, index, ...other }) =>  (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-prevent-tabpanel-${index}`}
      aria-labelledby={`scrollable-prevent-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
}

function a11yProps(index) {
  return {
    id: `scrollable-prevent-tab-${index}`,
    'aria-controls': `scrollable-prevent-tabpanel-${index}`,
  }
}

const useStyles = makeStyles((theme) => ({

  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  
  menuButton: {
    marginRight: theme.spacing(2),
  },

  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },

  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },

  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  inputRoot: {
    color: 'inherit',
  },

  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}))

const NavBar = () => {

  const classes = useStyles()

  const [value, setValue] = useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  //MAIN RETURN
  return (
    <div className={classes.root}>
      
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="off"
          aria-label="scrollable prevent tabs example"
        >
          <Tab icon={<FaceRoundedIcon />} aria-label="profile" {...a11yProps(0)} />
          <Tab icon={<MovieIcon />} aria-label="movie" {...a11yProps(1)} />
          <Tab icon={<FavoriteIcon />} aria-label="favorite" {...a11yProps(2)} />
          <Tab icon={<ShoppingBasket />} aria-label="shopping" {...a11yProps(3)} />
          <Tab icon={<HelpIcon />} aria-label="help" {...a11yProps(4)} />
          <Tab icon={<SearchIcon />} aria-label="search" {...a11yProps(5)} />
          <Tab icon={<AddShoppingCartRoundedIcon />} aria-label="basket" {...a11yProps(6)} />

        </Tabs>

      </AppBar>

      <TabPanel value={value} index={0}>
        <HomePage />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <NewMoviesPage />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <BestMoviesPage />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <HistoryPage />
      </TabPanel>
      <TabPanel value={value} index={5}>
        <ContactPage />
      </TabPanel>
      <TabPanel value={value} index={6}>
        <StripePage />
      </TabPanel>
      <TabPanel value={value} index={6}>
        <StripePage />
      </TabPanel>

      

      
        
        
          
        

        
    </div>
  )
}

export default NavBar