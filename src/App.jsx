import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Stack } from "@mui/material";
import Example from "./Example";
import About from "./components/pages/About";
import Header from "./components/templetes/Header";
import Footer from "./components/templetes/Footer";
import MentorProfile from "./components/pages/MentorProfile";
import Contact from "./components/pages/Contact";

// GraphQL&GraphCMSの例はExampleファイルに移行しました。

function App() {
  return (
    <Stack>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<About />} />
            <Route path="/mentorProfile" element={<MentorProfile />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/example" element={<Example />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </Stack>
  );
}

export default App;
