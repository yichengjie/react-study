import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Poll from '@material-ui/icons/Poll';
import Adjust from '@material-ui/icons/Adjust';
import Ballot from '@material-ui/icons/Ballot';

const useStyles = makeStyles({
  root: {
    width: 500,
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="Dprice" icon={<Poll />} />
      <BottomNavigationAction label="Dreprice" icon={<Adjust />} />
      <BottomNavigationAction label="Dshop" icon={<Ballot />} />
    </BottomNavigation>
  );
}