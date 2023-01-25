import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className="head">
        <h1>Header page</h1>
            
            <button><Link to="/form">Form Page</Link></button> <br/>
            <button><Link to="/list">List Page</Link> </button>
    </div>
  )
}
