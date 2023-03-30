import React from "react";
import interactiveComment from "../assets/images/projects/Interactive comment.4eb26d38025d59640b75.png";
import jobList from "../assets/images/projects/joblist.455286b68e04c995fd69.png";
import calendar from "../assets/icons/calendar.svg";
function Blog() {
  return (
    <section className="blog-section">
      <div className="blog-div space-x-2">
        <div className="blog-header">
          <h2>Our Blogs</h2>
        </div>
        <div className="flex-items-resp space-x-1">
          <div className="project-div">
            <div className="project-img">
              <img src={interactiveComment} alt="interactive-comment" />
            </div>
            <div className="project-info">
              <div className="flex-items space-x-px sub-head ">
                <div className="calender-icon">
                  <img src={calendar} alt="" />
                </div>
                <p>23 March, 2022</p>
                <p>Project</p>
              </div>
              <h2 className="marg-top-1">Interactive dummy comment section</h2>
              <p className="marg-top-1 underline">Read more</p>
            </div>
          </div>
          <div className="project-div">
            <div className="project-img">
              <img src={jobList} alt="job-list" />
            </div>
            <div className="project-info">
              <div className="flex-items space-x-px sub-head ">
                <div className="calender-icon">
                  <img src={calendar} alt="" />
                </div>
                <p>23 March, 2022</p>
                <p>Project</p>
              </div>
              <h2 className="marg-top-1">Job List</h2>
              <p className="marg-top-1 underline">Read more</p>
            </div>
          </div>
          <div className="project-div">
            <div className="project-img">
              <img src={interactiveComment} alt="interactive-comment" />
            </div>
            <div className="project-info">
              <div className="flex-items space-x-px sub-head ">
                <div className="calender-icon">
                  <img src={calendar} alt="" />
                </div>
                <p>23 March, 2022</p>
                <p>Project</p>
              </div>
              <h2 className="marg-top-1">Interactive dummy comment section</h2>
              <p className="marg-top-1 underline">Read more</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;
