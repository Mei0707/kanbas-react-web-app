import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchUserEnrollments, enrollCourse, unenrollCourse } from "./reducer";

export default function Dashboard(
  { courses, course, setCourse, addNewCourse,
    deleteCourse, updateCourse, enrolling, setEnrolling, updateEnrollment }: {
      courses: any[]; course: any; setCourse: (course: any) => void;
      addNewCourse: () => void; deleteCourse: (course: any) => void;
      updateCourse: () => void;
      enrolling: boolean; setEnrolling: (enrolling: boolean) => void;
      updateEnrollment: (courseId: string, enrolled: boolean) => void
    }) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  // const { enrollments } = db;
  const { enrollments } = useSelector((state: any) => state.enrollmentReducer);
  const dispatch = useDispatch();

  const isStudent = () => {
    return currentUser.role == 'STUDENT'
  }

  const [showAllCourses, setShowAllCourses] = useState(true);
  // useEffect(() => { console.log(`enrollments is ${enrollments}`) })

  const toggleEnrollmentView = () => {
    setShowAllCourses(!showAllCourses);
    dispatch(fetchUserEnrollments({ userId: currentUser._id }));
  };

  const handleEnroll = (courseId: any) => {
    dispatch(enrollCourse({ user: currentUser._id, course: courseId }));
  };

  const handleUnenroll = (courseId: string) => {
    dispatch(unenrollCourse({ user: currentUser._id, course: courseId }));
  };

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard
        {isStudent() && (
          <button className="enrollment-btn float-end btn btn-primary" onClick={() => setEnrolling(!enrolling)}>
            {enrolling ? 'My Courses' : 'All Courses'}
          </button>
        )}</h1>
      <br />
      <h5>New Course
        <button className="btn btn-primary float-end"
          id="wd-add-new-course-click"
          onClick={addNewCourse} > Add </button>
        <button className="btn btn-warning float-end me-2"
          onClick={updateCourse} id="wd-update-course-click">
          Update
        </button>
      </h5><br />
      <input value={course.name} className="form-control mb-2"
        onChange={(e) => setCourse({ ...course, name: e.target.value })} />
      <textarea value={course.description} className="form-control"
        onChange={(e) => setCourse({ ...course, description: e.target.value })} />
      <hr />
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {
            (showAllCourses ? courses : (courses))
              .map((course) => (
                <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                  <div className="card rounded-3 overflow-hidden">
                    <Link to={`/Kanbas/Courses/${course._id}/Home`}
                      className="wd-dashboard-course-link text-decoration-none text-dark" >
                      <img src="/images/reactjs.jpg" width="100%" height={160} />
                      <div className="card-body">
                        <h5 className="wd-dashboard-course-title card-title">
                          {enrolling && (
                            <button
                              onClick={(event) => {
                                event.preventDefault();
                                updateEnrollment(course._id, !course.enrolled);
                              }}
                              className={`btn ${course.enrolled ? "btn-danger" : "btn-success"} float-end`} >
                              {course.enrolled ? "Unenroll" : "Enroll"}
                            </button>
                          )}
                          {course.name} </h5>
                        <p className="wd-dashboard-course-title card-text overflow-y-hidden" style={{ maxHeight: 100 }}>
                          {course.description} </p>
                        <button className="btn btn-primary"> Go </button>
                        {/* {isStudent() && (
                          <div>
                            <button className="btn btn-warning me-2 float-end" onClick={()=>handleEnroll({course: course._id})}>
                              Enroll
                            </button>
                          </div>
                        )} */}
                        <button onClick={(event) => {
                          event.preventDefault();
                          deleteCourse(course._id);
                        }} className="btn btn-danger float-end"
                          id="wd-delete-course-click">
                          Delete
                        </button>
                        <button id="wd-edit-course-click"
                          onClick={(event) => {
                            event.preventDefault();
                            setCourse(course);
                          }}
                          className="btn btn-warning me-2 float-end" >
                          Edit
                        </button>

                      </div>
                    </Link>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
}