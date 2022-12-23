import "./addNewDataForm.scss";
import { Button, Form, Input } from "antd";

export default function AddNewDataForm({ isOpenCreateForm }) {
  return (
    <div className={`form ${isOpenCreateForm ? "open" : ""}`}>
      <Form>
        <Form.Item name={"MaPhieu"} label={"Mã phiếu"}>
          <Input placeholder={"e.g NSDTMB202301"} />
        </Form.Item>
        <Form.Item name={"Nam"} label={"Năm"}>
          <Input placeholder={"e.g 2022"} />
        </Form.Item>
        <Form.Item name={"CompanyCode"} label={"Company Code"}>
          <Input placeholder={"e.g DTMB"} />
        </Form.Item>
        <Form.Item name={"PhongBan"} label={"Phòng ban"}>
          <Input placeholder={"e.g Đầu tư Miền Bắc"} />
        </Form.Item>
        <Form.Item name={"NguoiTao"} label={"Người tạo"}>
          <Input placeholder={"e.g nhd21"} />
        </Form.Item>
        <Form.Item name={"NgayTao"} label={"Ngày tạo"}>
          <Input placeholder={"e.g dd/mm/yyyy"} />
        </Form.Item>
        <Form.Item name={"TrangThai"} label={"Trạng thái"}>
          <Input placeholder={"e.g Mới tạo"} />
        </Form.Item>
        <Form.Item name={"TrangThaiToTrinh"} label={"Trạng thái tờ trình"}>
          <Input placeholder={"e.g Đã duyệt"} />
        </Form.Item>
      </Form>
      <Button className="btn-create-confirm">Tạo mới ngân sách</Button>
    </div>
  );
}
