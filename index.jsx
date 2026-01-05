const moodBoardNotes = {
  Japan: [
    "Lantern-lit alleys shimmer at dusk.",
    "Sakura confetti drifts past quiet shrines.",
    "Onsen steam sketches stars."
  ],
  Greece: [
    "Aegean blue hugs the caldera.",
    "White steps tumble toward the sea.",
    "Long lunches linger in olive shade."
  ],
  India: [
    "Monsoon rain cools the glowing streets.",
    "Temple bells braid through sunrise.",
    "Spice markets paint the air."
  ],
  Mexico: [
    "Marigold light gilds the plaza.",
    "Pacific surf sings at sundown.",
    "Street tacos power midnight strolls."
  ],
  Brazil: [
    "Samba spills into the night.",
    "Palm-fringed shores melt into sun.",
    "Carnival color keeps the beat."
  ],
  Antarctica: [
    "Penguin tracks write on ice.",
    "Cathedral glaciers burn blue.",
    "Polar hush makes the sky feel huge."
  ]
}

export function MoodBoardItem({ color, image, description }) {
  const defaultStyle = {
    backgroundColor: color
  }
  const subtitleLines = moodBoardNotes[description]

  return (
    <div className="mood-board-item" style={defaultStyle}>
      <img className="mood-board-image" src={image} alt={description} />        
      <div className="mood-board-text-block">
        <h3 className="mood-board-text">{description}</h3>
        <ul className="mood-board-subtitle">
          {subtitleLines?.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export function MoodBoard() {
  return (
    <div className="mood-board-shell">
      <h1 className="mood-board-heading">Destination Mood Board</h1>

      <div className="mood-board">
        <MoodBoardItem
          color="#d3493a"
          image="https://cdn.freecodecamp.org/curriculum/labs/pathway.jpg"
          description="Japan"
        />

        <MoodBoardItem
          color="#3b6fa5"
          image="https://cdn.freecodecamp.org/curriculum/labs/santorini.jpg"
          description="Greece"
        />

        <MoodBoardItem
          color="#f19537"
          image="https://cdn.freecodecamp.org/curriculum/labs/grass.jpg"
          description="India"
        />

        <MoodBoardItem
          color="#1b7a63"
          image="https://cdn.freecodecamp.org/curriculum/labs/shore.jpg"
          description="Mexico"
        />

        <MoodBoardItem
          color="#f1b932"
          image="https://cdn.freecodecamp.org/curriculum/labs/ship.jpg"
          description="Brazil"
        />

        <MoodBoardItem
          color="#7ab7d6"
          image="https://cdn.freecodecamp.org/curriculum/labs/pigeon.jpg"
          description="Antarctica"
        />
      </div>
    </div>
  )
}
