import React from 'react';
import { Route, Routes } from 'react-router-dom';
import List from "./pages/list";
import Detail from './pages/detail';

function App() {
  return (
    <div>
      <header>This is header</header>
      <Routes>      
        <Route path="/list" element={<List/>} />
        <Route path="/detail:detail_id" element={<Detail/>} />
      </Routes>
    </div>
  );
}

export default App;