import React from 'react'
import Header from '../components/global/Header'
import Editor from "../components/editor/Editor"
import { useParams } from 'react-router-dom'
import { useQuery } from 'convex/react'
import { api } from '../../convex/_generated/api'

const Document = () => {
  const {id} = useParams()
  const document = useQuery(api.queries.getDocumentById, { documentId: id });

  return (
    <>
      <Header document={document} identicador={id}/>
      <Editor/>
    </>
  )
}

export default Document
