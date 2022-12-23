import { forwardRef, Fragment } from "react";
import DataTable from "react-data-table-component";
import { ChevronDown } from "react-feather";
import Flatpickr from "react-flatpickr";
import { Card, Col, Input, Label, Row } from "reactstrap";
import Breadcrumb from "../../../components/breadcrumb/Breadcrumb";
import FormFillter from "../../../components/collapse/FormFillter";
import Pagination from "../../../components/pagination/Pagination";
import { ACCOUNT_LIST_BREADCRUMB } from "../../../constants/breadcrumb";

import "../../../assets/scss/@core/react/libs/flatpickr/flatpickr.scss";

const AccountList = () => {
  const handleChange = (state: any) => {
    console.log("xxxx");
    console.log(state.selectedRows);
  };
  const column: any = [
    {
      name: "Mã nhân viên",
      selector: "id",
      sortable: true,
      maxWidth: "250px",
    },
    {
      name: "Họ và tên",
      selector: "fullName",
      sortable: true,
      minWidth: "225px",
    },
    {
      name: "Email",
      selector: "email",
      sortable: true,
      minWidth: "310px",
    },
    {
      name: "Ngày sinh",
      selector: "dob",
      sortable: true,
      minWidth: "250px",
    },
    {
      name: "Mô tả",
      selector: "description",
      sortable: true,
      minWidth: "100px",
    },
    {
      name: "Lương",
      selector: "salary",
      sortable: true,
      minWidth: "175px",
    },
  ];
  const data: any = [
    {
      id: "18810310325",
      fullName: "Phương Công Thắng",
      email: "thang.pc@beetechsoft.com",
      dob: "25/07/2000",
      description: "Backend Developer",
      salary: "100000",
    },
    {
      id: "18810310326",
      fullName: "Phương Công Thắng",
      email: "thang.pc@beetechsoft.com",
      dob: "25/07/2000",
      description: "Backend Developer",
      salary: "100000",
    },
    {
      id: "18810310327",
      fullName: "Phương Công Thắng",
      email: "thang.pc@beetechsoft.com",
      dob: "25/07/2000",
      description: "Backend Developer",
      salary: "100000",
    },
    {
      id: "18810310328",
      fullName: "Phương Công Thắng",
      email: "thang.pc@beetechsoft.com",
      dob: "25/07/2000",
      description: "Backend Developer",
      salary: "100000",
    },
  ];
  return (
    <Fragment>
      <Breadcrumb title="Danh sách nhân viên" breadcrumbList={ACCOUNT_LIST_BREADCRUMB} />
      <FormFillter title="Tìm kiếm nhân viên">
        <Row form>
          <Col lg="4" md="6" className="mb-1">
            <Label for="name">Name:</Label>
            <Input id="name" placeholder="Bruce Wayne" />
          </Col>
          <Col lg="4" md="6" className="mb-1">
            <Label for="email">Email:</Label>
            <Input type="email" id="email" placeholder="Bwayne@email.com" />
          </Col>
          <Col lg="4" md="6" className="mb-1">
            <Label for="post">Post:</Label>
            <Input id="post" placeholder="Web Designer" />
          </Col>
          <Col lg="4" md="6">
            <Label for="date">Date:</Label>
            <Flatpickr
              className="form-control"
              id="date"
              // value={Picker}
              options={{ mode: "range", dateFormat: "m/d/Y" }}
              // onChange={(date) => handleDateFilter(date)}
            />
          </Col>
          <Col lg="4" md="6" className="mb-1">
            <Label for="city">City:</Label>
            <Input id="city" placeholder="San Diego" />
          </Col>
          <Col lg="4" md="6" className="mb-1">
            <Label for="salary">Salary:</Label>
            <Input id="salary" placeholder="10000" />
          </Col>
        </Row>
        <Row form className="mt-1 mb-0 d-flex justify-content-end">
          <Col lg="4" md="6" className="d-flex justify-content-end">
            <button type="button" className="btn btn-primary data-submit me-1">
              Tìm kiếm
            </button>
            <button type="reset" className="btn btn-outline-secondary">
              Hủy
            </button>
          </Col>
        </Row>
      </FormFillter>
      <Card>
        <Row className="mx-0 mt-1 mb-50">
          <Col sm="6">
            <div className="d-flex align-items-center">
              <Label for="sort-select">Tổng số: </Label>
              <Input className="dataTable-select mx-1" type="select" id="sort-select">
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={25}>25</option>
                <option value={50}>50</option>
                <option value={75}>75</option>
                <option value={100}>100</option>
              </Input>
              <Label for="sort-select">bản ghi</Label>
            </div>
          </Col>
        </Row>
        <DataTable
          noHeader
          pagination
          selectableRows
          expandableRows
          expandOnRowClicked
          columns={column}
          paginationPerPage={7}
          className="react-dataTable"
          sortIcon={<ChevronDown size={10} />}
          paginationDefaultPage={1 + 1}
          paginationComponent={() => <Pagination />}
          data={data}
          onSelectedRowsChange={handleChange}
        />
      </Card>
    </Fragment>
  );
};
export default AccountList;
