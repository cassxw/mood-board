export function MoodBoardItem({ color, image, description }) {
  const defaultStyle = {
    backgroundColor: color
  }

  return (
    <div className="mood-board-item" style={defaultStyle}>
      <img className="mood-board-image" src={image} alt={description} />
      <h3 className="mood-board-text">{description}</h3>
    </div>
  )
}

export function MoodBoard() {
  return (
    <div>
      <h1 className="mood-board-heading">Destination Mood Board</h1>

      <div className="mood-board">
        <MoodBoardItem
          color="#d3493a"
          image="https://cdn.freecodecamp.org/curriculum/labs/pathway.jpg"
          description="Japan - Kyoto Lantern Walk"
        />

        <MoodBoardItem
          color="#3b6fa5"
          image="https://cdn.freecodecamp.org/curriculum/labs/santorini.jpg"
          description="Greece - Aegean Calm"
        />

        <MoodBoardItem
          color="#f19537"
          image="https://cdn.freecodecamp.org/curriculum/labs/grass.jpg"
          description="India - Monsoon Meadow"
        />

        <MoodBoardItem
          color="#1b7a63"
          image="https://cdn.freecodecamp.org/curriculum/labs/shore.jpg"
          description="Mexico - Pacific Sunset"
        />

        <MoodBoardItem
          color="#f1b932"
          image="https://cdn.freecodecamp.org/curriculum/labs/ship.jpg"
          description="Brazil - Coastal Carnival"
        />

        <MoodBoardItem
          color="#7ab7d6"
          image="https://cdn.freecodecamp.org/curriculum/labs/pigeon.jpg"
          description="Antarctica - Penguin Horizon"
        />
      </div>
    </div>
  )
}
