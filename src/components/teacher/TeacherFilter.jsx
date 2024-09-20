const TeacherFilter = ({ searchItem, setSearchItem }) => {
  const handleInputChange = (e) => {
    e.preventDefault()
    setSearchItem(e.target.value)
    console.log(searchItem)
  }

  return (
    <div className="teacher-filter-form">
      <form>
        <div className="form-row align-items-center">
          <div className="col-auto my-1">
            <select
              className="custom-select mr-sm-2"
              id="inlineFormCustomSelect"
            >
              <option>Choose...</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div className="col-auto my-1" style={{ flex: 1 }}>
            <input
              type="text"
              className="form-control"
              placeholder="Search..."
              value={searchItem}
              onChange={handleInputChange}
            />
          </div>
        </div>
      </form>
    </div>
  )
}

export default TeacherFilter
