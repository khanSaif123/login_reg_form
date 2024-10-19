import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <div>Home</div>
        <button >
            <Link to="/login">
                Log Out
            </Link>
        </button>
    </div>
  )
}

export default Home