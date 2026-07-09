export default function Tennis() {
  return (
    <div>
      <h1> Tennis</h1>
      <h2>The modern tennis game is played in singles(one player versus another), doubles(teams of two), and mixed doubles (mixed gender teams) and features a scoring across international events.</h2>
      <h3>Tennis has a long history, but the birth of the game played is thought to have taken place in England.</h3>

      <h4>The Grand Slams:</h4>
      <ul className="grand-slam--lists">
        <li>Australian Open</li>
        <li>French Open</li>
        <li>Wimbledon</li>
        <li>US Open</li>
      </ul>

      <div>
        <button role="tab" aria-busy='false'>Learn how to play</button>
        <button role="tab" aria-busy='false'>Watch Games</button>
        <button role="tab" aria-busy='true'>Buy Ticket</button>
        <button role="tab" aria-busy='false'>Find a team mate</button>
      </div>

      <div>
        <h4>How to play:</h4>
        <p>The players face each other on the opposite sides of the net.</p>
        <p>The ball is played back and forth over the tennis.</p>
      </div>

      <h4>The tennis court is a firm rectangular surface with a low <span role="textbox">net</span> stretched across the centre. </h4>
    </div>
  )
}
