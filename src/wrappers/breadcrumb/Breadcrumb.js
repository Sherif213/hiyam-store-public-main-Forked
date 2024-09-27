import PropTypes from "prop-types";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const BreadcrumbWrap = ({pages}) => {
  const {t}=useTranslation()
  return (
    <div className="breadcrumb-area pt-35 pb-35 bg-gray-3">
      <div className="container">
        <Breadcrumb>
            {pages?.map(({ path, label }, i) => i !== pages.length - 1 ? (
                <Breadcrumb.Item key={t(label)} linkProps={{to: path}} linkAs={Link}>
                  {t(label)}
                </Breadcrumb.Item>
            ) : (                
              <Breadcrumb.Item key={label} active>
                {t(label)}
              </Breadcrumb.Item>
            ))}
        </Breadcrumb>
      </div>
    </div>
  );
};

BreadcrumbWrap.propTypes = {
  pages: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired
  })).isRequired
}

export default BreadcrumbWrap;
