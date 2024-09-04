import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AlbumTable from "./AlbumTable"

export default function AlbumDetails() {
  const [album, setAlbum] = useState(null)
  const {id} = useParams()

  useEffect(() => {
    fetch("https://APP_DOMAIN/api/collections/"+id, {
      method: "get",
      headers: new Headers({
        "Content-Type": "application/json"
      })
    })
    .then(res => res.json())
    .then(data => setAlbum(data.collection))
  }, [])

  return(
    <>
      {album && <AlbumTable data={album} />}
    </>
  )
}
