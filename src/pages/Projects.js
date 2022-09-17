import React from 'react'

const myProjects = [
  {
    title: 'Business Land',
    description: 'A simple landing page developed with HTML and CSS',
    url: 'https://business-land.vercel.app/'
  },
  {
    title: 'TODODM',
    description: 'A simple todo list developed with HTML, CSS and Javascript',
    url: 'https://todom-devmastery.vercel.app/'
  }
]

function Projects() {
  return (
    <div>
      {myProjects.map((item, index) => (
        <div style={{ padding: 20 }} >
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">{item.title}</h5>
              <p class="card-text">{item.description}</p>
              <a href={item.url} target='_blank' class="card-link">Preview</a>
            </div>
          </div>
        </div>
      ))}      
    </div>
  )
}

export default Projects