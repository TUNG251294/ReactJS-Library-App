import React,{useState, useEffect} from 'react';
import axios,{HttpStatusCode} from 'axios';

export default function BookStore() {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        loadBooks();
      }, []);
      
      const loadBooks = async () => {
        try {
          const res = await axios.get("http://localhost:8080/book/list");
          console.log(res.status);
          console.log(res.data);
          if (res.status === HttpStatusCode.Ok) {
            setBooks(res.data);
          }
        } catch (err) {
          console.log(err);
          throw err;
        }
      };
    return (
        <div>
            <table>
            <tr>
                <th>Id</th>
                <th>Book Name</th>
                <th>Quantity</th>
            </tr>
            {books.map(book => (
                <tr>
                    <td style={{color: 'black'}}>{book.id}</td>
                    <td style={{color: 'blue'}}>{book.name}</td>
                    <td style={{color: 'black'}}>{book.quantity}</td>
                </tr>
            ))}
            
        </table>
        </div>
    )
}

