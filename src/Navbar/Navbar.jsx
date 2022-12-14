import topLogoNavbar from "../assets/top-logo-navbar.png";
import {
  Search,
  Thumbnail_2,
  Notification,
  Settings,
  UserAvatar,
  ChevronDown,
} from "@carbon/icons-react";
import "./Navbar.scss";

export default function Navbar() {
  return (
    <div class="navbar">
      <div class="left-side">
        <div class="logo left-option">
          <img src={topLogoNavbar} className="logo" alt="logo" />
        </div>
        <div class="items">
          <div class="btn-item ngan-sach-nam left-option">
            Ngân sách năm
            <ChevronDown className="icon-left-menu" />
          </div>
          <div class="btn-item ngan-sach-thang left-option">
            Ngân sách tháng
            <ChevronDown className="icon-left-menu" />
          </div>
          <div class="btn-item bao-cao left-option">
            Báo cáo
            <ChevronDown className="icon-left-menu" />
          </div>
          <div class="btn-item danh-muc left-option">
            Danh mục
            <ChevronDown className="icon-left-menu" />
          </div>
          <div class="btn-item phan-quyen left-option">
            Phân quyền
            <ChevronDown className="icon-left-menu" />
          </div>
        </div>
      </div>
      <div class="right-side">
        <Search className="icon-right-menu" />
        <Thumbnail_2 className="icon-right-menu" />
        <Notification className="icon-right-menu" />
        <Settings className="icon-right-menu" />
        <UserAvatar className="icon-right-menu" />
      </div>
    </div>
  );
}
