import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as db from "../Database"; // Adjust the path as needed

const initialState = {
    enrollments: db.enrollments,
    actualEnrollments: [] as any[],
};

const enrollmentSlice = createSlice({
        name: "enrollment",
        initialState,
        reducers: {
            fetchUserEnrollments: (state, { payload: user }) => {
                if (state.actualEnrollments.length == 0) {
                    console.log('here')
                    state.actualEnrollments = db.enrollments.filter((e) => e.user == user.userId)
                    state.enrollments = db.enrollments.filter((e) => e.user == user.userId)
                } else {
                    state.enrollments = state.actualEnrollments
                }
            },
            fetchAllEnrollments: (state) => {
                state.enrollments = db.enrollments
            },
            enrollCourse: (state, { payload: enrollment }) => {
                // Logic for enrolling in a course
                state.actualEnrollments.push({
                    _id: (state.enrollments.length + 1).toString(), user:enrollment.user, course: enrollment.course  
                }) 
            },
            unenrollCourse: (state, { payload: enrollment }) => {
                // Logic for unenrolling from a course
                state.actualEnrollments = state.enrollments.filter(
                    (e) => e._id !== enrollment._id
                );
            },
        },
    })


export const { enrollCourse, unenrollCourse, fetchUserEnrollments, fetchAllEnrollments } = enrollmentSlice.actions;

export default enrollmentSlice.reducer;

