

function SearchBar(props){

    return (
            <form>
                <label>Enter Your Email to Search Your Questions:</label>
                <br/>
                <input type="email" placeholder="example@domain.com"
                    onChange={
                        (e) => props.handleSearch(e, e.target.value)
                    } />
                {/* <input type="submit" /> */}
            </form>
    )
}

export default SearchBar