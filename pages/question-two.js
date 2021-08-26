import React, {useState,useEffect} from 'react'
import styles from '../public/assets/css/question.module.css' //my custom css

// import material items
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';

const useStyles = makeStyles((theme) => ({
  root: {
    // maxWidth: '50%',
        maxWidth: 360,
      margin: '0 auto',
    backgroundColor: theme.palette.background.paper,
  },
}));

const QuestionTwo = () => {
      const classes = useStyles();

    const data = [
        {name: 'Product A', price: 300},
        {name: 'Product B', price: 200},
        {name: 'Product C', price: 700},
        {name: 'Product D', price: 500},
        {name: 'Product E', price: 650},
        {name: 'Product F', price: 800},
    ]
    const [collapse, setCollapse] = useState(true);
    const [expand, setExpand] = useState(false);
    const [filteredData,setFilteredData] = useState(null)
    useEffect(() => {
        // If I have to get the data from api, I will prefer take first 3 data from server side rendering, and if user click to view all I would like to send and ajax req to api end point and get rest of data. and update the data state.
        if (collapse) {
            setFilteredData(data?.slice(0,3))
        } else {
            setFilteredData(data)
        }
    }, [collapse, expand])

    
    const changeDataState = () => {
        setCollapse(!collapse);
        setExpand(!expand)
    }
    return (
        <div className={styles.main}>
            <List className={classes.root}>
                {filteredData?.length ? 
                    <>
                        {filteredData?.map((item) => 
                        <ListItem key={item?.name}>
                            <ListItemAvatar>
                            <Avatar>
                                <ImageIcon />
                            </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={item?.name} secondary={item?.price} />
                        </ListItem>
                        )
                        }
                    </>
                :
                <ListItem>No Data Found...</ListItem>
                }
                </List>
            <Button onClick={() => changeDataState()} variant="contained" color="primary">
        {collapse ? 'View All' : `Collapse`}
      </Button>
        </div>
    )
}

export default QuestionTwo
