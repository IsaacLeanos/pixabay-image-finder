import React from 'react';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import axios from 'axios';
import ImageResults from '../image-result/ImageResults';

class Search extends React.Component {

    state={
        searchText:'',
        amount:15,
        apiUrl:'https://pixabay.com/api',
        apiKey:process.env.REACT_APP_API_KEY,
        images:[]
    };

    onTextChange=(e)=>{
        const value=e.target.value;
        this.setState({[e.target.name]:value},()=>{
            if(value===''){
                this.setState({images:[]});
            }else{
                axios.get(`${this.state.apiUrl}/?key=${this.state.apiKey}&q=${this.state.searchText}&image_type=photo
                &per_page=${this.state.amount}&safesearch=true`)
                .then(res=>this.setState({images:res.data.hits}))
                .catch(e=>console.log('error',e));
            }
        });
    };

    onAmountChange=(e,index,value)=>this.setState({amount:value});

  render() {
    console.log('Nican',this.state.apiKey)  
    return (
      <div>

        <TextField       
            name='searchText'
            value={this.state.searchText} 
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
            <MenuItem value={5} primaryText={5}/>
            <MenuItem value={10} primaryText={10}/>
            <MenuItem value={15} primaryText={15}/>
            <MenuItem value={30} primaryText={30}/>
            <MenuItem value={50} primaryText={50}/>
        </SelectField>
          <br/>

          {this.state.images.length>0?<ImageResults images={this.state.images}/>:null}

      </div>
    )
  }
}

export default Search;
