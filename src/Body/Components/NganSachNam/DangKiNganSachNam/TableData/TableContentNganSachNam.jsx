import "./TableContentNganSachNam.scss";
import { Badge, Table } from "antd";
import { TableDataLists } from "./ListTableData.js";
import { ChevronDown, Search, Download, Add } from "@carbon/icons-react";
import { useState } from "react";
import AddNewDataForm from "./AddNewDataForm";

export default function TableContentNganSachNam() {
  const [dataSource, setDataSource] = useState(TableDataLists);
  const [isOpenCreateForm, setOpenCreateForm] = useState(false);

  const openCreateForm = () => {
    setOpenCreateForm(true);
  };

  const addNewData = () => {
    const STT = TableDataLists[TableDataLists.length - 1].STT;
    const newData = {
      STT: STT + 1,
      MaPhieu: " ",
      Nam: " ",
      CompanyCode: " ",
      PhongBan: " ",
      NguoiTao: " ",
      NgayTao: " ",
      TrangThai: [],
      TrangThaiToTrinh: [],
      " ": " ",
    };
    setDataSource((pre) => {
      return [...pre, newData];
    });
  };
  const columns = [
    {
      title: "STT",
      dataIndex: "STT",
      key: "STT",
    },
    {
      title: "Mã phiếu",
      dataIndex: "MaPhieu",
      key: "MaPhieu",
      render(text) {
        return {
          props: {
            style: { textDecoration: "underline" },
          },
          children: <div>{text}</div>,
        };
      },
    },
    {
      title: "Năm",
      dataIndex: "Nam",
      key: "Nam",
      render(text) {
        return {
          props: {
            style: { textDecoration: "underline" },
          },
          children: <div>{text}</div>,
        };
      },
    },
    {
      title: "Company Code",
      dataIndex: "CompanyCode",
      key: "CompanyCode",
    },
    {
      title: "Phòng ban",
      dataIndex: "PhongBan",
      key: "PhongBan",
    },
    {
      title: "Người tạo",
      dataIndex: "NguoiTao",
      key: "NguoiTao",
    },
    {
      title: "Ngày tạo",
      dataIndex: "NgayTao",
      key: "NgayTao",
    },
    {
      title: "Trạng thái",
      dataIndex: "TrangThai",
      key: "TrangThai",
      render: (TrangThai) => (
        <span>
          {TrangThai.map((TrangThai) => {
            let status = TrangThai === "Ban hành" ? "success" : "warning";
            if (TrangThai === "Mới tạo") {
              status = "default";
            }
            return (
              <div key={TrangThai}>
                <Badge status={status} /> {TrangThai}
              </div>
            );
          })}
        </span>
      ),
    },
    {
      title: "Trạng thái tờ trình",
      dataIndex: "TrangThaiToTrinh",
      key: "TrangThaiToTrinh",
      render: (TrangThaiToTrinh) => (
        <span>
          {TrangThaiToTrinh.map((TrangThaiToTrinh) => {
            let status = TrangThaiToTrinh === "Đã duyệt" ? "success" : " ";
            return (
              <div key={TrangThaiToTrinh}>
                <Badge status={status} /> {TrangThaiToTrinh}
              </div>
            );
          })}
        </span>
      ),
    },
    {
      title: " ",
      dataIndex: " ",
      key: " ",
    },
  ];

  return (
    <>
      <div className="table-data">
        <div className="table-header">
          <div className="left-side">
            <button className="btn-table-header">
              Năm
              <ChevronDown />
            </button>
            <button className="btn-table-header">
              Phòng ban
              <ChevronDown />
            </button>
            <button className="btn-table-header">
              Trạng thái
              <ChevronDown />
            </button>
            <button className="btn-table-header">
              Trạng thái tờ trình
              <ChevronDown />
            </button>
            <button className="btn-table-header">
              <Search />
            </button>
          </div>
          <div className="right-side">
            <button className="btn-table-header">
              <Download />
            </button>
            <button
              onClick={openCreateForm}
              // onClick={addNewData}
              className="btn-table-header btn-create"
            >
              Tạo mới
              <Add />
            </button>
          </div>
        </div>
        <div className="table-content">
          <Table columns={columns} dataSource={dataSource} />
        </div>
        <AddNewDataForm
          isOpenCreateForm={isOpenCreateForm}
          setTrigger={setOpenCreateForm}
        />
      </div>
    </>
  );
}
