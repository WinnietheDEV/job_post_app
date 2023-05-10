import {
  DISPLAY_ALERT,
  HIDE_ALERT,
  REGISTER_USER_BEGIN,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
  LOGIN_USER_BEGIN,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  TOGGLE_SIDEBAR,
  TOGGLE_DROPDOWN,
  LOGOUT,
  UPDATE_USER_BEGIN,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_ERROR,
  HANDLE_CHANGE,
  CLEAR_VALUE,
  ADD_JOB_BEGIN,
  ADD_JOB_SUCCESS,
  ADD_JOB_ERROR,
  GET_JOBS_BEGIN,
  GET_JOBS_SUCCESS,
} from "./actions";
import { initialState } from "./appContext";

const reducer = (state, action) => {
  if (action.type === DISPLAY_ALERT) {
    return {
      ...state,
      showAlert: true,
      alertType: "danger",
      alertText: "please provide all information",
    };
  }
  if (action.type === HIDE_ALERT) {
    return {
      ...state,
      showAlert: "false",
      alertText: "",
      alertType: "",
    };
  }
  if (action.type === REGISTER_USER_BEGIN) {
    return { ...state, isLoading: true };
  }

  if (action.type === REGISTER_USER_SUCCESS) {
    const { user, location, token } = action.payload;
    return {
      ...state,
      isLoading: false,
      user,
      token,
      userLocation: location,
      jobLocation: location,
      showAlert: true,
      alertType: "success",
      alertText: "User Created! Redirecting...",
    };
  }

  if (action.type === REGISTER_USER_ERROR) {
    const { msg } = action.payload;
    return {
      ...state,
      alertText: msg,
      alertType: "danger",
      isLoading: false,
      showAlert: true,
    };
  }
  if (action.type === LOGIN_USER_BEGIN) {
    return { ...state, isLoading: true };
  }

  if (action.type === LOGIN_USER_SUCCESS) {
    const { user, token, location } = action.payload;
    return {
      ...state,
      user,
      token,
      userLocation: location,
      jobLocation: location,
      isLoading: false,
      alertType: "success",
      alertText: "logging in, wait for redirecting...",
      showAlert: true,
    };
  }

  if (action.type === LOGIN_USER_ERROR) {
    return {
      ...state,
      isLoading: false,
      alertType: "danger",
      alertText: action.payload.msg,
      showAlert: true,
    };
  }
  if (action.type === TOGGLE_SIDEBAR) {
    return { ...state, showSidebar: !state.showSidebar };
  }

  if (action.type === TOGGLE_DROPDOWN) {
    return { ...state, dropDown: !state.dropDown };
  }

  if (action.type === LOGOUT) {
    return {
      ...initialState,
      user: null,
      token: null,
      userLocation: null,
      jobLocation: null,
      dropDown: false,
    };
  }

  if (action.type === UPDATE_USER_BEGIN) {
    return { ...state, isLoading: true };
  }
  if (action.type === UPDATE_USER_SUCCESS) {
    const { user, location, token } = action.payload;
    return {
      ...state,
      user,
      token,
      userLocation: location,
      jobLocation: location,
      isLoading: false,
      showAlert: true,
      alertType: "success",
      alertText: "User Profile Updated",
    };
  }

  if (action.type === UPDATE_USER_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "danger",
      alertText: action.payload.msg,
    };
  }

  if (action.type === HANDLE_CHANGE) {
    console.log(action.payload.name);
    return { ...state, [action.payload.name]: action.payload.value };
  }

  if (action.type === CLEAR_VALUE) {
    return {
      ...state,
      isEditing: false,
      editJobId: "",
      position: "",
      company: "",
      jobType: "full-time",
      status: "pending",
      jobLocation: state.userLocation,
    };
  }

  if (action.type === ADD_JOB_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "danger",
      alertText: action.payload.msg,
    };
  }

  if (action.type === ADD_JOB_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }

  if (action.type === ADD_JOB_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "success",
      alertText: "job added",
    };
  }

  if (action.type === GET_JOBS_BEGIN) {
    return { ...state, isLoading: true, showAlert: false };
  }

  if (action.type === GET_JOBS_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      jobs: action.payload.jobs,
      totalJobs: action.payload.totalJobs,
      numOfPages: action.payload.numOfPages,
    };
  }
  return state;
};

export { reducer };
