import Card from "./Card";

export default function CardCarousel({ title, collections }) {
  return (
    <section>
        <h1>{title}</h1>
        <div className="card-carousel">
          {collections.map(c => <Card title={c.title} subtitle={c.subtitle} artwork={c.artwork} key={c._id} />)}
        </div>
    </section>
  )
}