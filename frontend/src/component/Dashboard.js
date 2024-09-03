import React from 'react'
import AddNotes from './AddNotes'

export default function Dashboard() {
  return (
    <div>
      Addyour notes
      <div className="notes">
        <AddNotes />
      </div>
    </div>
  )
}
