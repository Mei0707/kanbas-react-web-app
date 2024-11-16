import { BsGripVertical } from "react-icons/bs";
import { IoEllipsisVertical } from "react-icons/io5";
import {BsPlus} from "react-icons/bs"

export default function AssignmentControlButton() {
  return (
    <div className="d-title d-flex justify-content-between align-items-center p-3 ps-2 bg-secondary">
      <div className="d-flex">
        <BsGripVertical className="me-2 fs-3" />
        <a id="wd-assignments-title" className="h3 text-decoration-none">
          <strong>ASSIGNMENTS</strong>
        </a>
      </div>
      <div>
      <span className="col-2 p-2 fs-6 border border-1 border-secondary" style={{borderRadius: "50px"}}>40% of Total</span>
      <BsPlus className="fs-4"/>
      <IoEllipsisVertical className="fs-4" />
    </div> 
    </div>
  )
}