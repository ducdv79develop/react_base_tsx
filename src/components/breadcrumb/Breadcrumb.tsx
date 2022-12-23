import { useMemo } from "react";
import { Link } from "react-router-dom";

export interface IBreadcrumb {
  id: number;
  label: string;
  url: string;
  active: boolean;
}

interface IProps {
  title: string;
  breadcrumbList: IBreadcrumb[];
}

const Breadcrumb = (props: IProps) => {
  const { title, breadcrumbList } = props;

  const renderBreadcrumbItems = useMemo(() => {
    return breadcrumbList.map((item: IBreadcrumb) =>
      item.active ? (
        <li className="breadcrumb-item active" key={item.id}>
          {item.label}
        </li>
      ) : (
        <li className="breadcrumb-item" key={item.id}>
          <Link to={item.url}>{item.label}</Link>
        </li>
      ),
    );
  }, [breadcrumbList]);

  return (
    <div className="content-header row">
      <div className="content-header-left col-md-9 col-12 mb-2">
        <div className="row breadcrumbs-top">
          <div className="col-12">
            <h2 className="content-header-title float-start mb-0">{title}</h2>
            <div className="breadcrumb-wrapper">
              <ol className="breadcrumb">{renderBreadcrumbItems}</ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Breadcrumb;
