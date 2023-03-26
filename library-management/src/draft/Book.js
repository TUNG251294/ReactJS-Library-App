import React,{useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

export default function Book() {

    const [book, setBook] = useState({
        name: '',
        quantity: ''
    });
    const [books, setBooks] = useState([]);

      
    useEffect(() => {
        let initialBooks = JSON.parse(localStorage.getItem('books')) || [];
        setBook(initialBooks[initialBooks.length-1] || {});
        setBooks(initialBooks);
    },[books]);

    // const navigate = useNavigate();
    const handleChange = (key,value) => {
        setBook((prevBook) => ({...prevBook, [key]: value}))
    }
    const handleSubmit = e => {
        e.preventDefault();
      
        const newBook = {...book}
        const maxId = books.length === 0 ? 0 : books.reduce((max, book) => Math.max(max, book.id), 0);
        newBook.id = maxId + 1;
        // const newList = books;
        // newList.push(newBook);
        // không viết thế này được
        const newList = [...books, newBook]
       
        setBooks(newList);

      console.log("set book to localstorage" + JSON.stringify(newList))
        localStorage.setItem('books', JSON.stringify(newList))
    }

    return (
        <div className='App'>
            <h1>Library</h1>
            <form>
                <label htmlFor='name'>Tiêu đề</label>
                <input type='text' name = 'name' id ='name' onChange={(e) => handleChange(e.target.name, e.target.value)}/>
                <label htmlFor='quantity'>Số lượng</label>
                <input type='text' name = 'quantity' id ='quantity' onChange={(e) => handleChange(e.target.name, e.target.value)}/>
                <button type='button' onClick={handleSubmit}>Submit</button>
            </form>

            <h1>BOOK LIST</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map(book => (
                       <tr key={book.id}>
                            <td>{book.id}</td>
                            <td>{book.name}</td>
                            <td>{book.quantity}</td>
                            {/* <td><button onClick={() => nagative(`/edit/${book.id}`)}>Edit</button></td> */}
                            {/* <td><button onClick={() => nagative(`/delete/${book.id}`)}>Delete</button></td> */}
                       </tr> 
                    ))}
                    
                </tbody> 
            </table>
            

        </div>
    )
}

