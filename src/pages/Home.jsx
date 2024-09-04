import { useEffect, useState } from "react";
import CardCarousel from "../components/CardCarousel";


export default function Home() {
  const [recommendations, setRecommendations] = useState(null)

  useEffect(() => {
    fetch("https://1436c56d-79df-4bf2-9318-7760bdc85522-00-1lwrllm2sopup.janeway.replit.dev/api/recommendations", {
      method: "get",
      headers: new Headers({
        "Content-Type": "application/json"
      })
    })
    .then(data => data.json())
    .then(data => setRecommendations(data.recommendation))
  }, [])

  return (
    <main id="main-content">
      {recommendations?.map(r => <CardCarousel title={r.title} collections={r.collections} key={r._id}/>)}
    </main>
  )
}