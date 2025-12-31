export function MoodBoardItem({ color, image, description }) {
  const defaultStyle = {
    backgroundColor: color
  }

  return (
    <div className="mood-board-item" style={defaultStyle}>
      <img className="mood-board-image" src={image} />
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
          color="#989829"
          image="https://cdn.freecodecamp.org/curriculum/labs/pathway.jpg"
          description="Pathway"
        />

        <MoodBoardItem
          color="#7e6967"
          image="https://cdn.freecodecamp.org/curriculum/labs/santorini.jpg"
          description="Santorini"
        />

        <MoodBoardItem
          color="#055bbe"
          image="https://cdn.freecodecamp.org/curriculum/labs/shore.jpg"
          description="Shore"
        />
      </div>
    </div>
  )
}