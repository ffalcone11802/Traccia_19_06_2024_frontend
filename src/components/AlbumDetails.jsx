import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AlbumTable from "./AlbumTable"

export default function AlbumDetails({updateItem}) {
  const [album, setAlbum] = useState(null)
  const {id} = useParams()

  const changeItem = function(i, artwork, subtitle) {
    updateItem({item: {title: i.title, length: i.length}, artwork: artwork, subtitle: subtitle})
  }

  useEffect(() => {
    fetch("https://1436c56d-79df-4bf2-9318-7760bdc85522-00-1lwrllm2sopup.janeway.replit.dev/api/collections/"+id, {
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
      {album && <AlbumTable changeItem={changeItem} data={album} />}
    </>
  )
}
