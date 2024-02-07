import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './Footer'
import Home from './Home'
import NavBar from './Navbar'

export default function App() {
  let [language, setLanguage] = useState("hi")
  let [search, setSearch] = useState("")

  let changeLanguage = (data) => {
    setLanguage(data)
  }
  let changeSearch = (data) => {
    setSearch(data)
  }

  return (
    <BrowserRouter>
      <NavBar changeLanguage={changeLanguage} changeSearch={changeSearch} />
      <Routes>
        <Route path='/' element={<Home search={search} language={language} q="All" />} />
        <Route path='/All' element={<Home search={search} language={language} q="All" />} />
        <Route path='/Politics' element={<Home search={search} language={language} q="Politics" />} />
        <Route path='/Science' element={<Home search={search} language={language} q="Science" />} />
        <Route path='/Technology' element={<Home search={search} language={language} q="Technology" />} />
        <Route path='/Education' element={<Home search={search} language={language} q="Education" />} />
        <Route path='/Crime' element={<Home search={search} language={language} q="Crime" />} />
        <Route path='/Sports' element={<Home search={search} language={language} q="Sports" />} />
        <Route path='/Cricket' element={<Home search={search} language={language} q="Cricket" />} />
        <Route path='/Entertainment' element={<Home search={search} language={language} q="Entertainment" />} />
        <Route path='/Jokes' element={<Home search={search} language={language} q="Jokes" />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

