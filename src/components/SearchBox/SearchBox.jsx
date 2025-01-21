import React from "react";

const SearchBox = ({value, onChange}) => {
    return (
        <div>
            <label>Find contacts by name
                <input
                    type="text"
                    value={value}
                    onChange={onChange}
                    placeholder="Search contacts"
                /></label>
        </div>
    );
};


export default SearchBox;