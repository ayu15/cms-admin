import React from 'react';
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import StarIcon from '@material-ui/icons/Star';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import DeleteIcon from '@material-ui/icons/Delete';
import { Link } from 'react-router-dom';

export const mailFolderListItems = (
  <div>
    <Link to="/video">
      <ListItem button>
        <ListItemIcon>
          <VideoLibraryIcon />
        </ListItemIcon>
        <ListItemText primary="Video" />
      </ListItem>
    </Link>
    <Link to="/starred">
      <ListItem button>
        <ListItemIcon>
          <StarIcon />
        </ListItemIcon>
        <ListItemText primary="Starred" />
      </ListItem>
    </Link>
  </div>
);

export const otherMailFolderListItems = (
  <div>
    <Link to="/categories">
      <ListItem button>
        <ListItemIcon>
          <LibraryBooksIcon />
        </ListItemIcon>
        <ListItemText primary="Categories" />
      </ListItem>
    </Link>

    <Link to="/trash">
      <ListItem button>
        <ListItemIcon>
          <DeleteIcon />
        </ListItemIcon>
        <ListItemText primary="Trash" />
      </ListItem>
    </Link>
  </div>
);
