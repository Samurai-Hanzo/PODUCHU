import axios from "axios";
import React, { createContext, useContext, useReducer, useState } from "react";
import { API_CATEGORY, API_MENTORS } from "../consts";

export const mentorContext = createContext();

export const useMentor = () => useContext(mentorContext);

const INIT_STATE = {
    mentors: [],
    pages: 0,
    oneMentor: {},
    categories: [],
};

function reducer(state = INIT_STATE, action) {
    switch (action.type) {
        case "GET_MENTORS":
            return {
                ...state,
                mentors: action.payload.results,
                // pages: Math.ceil(action.payload.count / 6),
            };
        case "GET_CATEGORIES":
            return { ...state, categories: action.payload };
        case "GET_ONE_MENTOR":
            return { ...state, oneMentor: action.payload };
        default:
            return state;
    }
}

const MentorContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE);
    const [error, setError] = useState([]);

    async function getMentors() {
        try {
            const token = JSON.parse(localStorage.getItem("token"));
            const Authorization = `Bearer ${token.access}`;
            const config = {
                headers: {
                    Authorization,
                },
            };

            const res = await axios(
                `${API_MENTORS}${window.location.search}`,
                config
            );
            dispatch({
                type: "GET_MENTAPI_MENTORS",
                payload: res.data,
            });
        } catch (error) {
            setError(error);
        }
    }

    async function getCategories() {
        try {
            const token = JSON.parse(localStorage.getItem("token"));
            const Authorization = `Bearer ${token.access}`;
            const config = {
                headers: {
                    Authorization,
                },
            };
            const res = await axios(`${API_CATEGORY}`, config);
            dispatch({
                type: "GET_CATEGORIES",
                payload: res.data.results,
            });
        } catch (error) {
            console.log(error);
            setError(error);
        }
    }

    async function getOneMentor(id) {
        try {
            const token = JSON.parse(localStorage.getItem("token"));
            const Authorization = `Bearer ${token.access}`;
            const config = {
                headers: {
                    Authorization,
                },
            };
            const res = await axios(`${API_MENTORS}${id}/`, config);
            dispatch({
                type: "GET_ONE_MENTOR",
                payload: res.data,
            });
        } catch (e) {
            console.log(e);
            setError(e);
        }
    }

    const value = {
        mentors: state.mentors,
        pages: state.pages,
        categories: state.categories,
        oneMentor: state.oneMentor,

        getOneMentor,
        getCategories,
        getMentors,
    };

    return (
        <mentorContext.Provider value={value}>
            {children}
        </mentorContext.Provider>
    );
};

export default MentorContextProvider;
