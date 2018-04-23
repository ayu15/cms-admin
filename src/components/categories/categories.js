import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import List, {
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
} from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import Avatar from 'material-ui/Avatar';
import CategoriesData from './categories.json';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
});

class Categories extends React.Component {
  state = {
    checked: [1],
  };

  handleToggle = value => () => {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      checked: newChecked,
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <List>
          {CategoriesData.map(value => (
            <ListItem
              key={value.id}
              dense
              button
              className={classes.listItem}
              onClick={this.handleToggle(value.id)}
            >
              <Avatar
                alt="List item"
                src="https://dummyimage.com/120/445511/"
              />
              <ListItemText primary={value.name} />
              <Checkbox
                onChange={this.handleToggle(value.id)}
                checked={this.state.checked.indexOf(value.id) !== -1}
              />
            </ListItem>
          ))}
        </List>
      </div>
    );
  }
}

Categories.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Categories);
