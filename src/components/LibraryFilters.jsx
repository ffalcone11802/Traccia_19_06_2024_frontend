export default function LibraryFilters({ handleFilter }) {
  return (
    <div id="filter">
        <button id="all-btn" onClick={() => handleFilter()}>All</button>
        <button id="playlist-btn" onClick={() => handleFilter('Playlist')}>Playlist</button>
        <button id="album-btn" onClick={() => handleFilter('Album')}>Album</button>
    </div>
  )
}