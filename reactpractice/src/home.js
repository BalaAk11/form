import React from 'react'
import {Link} from 'react-router-dom'
function Home() {
  return (
    <div>Home

        <br/>
       <Link to='/about'>About</Link><br/>
       <Link to='/product'>Product</Link>
       <br/>
       <Link to='/test'>Test</Link>

    </div>
  )
}

export default Home