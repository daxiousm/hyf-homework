import React from 'react'

const SearchBox = ( {searchChange} ) => {
    return (
        <div className='pa1 tc'>
            <form onSubmit={searchSubmitted}>
                <div className="pa2">
                    <input
                        className="pa3 ba b--green bg-lightest-blue"
                        type="text"
                        name="query"
                        placeholder='search users'
                    />
               </div>
            </form>
        </div>
    )
}

export default SearchBox
