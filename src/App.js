import React from 'react';

import { BrowserRouter as Router ,Routes ,Route } from 'react-router-dom';

import AuthPage from './pages/AuthPage';
import ProfilePage from './pages/ProfilePage';
import CreatePoll from './pages/CreatePoll';
import PollsPage from "./pages/PollsPage";
import VotePage from "./pages/VotePage"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/auth" element={<AuthPage/>}/>
        <Route path="/profile" element={<ProfilePage/>}/>
        <Route path="/polls" element={<PollsPage/>}/>
        <Route path="/polls/create" element={<CreatePoll/>}/>
        <Route path="/polls/vote" element={<VotePage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
