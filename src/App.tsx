import React from 'react';
import { HashRouter, Routes, Route } from "react-router-dom";
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { ServiceDetail } from './pages/ServiceDetail';
export function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services/:slug" element={<ServiceDetail />} />
        </Route>
      </Routes>
    </HashRouter>);

}