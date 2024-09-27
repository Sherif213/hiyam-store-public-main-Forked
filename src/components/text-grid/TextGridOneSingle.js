import PropTypes from "prop-types";
import clsx from "clsx";
import { useTranslation } from "react-i18next";

const TextGridOneSingle = ({ data, spaceBottomClass }) => {
  const {t}=useTranslation()
  return (
      <div className={clsx("single-mission", spaceBottomClass)}>
        <h3>{t(data.title)}</h3>
        <p>{t(data.text)}</p>
      </div>
  );
};

TextGridOneSingle.propTypes = {
  data: PropTypes.shape({}),
  spaceBottomClass: PropTypes.string
};

export default TextGridOneSingle;
