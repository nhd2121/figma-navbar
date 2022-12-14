import topLogoNavbar from "../assets/top-logo-navbar.png";
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
            <i class="icon-left-menu fa-sharp fa-solid fa-chevron-down"></i>
          </div>
          <div class="btn-item ngan-sach-thang left-option">
            Ngân sách tháng
            <i class="icon-left-menu fa-sharp fa-solid fa-chevron-down"></i>
          </div>
          <div class="btn-item bao-cao left-option">
            Báo cáo
            <i class="icon-left-menu fa-sharp fa-solid fa-chevron-down"></i>
          </div>
          <div class="btn-item danh-muc left-option">
            Danh mục
            <i class="icon-left-menu fa-sharp fa-solid fa-chevron-down"></i>
          </div>
          <div class="btn-item phan-quyen left-option">
            Phân quyền
            <i class="icon-left-menu fa-sharp fa-solid fa-chevron-down"></i>
          </div>
        </div>
      </div>
      <div class="right-side">
        <i class="icon-right-menu fa-sharp fa-solid fa-magnifying-glass"></i>
        <i class="icon-right-menu fa-brands fa-buromobelexperte"></i>
        <i class="icon-right-menu fa-regular fa-bell"></i>
        <i class="icon-right-menu fa-solid fa-gear"></i>
        <i class="icon-right-menu fa-regular fa-circle-user"></i>
      </div>
    </div>
  );
}
