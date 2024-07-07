import data from "./assets/data.json";
import SingleJob from "./SingleJob/SingleJob.jsx";
import Header from "./Header/Header";
import { useState } from "react";
import DisplayFilterKeywords from "./DisplayFilterKeywords/DisplayFilterKeywords.jsx";
import "./App.scss";

function App() {
  const [showFilterInput, setShowFilterInput] = useState(false);
  const [filterBy, setFilterBy] = useState(data);
  const [keywords, setKeywords] = useState([]);

  const handleFilter = (key) => {
    setShowFilterInput(true);

    if (!keywords.includes(key)) {
      setKeywords((prevKeywords) => [...prevKeywords, key]);
    }

    const filteredJobs = data.filter(
      (job) =>
        job.languages.includes(key) ||
        job.level.includes(key) ||
        job.role.includes(key) ||
        job.tools.includes(key)
    );

    setFilterBy(filteredJobs);
  };

  function removeAllKeywords() {
    setKeywords([]);
    setFilterBy(data);
  }

  function handleRemoveFilter(key) {
    const filteredJobs = data.filter(
      (job) =>
        !job.languages.includes(key) ||
        !job.level.includes(key) ||
        !job.role.includes(key) ||
        !job.tools.includes(key)
    );

    setFilterBy(filteredJobs);
    setKeywords((prevKeywords) =>
      prevKeywords.filter((keyword) => keyword !== key)
    );
  }

  return (
    <>
      <Header></Header>

      <div className="container">
        <div>
          {" "}
          {showFilterInput ? (
            <div className="job-filter">
              {keywords && keywords.length > 0
                ? keywords.map((item, index) => (
                    <DisplayFilterKeywords
                      className="filters"
                      key={index}
                      keyword={item}
                      click={handleRemoveFilter}
                    />
                  ))
                : null}

              <button className="clear-btn" onClick={() => removeAllKeywords()}>
                Clear
              </button>
            </div>
          ) : null}
        </div>
        {filterBy.map((job) => (
          <SingleJob key={job.id} job={job} click={handleFilter} />
        ))}
      </div>
    </>
  );
}

export default App;
