import "./sidebar.css";
import { RssFeed } from "@mui/icons-material";
import ChatIcon from "@mui/icons-material/Chat";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import GroupsIcon from "@mui/icons-material/Groups";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import WorkIcon from '@mui/icons-material/Work';
import EventIcon from '@mui/icons-material/Event';
import SchoolIcon from '@mui/icons-material/School';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItems">
            <RssFeed className="sidebarIcon" />
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItems">
            <ChatIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Chats</span>
          </li>
          <li className="sidebarListItems">
            <PlayCircleFilledIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Videos</span>
          </li>
          <li className="sidebarListItems">
            <GroupsIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Groups</span>
          </li>
          <li className="sidebarListItems">
            <BookmarksIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Bookmarks</span>
          </li>
          <li className="sidebarListItems">
            <HelpOutlineIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Questions</span>
          </li>
          <li className="sidebarListItems">
            <WorkIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Jobs</span>
          </li>
          <li className="sidebarListItems">
            <EventIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Events</span>
          </li>
          <li className="sidebarListItems">
            <SchoolIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Courses</span>
          </li>
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr"/>
        <ul className="sidebarFriend">
          <li className="sidebarFriend">
              <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImage" />
              <span className="sideFriendName">Jane Doe</span>
          </li>
        </ul>
        <ul className="sidebarFriend">
          <li className="sidebarFriend">
              <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImage" />
              <span className="sideFriendName">Jane Doe</span>
          </li>
        </ul>
        <ul className="sidebarFriend">
          <li className="sidebarFriend">
              <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImage" />
              <span className="sideFriendName">Jane Doe</span>
          </li>
        </ul>
        <ul className="sidebarFriend">
          <li className="sidebarFriend">
              <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImage" />
              <span className="sideFriendName">Jane Doe</span>
          </li>
        </ul>
        <ul className="sidebarFriend">
          <li className="sidebarFriend">
              <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImage" />
              <span className="sideFriendName">Jane Doe</span>
          </li>
        </ul>
        <ul className="sidebarFriend">
          <li className="sidebarFriend">
              <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImage" />
              <span className="sideFriendName">Jane Doe</span>
          </li>
        </ul>
        <ul className="sidebarFriend">
          <li className="sidebarFriend">
              <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImage" />
              <span className="sideFriendName">Jane Doe</span>
          </li>
        </ul>
        <ul className="sidebarFriend">
          <li className="sidebarFriend">
              <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImage" />
              <span className="sideFriendName">Jane Doe</span>
          </li>
        </ul>
        <ul className="sidebarFriend">
          <li className="sidebarFriend">
              <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImage" />
              <span className="sideFriendName">Jane Doe</span>
          </li>
        </ul>
        <ul className="sidebarFriend">
          <li className="sidebarFriend">
              <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImage" />
              <span className="sideFriendName">Jane Doe</span>
          </li>
        </ul>
        <ul className="sidebarFriend">
          <li className="sidebarFriend">
              <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImage" />
              <span className="sideFriendName">Jane Doe</span>
          </li>
        </ul>
        <ul className="sidebarFriend">
          <li className="sidebarFriend">
              <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImage" />
              <span className="sideFriendName">Jane Doe</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
