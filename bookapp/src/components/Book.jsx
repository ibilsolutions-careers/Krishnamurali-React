import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Book = () => {
  const [books, setBooks] = useState([]);

  async function getData() {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      console.log(response.data)
      setBooks(response.data)
    } catch (error) {
      console.error('Error occurred while fetching', error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className='container'S>
      <div>
        {books.length > 0 ? (
          books.map((book) => (
            <div key={book.id}>
              <h3>{book.title}</h3>
              <p>price: ${book.price}</p>
              <p>Year: {book.category}</p>
              <img src={book.image}/>
              <p>rating: {book.rating?.rate},count { book.rating?.count}</p>
            </div>
          ))
        ) : (
          <p>No books</p>
        )}
      </div>
    </div>
  );
}

export default Book;
