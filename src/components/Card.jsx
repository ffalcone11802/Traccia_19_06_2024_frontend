export default function Card({title, subtitle, artwork}) {
  return (
    <div className="card">
        <img className="album" src={artwork} />
        <h1>{title}</h1>
        <p>{subtitle}</p>
    </div>
  )
}