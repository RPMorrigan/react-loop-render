import './App.css'

// EX 1: List of Names
const names = ["Alice", "Bob", "Charlie", "Diana", "Ethan"];

// EX 2: Favorite Foods
const favoriteFoods = ["Pizza", "Sushi", "Tacos", "Pasta", "Burgers"];

// X 3: Numbers as List Items
const numbers = [10, 20, 30, 40, 50];

// EX 4: Display Animal Emojis
const animals = ["🐶", "🐱", "🐰", "🐼", "🦊"];

// EX 5: Capitalizing Cities
const cities = ["london", "paris", "tokyo", "new york", "berlin"];

// EX 6: Button Colors
const colors = ["red", "blue", "green", "yellow", "purple"];

// EX 7: List of Books
const books = [
  "1984",
  "To Kill a Mockingbird",
  "The Great Gatsby",
  "Moby Dick",
  "Pride and Prejudice"
];

// EX 8: Filtering Numbers
const numArray = [54, 23, 67, 12, 2, 89, 103, 43];

function App() {
  return (
    <div className="container">
      <div className ="ex1 wrapper">
        <ul>
          {names.map((name) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
      </div>
      <div className ="ex2 wrapper">
          {favoriteFoods.map((food) => (
            <p key={food}>{food}</p>
          ))}
      </div>
      <div className ="ex3 wrapper">
        <ul>
          {numbers.map((number) => (
            <li key={number}>{number}</li>
          ))}
        </ul>
      </div>
      <div className ="ex4 wrapper">  
          {animals.map((animal) => (
            <div key={animal}>{animal}</div>
          ))}
      </div>
      <div className="ex5 wrapper">
        {cities.map((city) => (
          <p style={{textTransform: 'capitalize'}}>{city}</p>
        ))}
      </div>
      <div className ="ex6 wrapper">
        {colors.map((color) => (
          <button style={{background: color}}>
            {color}
          </button>
        ))}
      </div>
      <div className ="ex7 wrapper">
        {books.map((book) => (
          <h3>
            {book}
          </h3>
        ))}
      </div>
      <div className="ex8 wrapper">
        {numArray.filter((num) => (
          num > 50
        )) + " "}
      </div>

    </div>
  )
}

export default App
