import React from 'react';
import {Component}from 'react';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

class Search extends React.Component {

    state={
        searchText:'',
        amount:15,
        apiUrl:'https://pixabay.com/api',
        apiKey:'10573179-5fe3c55bc0409172c4f17e306',
        images:[]
    }

  render() {
    return (
      <div>

        <TextField       
            name='SearchText' value={this.state.searchText} 
            onChange={this.onTextChange}
            floatingLabelText='Search for images..'
            fullWidth={true}
        />
        <br/>

        <SelectField     
            name='amount'
            floatingLabelText='Amount'
            value={this.state.amount}
            onChange={this.onAmountChange}
        >
            <MenuItem value="">
            <em>None</em>
            </MenuItem>
            <MenuItem value={5}>Ten</MenuItem>
            <MenuItem value={10}>Twenty</MenuItem>
            <MenuItem value={15}>Thirty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
            <MenuItem value={50}>Thirty</MenuItem>
        </SelectField>

          <br/>
      </div>
    )
  }
}

export default Search;
