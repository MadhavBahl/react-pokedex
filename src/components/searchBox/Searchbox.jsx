import React from 'react';

import './searchbox.css';

export const Searchbox = ({ placeholder, searchFieldUpdate }) => (
    <input 
        className='search'
        type='search'
        placeholder={placeholder}
        onChange={e => {
            searchFieldUpdate(e.target.value);
        }}
    />
)