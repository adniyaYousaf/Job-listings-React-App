/* eslint-disable react/prop-types */
import "./SingleJob.scss";


const SingleJobs = (props) => {
  return (
    <div className={props.job.featured ? "job border-left": "job"}>
      <div className="job_logo">
        <img src={props.job.logo} alt="logo" />
      </div>
      <div className="job_card">
        <div className="job_card_details">
          <h2 className="job_card_details_company">{props.job.company}</h2>
          {props.job.new ? <button className="new-btn">NEW!</button> : null}
          {props.job.featured ? (
            <button className="featured-btn">FEATURED</button>
          ) : null}
        </div>
        <a className="job_role" href="">
          <h1>{props.job.position}</h1>
        </a>
        <ul className="job_card_list">
          <li>{props.job.postedAt}</li>
          <li>{props.job.contract}</li>
          <li>{props.job.location}</li>
        </ul>
      </div>
      <div className="job_keywords">
        <span onClick={() => props.click(props.job.role)}>
          {props.job.role}
        </span>
        <span onClick={() => props.click(props.job.level)}>
          {props.job.level}
        </span>
        {props.job.languages.length > 0
          ? props.job.languages.map((lang, index) => (
              <span onClick={() => props.click(lang)} key={index}>
                {lang}
              </span>
            ))
          : null}
        {props.job.tools.length > 0
          ? props.job.tools.map((tool, index) => (
              <span onClick={() => props.click(tool)} key={index}>
                {tool}
              </span>
            ))
          : null}
      </div>
    </div>
  );
};

export default SingleJobs;
