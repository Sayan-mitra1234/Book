import React from "react";
import { useState } from "react";
import axios from "axios";
import "./Book.css"

function Book() {
    const [text, setText] = useState("search for a book");
    const [book, setBook] = useState([]);
    const changetext = (event) => {
        setText(event.target.value)
    }
    const getBook = (e) => {
        e.preventDefault()
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${text}`).then((response) => {
            setBook(response.data.Search)
            console.log(response);
        })
    }
    return (

        <div>
            <div className="head">
                <h1 className="heading">BOOK SEARCH</h1>
            </div>
            <div >
                <div>
                    <form onSubmit={getBook}>
                        <input className="input" onChange={changetext} value={text} />
                        <button type="Submit" >Search</button>
                    </form>

                </div>

            </div>
            <div>

                {
                    book.map((value,index) => {
                        return (
                            <>
                                <div>
                                    <p>{value.kind}</p>
                                </div>

                                <div>
                                    <p>{value.id}</p>
                                </div>
                                <div>
                                    <p>{value.etag}</p>
                                </div>
                                <div>
                                    <p>{value.selfLink}</p>
                                </div>

                                <div>
                                    <p>{value.authors}</p>
                                </div>
                                <div>
                                    <img src={value.webReaderLink} alt="book" />
                                </div>

                            </>

                        )
                    })
                }
            </div>
        </div>
        
    );
}

export default Book;

