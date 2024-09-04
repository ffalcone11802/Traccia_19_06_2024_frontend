export default function AlbumRow({item, artwork, subtitle}) {
  return(
    <tr className="list-items">
      <td>{item.title}</td>
      <td>{item.length}</td>
    </tr>
  )
}
