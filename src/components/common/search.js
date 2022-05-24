import React from 'react'
import { Input } from "antd";


export const Search = (props) => {
    const { searchHandler } = props;
    return (
      <div>
        <Input placeholder='Search...' onChange={event => searchHandler(event.target.value)}/>
      </div>
    );
}

export default Search;
