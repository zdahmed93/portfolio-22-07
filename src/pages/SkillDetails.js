import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function SkillDetails() {
  const [technologies, setTechnologies] = useState([])
  const [chosenTechnology, setChosenTechnology] = useState(null)
  const params = useParams()
  const skillId = params.id
  useEffect(() => {
    axios.get('https://devmastery-assets.vercel.app/technologies.json')
         .then((response) => { setTechnologies(response.data) })
         .catch((error) => {alert(error.message)})
  }, [])
  useEffect(() => {
    const technology = technologies.find(item => item.id == skillId)
    if (technology) {
      setChosenTechnology(technology)
    }
  }, [technologies])
  console.log("PARAMS:", params)
  return (
    <div>
      {chosenTechnology ? (
        <div style={{ textAlign: 'center' }} >
          <h1>{chosenTechnology.name}</h1>
          <img src={chosenTechnology.image} alt="" width="200px" />
          <p>{chosenTechnology.description}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default SkillDetails