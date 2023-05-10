import { Routes, Route, BrowserRouter, Link } from "react-router-dom";
import { Landing, Register, Error } from "../pages";

import styled from "styled-components";

import {
  AddJob,
  AllJob,
  Profile,
  SharedLayout,
  Stats,
} from "../pages/dashboard/index";
import ProtectorRoute from "../pages/ProtectorRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectorRoute>
              <SharedLayout />
            </ProtectorRoute>
          }
        >
          <Route index element={<Stats />}></Route>
          <Route path="stats" element={<Stats />}></Route>
          <Route path="all-jobs" element={<AllJob />}></Route>
          <Route path="add-job" element={<AddJob />}></Route>
          <Route path="profile" element={<Profile />}></Route>
        </Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/landing" element={<Landing />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
