import React from 'react';
import { FaSearch, FaPlus } from 'react-icons/fa'; // Importing React Icons

export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor" className="container my-4">
      <h3 className="mb-3">
        <label htmlFor="wd-name">Assignment Name</label>
      </h3>
      <input
        id="wd-name"
        className="form-control mb-3"
        value="A1"
      />
      <textarea
        id="wd-description"
        className="form-control mb-3"
        rows={10}
      >
        The assignment is available online
        Submit a link to the landing page of your web application running on Netlify.
          
        The landing page should include the following:

        * Your full name and section
        * Links to each of the lab assignments
        * Link to the Kanbas application
        * Links to all relevant source code repositories
        
        The Kanbas application should include a link to navigate back to the landing page.
      </textarea>

      {/* Search Bar */}
      {/* <div className="mb-3">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Search for Assignment"
          />
          <div className="input-group-append">
            <span className="input-group-text">
              <FaSearch />
            </span>
          </div>
        </div>
      </div> */}

      <table className="table">
        {/* Points */}
        <tr>
          <td className="align-top border-left border-success">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" className="form-control" value={100} />
          </td>
        </tr>

        {/* Assignment Group */}
        <tr>
          <td className="align-top border-left border-success">
            <label htmlFor="wd-group">Assignment Group</label>
          </td>
          <td>
            <select id="wd-group" className="form-control">
              <option value="Assignments">Assignments</option>
              <option value="Quizzes">Quizzes</option>
              <option value="Exams">Exams</option>
            </select>
          </td>
        </tr>

        {/* Display Grade */}
        <tr>
          <td className="align-top border-left border-success">
            <label htmlFor="wd-display-grade-as">Display Grade as</label>
          </td>
          <td>
            <select id="wd-display-grade-as" className="form-control">
              <option value="points">Points</option>
              <option value="percentage">Percentage</option>
            </select>
          </td>
        </tr>

        {/* Submission Type */}
        <tr>
          <td className="align-top border-left border-success">
            <label htmlFor="wd-submission-type">Submission Type</label>
          </td>
          <td>
            <select id="wd-submission-type" className="form-control">
              <option value="online">Online</option>
              <option value="paper">Paper</option>
            </select>
            <br />
            <label htmlFor="wd-online-options">Online Entry Options</label>
            <div id="wd-online-options">
              <input type="checkbox" id="wd-text-entry" /> Text Entry<br />
              <input type="checkbox" id="wd-website-url" /> Website URL<br />
              <input type="checkbox" id="wd-media-recordings" /> Media Recordings<br />
              <input type="checkbox" id="wd-student-annotation" /> Student Annotation<br />
              <input type="checkbox" id="wd-file-upload" /> File Upload<br />
            </div>
          </td>
        </tr>

        {/* Assign to */}
        <tr>
          <div className='col-3 text-end'>
            <label className='form-label pt-1' htmlFor="wd-assign">Assign</label>
          </div>
          <td>
            <div className="border p-3 mb-3">
              <label htmlFor="wd-assign-to">Assign to</label><br />
              <input id="wd-assign-to" className="form-control mb-2" value="Everyone" />
              
              {/* Due Date */}
              <div className="mb-2">
                <label htmlFor="wd-due-date">Due</label>
                <input id="wd-due-date" type="date" className="form-control" value="2024-05-13" />
              </div>

              {/* Available Data */}
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div className="mb-2">
                  <label htmlFor="wd-available-from">Available from</label>
                  <input id="wd-available-from" type="date" className="form-control" value="2024-05-06" />
                </div>
                <div className="mb-2">
                  <label htmlFor="wd-available-until">Until</label>
                  <input id="wd-available-until" type="date" className="form-control" value="2024-05-20" />
                </div>
              </div>
            </div>
          </td>
        </tr>
      </table>

      <hr />
      {/* Cancel and Save buttons */}
      <div className="d-flex justify-content-end">
        <button className="btn btn-secondary me-2">Cancel</button>
        <button className="btn btn-primary me-2 btn-danger">Save</button>
      </div>
    </div>
  );
}
