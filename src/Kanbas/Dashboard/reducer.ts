import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as db from "../Database"; // Adjust the path as needed

const initialState = {
    enrollments: db.enrollments,
};

const enrollmentSlice = createSlice({
        name: "enrollment",
        initialState,
        reducers: {
            fetchUserEnrollments: (state, { payload: user }) => {
                const enrollments = db.enrollments.filter((e) => e.user == user.userId)
                // console.log(`fetch enrollments ${enrollments} with userId ${user.userId.toString()}`)
                state.enrollments = enrollments
            },
            fetchAllEnrollments: (state) => {
                state.enrollments = db.enrollments
            },
            enrollCourse: (state, { payload: enrollment }) => {
                // Logic for enrolling in a course
                state.enrollments.push({
                    _id: (state.enrollments.length + 1).toString(), user:enrollment.user, course: enrollment.course  
                }) 
            },
            unenrollCourse: (state, { payload: enrollment }) => {
                // Logic for unenrolling from a course
                state.enrollments = state.enrollments.filter(
                    (e) => e._id !== enrollment._id
                );
            },
        },
    })


export const { enrollCourse, unenrollCourse, fetchUserEnrollments, fetchAllEnrollments } = enrollmentSlice.actions;

export default enrollmentSlice.reducer;

