import AlbumRow from "./AlbumRow"

export default function AlbumTable({data}) {
  return(
    <table id="albumDetails">
      <tbody>
        <tr className="data-row">
          <td rowSpan="4"><img src={data.artwork} /></td>
          <td><h1>{data.title}</h1></td>
        </tr>
        <tr className="data-row"><td>{data.type}</td></tr>
        <tr className="data-row"><td>{data.subtitle}</td></tr>
        <tr className="data-row"><td>{data.date}</td></tr>
        <tr className="data-row"><th><h3>Tracce</h3></th></tr>
        {data.items?.map(i => <AlbumRow item={i} artwork={data.artwork} subtitle={data.subtitle}/>)}
      </tbody>
    </table>
  )
}
