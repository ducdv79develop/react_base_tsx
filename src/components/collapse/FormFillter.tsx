import { useCallback, useState } from "react";
import { ChevronDown, ChevronUp } from "react-feather";
import { Card, CardBody, CardHeader, CardTitle, Collapse } from "reactstrap";

interface IProps {
  title: string;
  children?: React.ReactNode;
}

const FormFillter = (props: IProps) => {
  const { title, children } = props;
  const [openCollapse, setOpenCollapse] = useState(false);
  const handleCollapseToggle = useCallback(() => {
    setOpenCollapse(!openCollapse);
  }, [openCollapse]);

  return (
    <Card className="app-collapse">
      <CardHeader className="align-items-center" onClick={handleCollapseToggle}>
        <CardTitle className="collapse-title">{title}</CardTitle>
        {openCollapse ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
      </CardHeader>
      <Collapse isOpen={openCollapse}>
        <CardBody>{children}</CardBody>
      </Collapse>
    </Card>
  );
};
export default FormFillter;
