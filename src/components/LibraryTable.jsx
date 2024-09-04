import LibraryRow from "./LibraryRow";

export default function LibraryTable({data, filter}) {
  return (
    <table id="library">
        <thead>
        <tr><th>Titolo</th><th>Durata</th><th>Brani</th><th>Data</th><th>Autore</th></tr>
        </thead>
        <tbody id="library-body">
          {data.filter(c => (!filter && c) || (c.type === filter)).map(c => <LibraryRow artwork={c.artwork} title={c.title} subtitle={c.subtitle} date={c.date} type={c.type} items={c.items} id={c._id}/>)}
        </tbody>
    </table>
  )
}