import {
  Search,
  Thumbnail_2,
  Notification,
  Settings,
  UserAvatar,
} from "@carbon/icons-react";
import "./Navbar.scss";

export default function MenuItemRightSide() {
  return (
    <div class="right-side">
      <Search className="icon-right-menu" />
      <Thumbnail_2 className="icon-right-menu" />
      <Notification className="icon-right-menu" />
      <Settings className="icon-right-menu" />
      <UserAvatar className="icon-right-menu" />
    </div>
  );
}
