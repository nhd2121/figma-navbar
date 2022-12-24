import "./TableContentNganSachNam.scss";
import { Badge, Table } from "antd";
import { TableDataLists } from "./ListTableData.js";
import { ChevronDown, Search, Download, Add } from "@carbon/icons-react";
import { useState } from "react";
import AddNewDataForm from "./AddNewDataForm";

const newData = {
  MaPhieu: " ",
  Nam: " ",
  CompanyCode: " ",
  PhongBan: " ",
  NguoiTao: " ",
  NgayTao: " ",
  TrangThai: [""],
  TrangThaiToTrinh: [""],
};

export default function TableContentNganSachNam() {
  const [dataSource, setDataSource] = useState(TableDataLists);
  const [dataInput, setDataInput] = useState(newData);
  const [isOpenCreateForm, setOpenCreateForm] = useState(false);

  const openCreateForm = () => {
    setOpenCreateForm(true);
  };

  const handleSubmit = () => {
    const cloneData = [...dataSource];
    cloneData.push({ ...dataInput, STT: 100 });

    setOpenCreateForm(false);
    setDataSource(cloneData);
    setDataInput(newData);
  };

  const columns = [
    {
      title: "STT",
      dataIndex: "STT",
      key: "STT",
      render: (index) => {
        return index;
      },
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
      render: (TrangThai) => {
        return (
          <div>
            {(() => {
              if (TrangThai === "Mới tạo") {
                return <Badge status="default" text={TrangThai} />;
              } else if (TrangThai === "Ban hành") {
                return <Badge status="success" text={TrangThai} />;
              } else {
                return <Badge status="warning" text={TrangThai} />;
              }
            })()}
          </div>
        );
      },
    },
    {
      title: "Trạng thái tờ trình",
      dataIndex: "TrangThaiToTrinh",
      key: "TrangThaiToTrinh",
      render: (TrangThaiToTrinh) => (
        <span>
          <div key={TrangThaiToTrinh}>
            <Badge
              status={TrangThaiToTrinh === "Đã duyệt" ? "success" : " "}
              text={TrangThaiToTrinh}
            />
          </div>
        </span>
      ),
    },
    {
      title: "Action",
      dataIndex: "Action",
      key: "Action",
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
          dataInput={dataInput}
          setDataInput={setDataInput}
          handleSubmit={handleSubmit}
        />
      </div>
    </>
  );
}
