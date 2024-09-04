export default function AlbumRow({item, artwork, subtitle, changeItem}) {
  return(
    <tr className="list-items" onClick={() => changeItem(item, artwork, subtitle)}>
      <td>{item.title}</td>
      <td>{item.length}</td>
    </tr>
  )
}