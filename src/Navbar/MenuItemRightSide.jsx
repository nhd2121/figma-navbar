import {
  Search,
  Thumbnail_2,
  Notification,
  Settings,
} from "@carbon/icons-react";
import "./Navbar.scss";
import UserAvatarLogo from "./UserAvatarLogo";

export default function MenuItemRightSide() {
  return (
    <div class="right-side">
      <Search className="icon-right-menu" />
      <Notification className="icon-right-menu" />
      <Settings className="icon-right-menu" />
      <UserAvatarLogo />
      <Thumbnail_2 className="icon-right-menu" />
    </div>
  );
}
