import React from 'react'
import { Outlet } from 'react-router-dom'

const BlogLayout = () => {
  return (
    <div>
        <div>BlogLayout Erestun</div>
        <Outlet/> {/* deyisen hisse */}
        <div>Erestun</div>
    </div>
  )
}

export default BlogLayout