import {useNavigate} from 'react-router-dom'


export default function LibraryRow({title, subtitle, type, date, items, artwork}) {
  const navigate = useNavigate()
  
  return (
    <tr><td>
      <div className="library-item">
      <img className="album" src={artwork} />
      <div className="description">
          <h1>{title}</h1>
          <p>{type}</p>
      </div>
    </div>
    </td>
      <td>{items.reduce((p, i) => p + i.length, 0)}</td>
      <td>{items.length}</td>
      <td>{date}</td>
      <td>{subtitle}</td>
    </tr>
  )
}