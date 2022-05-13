import React, { useState } from 'react';
import { MDBCol, MDBIcon } from "mdbreact";
import Scroll from './Scroll';
import '../css/searchbar.css';
import SearchList from './SearchList';

function SearchUser({ details }) {

  const [searchField, setSearchField] = useState("");

  const filteredPersons = details.filter(
    person => {
      return (
        person
        .firstName
        .toLowerCase()
        .includes(searchField.toLowerCase()) ||
        person
        .sid
        .toLowerCase()
        .includes(searchField.toLowerCase())
      );
    }
  );
  

  const handleChange = e => {
    setSearchField(e.target.value);
  };

  function searchList() {
    return (
     
      <SearchList filteredPersons={filteredPersons} />
      
    );
  }

  return (
    <section className="garamond mt-0">
      {/* <div className="pa2">
        <input 
          className="pa3 bb br3 grow b--none bg-lightest-blue ma3"
          type = "search" 
          placeholder = "Search employee" 
          onChange = {handleChange}
        />
      </div>
      {searchList()} */}

      <MDBCol md="6">
        <div className="input-group md-form form-sm form-1 pl-0">
          <div className="input-group-prepend">
            <span className="input-group-text purple lighten-2 bgcolor" id="basic-text1">
              <MDBIcon className="text-white" size='lg' icon="search" />
            </span>
          </div>
          <input
            className="form-control my-0 py-1"
            type="search"
            placeholder="Search employee"
            aria-label="Search"
            onChange = {handleChange}
          />
        </div>
      </MDBCol>
    {searchList()}
    </section>
    
  );
}

export default SearchUser;