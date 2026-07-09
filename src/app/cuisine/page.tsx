'use client'

import { useState } from "react"

export default function Cuisine() {
  const [italianCuisine, setItalianCuisine] = useState(false)
  const [frenchCuisine, setFrenchCuisine] = useState(false)

  function italianCuisineHandler() {
    setItalianCuisine(true)
    setFrenchCuisine(false)
  }

  function frenchCuisineHandler() {
    setFrenchCuisine(true)
    setItalianCuisine(false)
  }

  return (
    <main>
      <h3>Click on your desired cuisine</h3>
      <div className="buttons">
        <button onClick={italianCuisineHandler} className="italianButton">Italian Cuisine</button>
        <button onClick={frenchCuisineHandler} className="frenchButton">French Cuisine</button>
      </div>

      {italianCuisine && (
        <div className="italianCuisine">
          <h2>Italian Cuisine</h2>
          <h4>Margarita</h4>
          <h4>Lasagna</h4>
          <h4>Fettucini Alfredo</h4>
          <h4>Bruschetta</h4>
        </div>
      )}

      {frenchCuisine && (
        <div className="frenchCuisine">
          <h2>French Cuisine</h2>

          <h4>Escargots</h4>
          <h4>Macrons</h4>
          <h4>Coq au vin</h4>
          <h4>French onion soup</h4>
        </div>
      )}
    </main>
  )
}
