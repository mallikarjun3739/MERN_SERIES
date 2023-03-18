import "./sidebar.css";
import {RssFeed} from '@mui/icons-material'

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
          <ul className="sidebarList">
            <li className="sidebarListItems">
              <RssFeed/>
            </li>
          </ul>
      </div>
      </div>
  )
}
