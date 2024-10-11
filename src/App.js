import React from 'react';

import { BrowserRouter as Router ,Routes ,Route } from 'react-router-dom';

import Header from './components/Layouts/Header';
import AuthPage from './pages/AuthPage';
import ProfilePage from './pages/ProfilePage';
import CreatePoll from './pages/CreatePoll';
import PollsPage from "./pages/PollsPage";
import VotePage from "./pages/VotePage";
import PollResultPage from './pages/PollResultPage';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/auth" element={<AuthPage/>}/>
        <Route path="/" element={<PollsPage/>}/>
        <Route path="/profile" element={<ProfilePage/>}/>
        <Route path="/polls/create" element={<CreatePoll/>}/>
        <Route path="/polls/vote/:id" element={<VotePage/>}/>
        <Route path="/polls/result/:id" element={<PollResultPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
