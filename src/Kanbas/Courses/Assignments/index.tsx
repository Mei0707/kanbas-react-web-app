import React, { useEffect, useState } from 'react';
import { FaPenSquare } from "react-icons/fa";
import { BsGripVertical } from "react-icons/bs";
import AssignmentsControls from "./AssignmentsControls";
import LessonControlButtons from "./LessonControlButtons";
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import * as coursesClient from "../client";
import * as assignmentsClient from "./client";
import { addAssignment, deleteAssignment, setAssignments, updateAssignment, editAssignment } from './reducer';
import AssignmentHeader from './AssignmentHeader';
import AssignmentControlButton from './AssignmentControlButton';

export default function Assignments() {
  const { cid } = useParams();
  const [assignmentTitle, setAssignmentTitle] = useState("");
  let { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const dispatch = useDispatch();

  const saveAssignment = async (assignment: any) => {
    await assignmentsClient.updateAssignment(assignment);
    dispatch(updateAssignment(assignment));
  };

  const removeAssignment = async (assignmentId: string) => {
    await assignmentsClient.deleteAssignment(assignmentId);
    dispatch(deleteAssignment(assignmentId));
  };

  const createAssignmentForCourse = async () => {
    if (!cid) return;
    const newAssignment = { title: assignmentTitle, course: cid };
    const assignment = await coursesClient.createAssignmentForCourse(cid, newAssignment);
    dispatch(addAssignment(assignment));
  };

  const fetchAssignments = async () => {
    const assignments = await coursesClient.findAssignmentsForCourse(cid as string);
    dispatch(setAssignments(assignments));
  };

  useEffect(() => {
    fetchAssignments();
  }, []);

  const filtered_assignments = assignments.filter((assignment: any) => assignment.course === cid);
  console.log(`filter assignment is ${JSON.stringify(filtered_assignments)} with cid ${cid}`)

  return (
    <div id="wd-assignments" className="container mt-4">
      <AssignmentsControls assignmentTitle={assignmentTitle} setAssignmentTitle={setAssignmentTitle}
        addAssignment={createAssignmentForCourse} />
      <AssignmentHeader />
      <br />
      <ul id="wd-assignment-list" className="list-group rounded-0" style={{ borderLeft: '4px solid green' }}>
        {assignments
          .map((assignment: any) => (
            <li className="wd-assignment-list-item list-group-item d-flex justify-content-between p-0 fs-5 border-gray">
              <div className="col-1 d-flex align-items-center justify-content-start">
                {/* <Link className="wd-assignment-link d-flex align-items-center p-2" to={`${assignment._id}`}> */}
                <BsGripVertical className="me-2 fs-3 " style={{ color: 'black' }} />
                <AssignmentControlButton
                      assignmentId={assignment._id}
                      editAssignment={(assignmentId) => dispatch(editAssignment(assignmentId))} />
              </div>
              <div className="col-7 pt-3 pb-3">
                <div><strong>
                {!assignment.editing && assignment.title} 
                {
                assignment.editing && (
                  <input className='form-control w-50 d-inline-block'
                    onChange={(e) => dispatch(
                      updateAssignment({ ...assignment, title: e.target.value })
                    )}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        saveAssignment({ ...assignment, editing: false });
                      }
                    }}
                    value={assignment.title} />
                )}</strong></div>
                <div>
                  <span className="text-danger">Multiple Modules</span> | <strong>Not available until</strong> {assignment.availableDate} |
                  <strong> Due</strong> {assignment.dueDate} | {assignment.points} pts
                </div>
              </div>
              <div className="col-3 d-flex align-items-center justify-content-end p-3">
                <LessonControlButtons
                  assignmentId={assignment._id}
                  deleteAssignment={(assignmentId) =>
                    removeAssignment(assignmentId)} />
              </div>
            </li>
          ))
        }
      </ul>
    </div>
  );
}


// interface Assignment {
//   _id: string;
//   title: string;
//   course: string;
//   description: string;
//   points: number;
//   dueDate: string;
//   availableDate: string;
//   availableUntil?: string;
//   editing?: boolean;
// }
// export default function Assignments() {
//   const { cid } = useParams();
//   const assignments = useSelector((state: any) => state.assignments.assignments);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const [assignmentTitle, setAssignmentTitle] = useState("");

//   const saveAssignment = async (assignment: any) => {
//     await assignmentsClient.updateAssignment(assignment);
//     dispatch(updateAssignment(assignment));
//   };

//   const removeModule = async (assignmentId: string) => {
//     await assignmentsClient.deleteAssignment(assignmentId);
//     dispatch(deleteAssignment(assignmentId));
//   };

//   const createAssignmentForCourse = async () => {
//     if (!cid) return;
//     const newAssignment = { title: assignmentTitle, course: cid };
//     const assignment = await coursesClient.createAssignmentForCourse(cid, newAssignment);
//     dispatch(addAssignment(assignment));
//   }
//   const fetchAssignments = async () => {
//     const assignments = await coursesClient.findAssignmentsForCourse(cid as string);
//     dispatch(setAssignments(assignments));
//   };
//   useEffect(() => {
//     fetchAssignments();
//   }, []);

//   const courseAssignments = assignments.filter((assignment: Assignment) => assignment.course === cid);

//   useEffect(() => {
//     console.log('Course Assignments:', courseAssignments);
//   }, [assignments, cid]);

//   const handleAddAssignment = async () => {
//     if (!cid) return;
//     await createAssignmentForCourse();
//     navigate(`/Kanbas/Courses/${cid}/Assignments/Editor`);
//   };

//   return (
    // <div id="wd-assignments" className="container mt-4">
    //   <AssignmentsControls onAddAssignment={handleAddAssignment} />
    //   <AssignmentsControls addAssignment={createAssignmentForCourse} />
    //   <br />
    //   <AssignmentHeader />
    //   <ul id="wd-assignment-list" className="list-group rounded-0" style={{ borderLeft: '4px solid green' }}>
    //     {courseAssignments.map((assignment : Assignment) => (
    //       <li key={assignment._id} className="wd-assignment-list-item list-group-item d-flex justify-content-between p-0 fs-5 border-gray">
    //         <div className="col-1 d-flex align-items-center justify-content-start">
    //           <Link className="wd-assignment-link d-flex align-items-center p-2" to={`${assignment._id}`}>
    //             <BsGripVertical className="me-2 fs-3 " style={{ color: 'black' }}/>
    //             <FaPenSquare className="fs-3 " style={{ color: 'green' }} />
    //           </Link>
    //         </div>
    //         <div className="col-7 pt-3 pb-3">
    //           <div><strong>{assignment.title}</strong></div>
    //           <div>
    //             <span className="text-danger">Multiple Modules</span> | <strong>Not available until</strong> {assignment.availableDate} |
    //             <strong> Due</strong> {assignment.dueDate} | {assignment.points} pts
    //           </div>
    //         </div>
    //         <div className="col-3 d-flex align-items-center justify-content-end p-3">
    //           <LessonControlButtons assignmentTitle={assignment.title} assignmentId={assignment._id}/>
    //           <button className='btn btn-danger ms-3' onClick={() => removeModule(assignment._id)}>
    //             Delete
    //           </button>
    //         </div>
    //       </li>
    //     ))}
    //   </ul>
    // </div>
//   );
// }




