import { IBreadcrumb } from "./../components/breadcrumb/Breadcrumb";
export const ACCOUNT_LIST_BREADCRUMB: IBreadcrumb[] = [
  {
    id: 1,
    label: "Trang chủ",
    url: "/admin",
    active: false,
  },
  {
    id: 2,
    label: "Nhân viên",
    url: "/accounts",
    active: false,
  },
  {
    id: 3,
    label: "Danh sách nhân viên",
    url: "/",
    active: true,
  },
];
