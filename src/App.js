import "./App.css";
import { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component"

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],

      districts: [
        {
          id: 1,
          name: "Lalitpur",
        },
        {
          id: 2,
          name: "Kathmandu",
        },
        {
          id: 3,
          name: "Bhaktapur",
        },
        {
          id: 4,
          name: "Kavre",
        },

        {
          id: 5,
          name: "Lalitpur",
        },
        {
          id: 6,
          name: "Kathmandu",
        },
        {
          id: 7,
          name: "Bhaktapur",
        },
        {
          id: 8,
          name: "Kavre",
        },

        {
          id: 9,
          name: "Lalitpur",
        },
        {
          id: 10,
          name: "Kathmandu",
        },
        {
          id: 11,
          name: "Bhaktapur",
        },
        {
          id: 12,
          name: "Kavre",
        },
      ],

      searchField: ''
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((users) => this.setState({ monsters: users }))
      .catch((error) => console.log(error));
  }

  handleChange = (e)=>{
    this.setState({searchField: e.target.value})
  }

  render() {
    const { monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox placeholder="search monster" handleChange={this.handleChange} />
        <CardList districts={filteredMonsters} />{" "}
      </div>
    );
  }
}

export default App;
