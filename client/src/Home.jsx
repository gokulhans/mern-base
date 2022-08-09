import { Link } from "react-router-dom";
import React from 'react'

function Home() {
  return (
    <div>
      <h1>Bookkeeper</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/create">Create</Link>
        <br />
        <Link to="/rud">Rud</Link>
      </nav>
    </div>
  )
}

export default Home