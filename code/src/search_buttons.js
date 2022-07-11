export function SearchButtons (props) {
    return (
      <section className="search-buttons">
        <div className="separator">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z" className="shape-fill"></path>
            </svg>
        </div>
        <div className="buttons regular-width">
          <SearchButton value="types" pokecolor="grass" onClick={(filter_name) => props.handleFilter("types")}/>
          <SearchButton value="location" pokecolor="fire"/>
          <SearchButton value="moves and habilities" pokecolor="water"/>
        </div>
      </section>
    )
  }
  
  function SearchButton (props) {
    return (
      <button 
        className="btn round animate" 
        pokecolor={props.pokecolor} 
        onClick={props.onClick}>
        {props.value}
        <img 
          src={"./imgs/" + props.value.replaceAll (" ", "-") + "-btn.svg"}
          className="regular"
          />
      </button>
    )
  }