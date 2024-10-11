import React from 'react';

import { BrowserRouter as Router ,Routes ,Route } from 'react-router-dom';

import { AuthProvider } from './components/Auth/AuthContext';
import ProtectedRoute from "./components/Auth/ProtectedRoute"
import Header from './components/Layouts/Header';
import AuthPage from './pages/AuthPage';
import ProfilePage from './pages/ProfilePage';
import CreatePoll from './pages/CreatePoll';
import PollsPage from "./pages/PollsPage";
import VotePage from "./pages/VotePage";
import PollResultPage from './pages/PollResultPage';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header/>
        <Routes>
          <Route path="/auth" element={<AuthPage/>}/>
          <Route path="/" element={<ProtectedRoute element={<PollsPage/>}/>}/>
          <Route path="/profile" element={<ProtectedRoute element={<ProfilePage/>}/>}/>
          <Route path="/polls/create" element={<ProtectedRoute element={<CreatePoll/>}/>}/>
          <Route path="/polls/vote/:pollId" element={<ProtectedRoute element={<VotePage/>}/>}/>
          <Route path="/polls/result/:pollId" element={<ProtectedRoute element={<PollResultPage/>}/>}/>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
