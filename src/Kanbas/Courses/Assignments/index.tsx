import { useParams } from "react-router";
import { BsGripVertical } from "react-icons/bs";
import { IoEllipsisVertical } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import LessonControlButtons from "../Modules/LessonControlButtons";
import * as db from "../../Database";
import { MdAssignmentAdd } from "react-icons/md";
import { FaSearch } from "react-icons/fa";

export default function Assignments() {
  const { cid } = useParams();
  const assignments = db.assignments;
  const filteredAssinments = assignments.filter(
    (assignment) => assignment.course === cid
  );
  return (
    <div id="wd-assignments" className="container mt-4">
      <div className="d-flex align-items-center justify-content-start pb-1 mb-3 text-nowrap">
        <div className="input-group me-5">
          <span className="input-group-text bg-white border-end-0">
            <FaSearch />
          </span>
          <input
            type="text"
            id="wd-search-assignment"
            className="form-control border-start-0"
            placeholder="Search..."
          />
        </div>
        <div className="d-flex  mb-3">
          <button id="wd-add-assignment-group" className="btn btn-lg btn-secondary me-1 float-end d-flex align-items-center">
            <FaPlus className="me-1" />
            <span>Group</span>
          </button>
          <button id="wd-add-assignment" className="btn btn-lg btn-danger me-1 float-end">
            <FaPlus className="me-1" />
            <span>Assignment</span>
          </button>
        </div>
      </div><br />
      <div className="d-title d-flex justify-content-between align-items-center p-3 ps-2 bg-light">
        <div className="d-flex">
          <BsGripVertical className="me-2 fs-3" />
          <a id="wd-assignments-title" className="h3 text-decoration-none">
            <strong>ASSIGNMENTS</strong>
          </a>
        </div>
        <div>
          <span className="col-2 p-2 fs-6 border border-1 border-secondary custom-border-radius">40% of Total</span>
          <FaPlus className="fs-4" />
          <IoEllipsisVertical className="fs-4" />
        </div>
      </div>
      <ul id="wd-assignment-list" className="list-group rounded-0" style={{ borderLeft: '4px solid green' }}>
        {filteredAssinments.map((assignment) => (
        <li key={assignment._id} className="wd-assignment-list-item list-group-item d-flex justify-content-between p-0 fs-5 border-gray">
          <div className="col-1 d-flex align-items-center justify-content-start">
            <a className="wd-assignment-link d-flex align-items-center p-2" href={`#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}>
              <BsGripVertical className="me-2 fs-3 " style={{ color: 'black' }} />
              <MdAssignmentAdd className="fs-3 " style={{ color: 'green' }} />
            </a>
          </div>
          <div className="col-7 pt-3 pb-3">
            <div><strong>{assignment.title}</strong></div>
            <div>
              <span className="text-danger">Multiple Modules</span> | <strong>Not available until</strong> May 6 at 12:00am |
              <strong> Due</strong> May 13 at 11:59pm | 100 pts
            </div>
          </div>
          <div className="col-3 d-flex align-items-center justify-content-end p-3">
            <LessonControlButtons />
          </div>
        </li>
        ))}

        {/* <li className="wd-assignment-list-item list-group-item d-flex justify-content-between p-0 fs-5 border-gray">
          <div className="col-1 d-flex align-items-center justify-content-start me-2">
            <a className="wd-assignment-link d-flex align-items-center p-2" href="#/Kanbas/Courses/1234/Assignments/124">
              <BsGripVertical className="me-2 fs-3" style={{ color: 'black' }} />
              <MdAssignmentAdd className="fs-3" style={{ color: 'green' }} />
            </a>
          </div>
          <div className="col-7 pt-3 pb-3">
            <div><strong>A2</strong></div>
            <div>
              <span className="text-danger">Multiple Modules</span> | <strong>Not available until</strong> May 13 at 12:00am |
              <strong> Due</strong> May 20 at 11:59pm | 100 pts
            </div>
          </div>
          <div className="col-3 d-flex align-items-center justify-content-end p-3">
            <LessonControlButtons />
          </div>
        </li>
        <li className="wd-assignment-list-item list-group-item d-flex justify-content-between p-0 fs-5 border-gray">
          <div className="col-1 d-flex align-items-center justify-content-start me-2">
            <a className="wd-assignment-link d-flex align-items-center p-2" href="#/Kanbas/Courses/1234/Assignments/125">
              <BsGripVertical className="me-2 fs-3" style={{ color: 'black' }} />
              <MdAssignmentAdd className="fs-3" style={{ color: 'green' }} />
            </a>
          </div>
          <div className="col-7 pt-3 pb-3">
            <div><strong>A3</strong></div>
            <div>
              <span className="text-danger">Multiple Modules</span> | <strong>Not available until</strong> May 20 at 12:00am |
              <strong> Due</strong> May 27 at 11:59pm | 100 pts
            </div>
          </div>
          <div className="col-3 d-flex align-items-center justify-content-end p-3">
            <LessonControlButtons />
          </div>
        </li> */}

      </ul>
    </div>
  );
}