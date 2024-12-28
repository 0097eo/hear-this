import React, { Component } from "react";
import RoomJoinPage from "./RoomJoinPage";
import CreateRoomPage from "./CreateRoomPage";
import {
  BrowserRouter as Router,
  Routes,  // Changed from Switch
  Route,
  Link,
  Navigate,  // Changed from Redirect
} from "react-router-dom";

export default class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <Routes>  {/* Changed from Switch */}
          <Route path="/" element={<p>This is the home page</p>} />  {/* Changed syntax */}
          <Route path="/join" element={<RoomJoinPage />} />  {/* Changed syntax */}
          <Route path="/create" element={<CreateRoomPage />} />  {/* Changed syntax */}
        </Routes>
      </Router>
    );
  }
}