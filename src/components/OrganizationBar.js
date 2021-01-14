function OrganizationBar({ filterByGreased, greasedState, setSortState, sortState }) {
    function handleGreasedChange() {
        filterByGreased(!greasedState)
    }

    function handleSort() {
        setSortState(!sortState)
    }

    return (
        <div>
            <p>Filter By:</p>
            <input type="checkbox" 
            id="greased" 
            checked={greasedState}
            onChange={handleGreasedChange}></input>
            <label htmlFor="greased">Greased</label>
            <p>Sort By:</p>
            <button onClick={handleSort}>{sortState ? "Weight" : "Name"}</button>
        </div>
    )
}

export default OrganizationBar