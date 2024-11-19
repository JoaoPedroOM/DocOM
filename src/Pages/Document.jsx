import React from 'react'
import Header from '../components/global/Header'
import Editor from "../components/editor/Editor"
import { useParams } from 'react-router-dom'

const Document = () => {
  return (
    <>
      <Header/>
      <Editor/>
    </>
  )
}

export default Document
