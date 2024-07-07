/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import "./DisplayFilterKeywords.scss";
const DisplayFilterKeywords = (props) => {
  return (
    <div className="keyword">
      <div className="keyword_name">{props.keyword} </div>
      <FontAwesomeIcon
        onClick={() => props.click(props.keyword)}
        className="keyword_delete"
        icon={faXmark}
      />
    </div>
  );
};

export default DisplayFilterKeywords;
