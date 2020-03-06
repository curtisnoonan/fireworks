import React, { Component } from 'react';
import { SearchBox } from './components/search-box/search-box.component';
import { CardList } from './components/card-list/card-list.component';
import './App.css';

class App extends Component{

  constructor(){
    super();
    this.state ={
      fireworks: [],
      searchField: ''
    };
  }

  componentDidMount(){
    const fireworksCatalog = {
      "seedFireworks": [
        {
          'id': '00',
          'name': 'Swords of Fire',
          'imgurl': 'https://fireworksoveramerica.com/wp-content/uploads/sites/3/2019/05/Swords-of-Fire-5783_large.png',
          'description': 'Golden brocade with blue stars, the blue and golden bouquets to a quickened 3-shot finale of brocade with crackling. 9 Shots.'
        },
        {
          'id': '01',
          'name': 'Ratta Tat Tat',
          'imgurl': 'https://fireworksoveramerica.com/wp-content/uploads/sites/3/2019/05/Brothers-Base-Jump-1394.png',
          'description': '4 candles and 2 effects in one pack. – Red Smoke, green smoke, blue smoke, yellow smoke, purple smoke. – red and blue parachutes.'
        },
        {
          'id': '02',
          'name': 'Swords of Fire',
          'imgurl': 'https://fireworksoveramerica.com/wp-content/uploads/sites/3/2019/05/BC-Ratta-tat-tat-2054_large.png',
          'description': 'This fountain emits large silver crackling chrysanthemums and a sharp whistle. Effect: 1. Whistle. 2. Silver crackles.'
        },
      ]
    }
    this.setState({
      fireworks: fireworksCatalog.seedFireworks
    });
  }

  handleChange = e => {
    this.setState({searchField: e.target.value})
  }

  render(){

    const { fireworks, searchField } = this.state;
    const filteredFireworks = fireworks.filter(firework =>
      firework.name.toLowerCase().includes(searchField.toLowerCase())
    )
    return (
      <div className="App">
      <h1>Fireworks!</h1>
      <SearchBox placeholder='Search Fireworks by Name' 
          handleChange={this.handleChange}/>
          <p><br></br></p>
        <CardList fireworks = {filteredFireworks}>
        </CardList>
      </div>
    );
  }
}

export default App;
