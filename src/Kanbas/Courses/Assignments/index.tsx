import { BsGripVertical } from "react-icons/bs";
import { MdAssignmentAdd } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import { IoEllipsisVertical } from "react-icons/io5";
import LessonControlButtons from "../Modules/LessonControlButtons";

export default function Assignments() {
  return (
    <div id="wd-assignments" className="mt-5">
      <div className="assignment-header">
        <input id="wd-search-assignment"
          placeholder="Search..."
          className="w-20" />
        <div className="actions">
          <button id="wd-add-assignment" className="btn btn-danger me-1 float-end">+ Assignment</button>
          <button id="wd-add-assignment-group" className="btn btn-secondary me-1 float-end">+ Group</button>
        </div>
      </div>

      <ul id="wd-assignment" className="list-group rounded-0">
        <li className="wd-assignment list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />
            <span>ASSIGNMENTS</span>
            <IoEllipsisVertical className="float-end" />
            <FaPlus className="float-end" />
            <span className="float-end border border-dark rounded">40% of Total</span>
          </div>
          <div>
            <ul id="wd-assignment-list">
              <table>
                <tbody>
                  <tr>
                    <td></td>
                    <td></td>
                    <td><a className="wd-assignment-link"
                      href="#/Kanbas/Courses/1234/Assignments/123"
                      style={{ color: "black", textDecoration: "none"}}>
                      A1</a></td>
                  </tr>
                  <tr>
                    <td><BsGripVertical className="me-2 fs-3" /></td>
                    <td><MdAssignmentAdd className="assignment-icon" style={{ fontSize: "2rem" }} /></td>
                    <td>
                      <p><span className="text-danger">Multiple Modules</span> | <span style={{ fontWeight: 'bold' }}>Not available until </span>May 6 at 12:00am |</p>
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td>
                      <p> <span style={{ fontWeight: 'bold' }}>Due </span>May 13 at 11:59pm | 100 pts</p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="position-absolute" style={{top:"110px", right:"10px", fontSize:"1.5rem", transform: "scale(1.5)" }}>
                <LessonControlButtons />
              </div>
            </ul>
          </div>
        </li>

        <li className="wd-assignment list-group-item p-0 mb-5 fs-5 border-gray">
          <ul id="wd-assignment-list">
            <table>
              <tbody>
                <tr>
                  <td></td>
                  <td></td>
                  <td>
                    <a className="wd-assignment-link"
                      href="#/Kanbas/Courses/1234/Assignments/124"
                      style={{ color: "black", textDecoration: "none" }}>
                      A2
                    </a>
                  </td>
                </tr>
                <tr>
                  <td><BsGripVertical className="me-2 fs-3" /></td>
                  <td><MdAssignmentAdd className="assignment-icon" style={{ fontSize: "2rem" }} /></td>
                  <td>
                    <p>
                      <span className="text-danger">Multiple Modules</span> |{" "}
                      <span style={{ fontWeight: "bold" }}>Not available until</span>{" "}
                      May 13 at 12:00am |
                    </p>
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td>
                    <p>
                      <span style={{ fontWeight: "bold" }}>Due</span> May 20 at
                      11:59pm | 100 pts
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="position-absolute" style={{top:"40px", right:"10px", fontSize:"1.5rem", transform: "scale(1.5)" }}>
                <LessonControlButtons />
            </div>
          </ul>
        </li>

        <li className="wd-assignment list-group-item p-0 mb-5 fs-5 border-gray">
          <ul id="wd-assignment-list">
            <table>
              <tbody>
                <tr>
                  <td></td>
                  <td></td>
                  <td>
                    <a className="wd-assignment-link"
                      href="#/Kanbas/Courses/1234/Assignments/125"
                      style={{ color: "black", textDecoration: "none" }}>
                      A3
                    </a>
                  </td>
                </tr>
                <tr>
                  <td><BsGripVertical className="me-2 fs-3" /></td>
                  <td><MdAssignmentAdd className="assignment-icon" style={{ fontSize: "2rem" }} /></td>
                  <td>
                    <p>
                      <span className="text-danger">Multiple Modules</span> |{" "}
                      <span style={{ fontWeight: "bold" }}>Not available until</span>{" "}
                      May 20 at 12:00am |
                    </p>
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td>
                    <p>
                      <span style={{ fontWeight: "bold" }}>Due</span> May 27 at
                      11:59pm | 100 pts
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="position-absolute" style={{top:"40px", right:"10px", fontSize:"1.5rem", transform: "scale(1.5)" }}>
                <LessonControlButtons />
            </div>
          </ul>
        </li>
      </ul>
    </div>
  );
}

