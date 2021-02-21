import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import * as types from '../../actions/actionTypes';

const Home = () => {

    const [redirectURL, setRedirectURL] = useState("");

    const RBooks = useSelector(state => state.libraryReducer.books, shallowEqual);
    const [allBooks, setAllBooks] = useState(RBooks);
    const handleBookEvent = (e, bookName) => {
        let url = "/book/" + bookName;
        setRedirectURL(url);
    }
    let allbooks = allBooks;
    const handleSearchEvent = (e) => {
        allbooks = RBooks.filter(book => {
            return book.Name.toLowerCase().indexOf(e.currentTarget.value.toLowerCase()) > -1
        });
        setAllBooks(allbooks);
    }

    const handleAddEvent = (e) => {
        let url = "/AddBook/";
        setRedirectURL(url);
    }

    let data = [];
    if (redirectURL !== "") {
        data.push(<Redirect to={{ pathname: redirectURL }} />);
    }
    else {
        data.push(
            <div key="home">
                <div key="HomeBody">
                    <div>
                        <input placeholder="search by book name" onChange={(e) => handleSearchEvent(e)} />
                        <button onClick={(e) => handleAddEvent(e)}>Add new book</button>
                    </div>
                    <div style={{ 'border': '2px grey solid', 'marginTop': '5px' }}>
                        <div key={"bookHeader"} style={{ 'display': 'inline-flex', 'marginTop': '1%', width: '100%', 'backgroundColor': 'lightgrey' }}>
                            <h5 style={{ 'cursor': 'pointer', width: '20%', 'wordBreak': 'break-word' }}>Name</h5>
                            <h5 style={{ width: '20%', 'wordBreak': 'break-word' }}>Description</h5>
                            <h5 style={{ width: '20%', 'wordBreak': 'break-word' }}>Author</h5>
                            <h5 style={{ width: '20%', 'wordBreak': 'break-word' }}>Count</h5>
                            <h5 style={{ width: '20%', 'wordBreak': 'break-word' }}>Publication</h5>
                        </div>
                        {allbooks.map((item, index) => {
                            return (
                                <div key={"book" + index} style={{ 'display': 'inline-flex', 'marginTop': '1%', width: '100%' }}>
                                    <div style={{ 'cursor': 'Pointer', width: '20%', 'wordBreak': 'break-word' }} onClick={(e) => handleBookEvent(e, allBooks[index].Name)}>{allBooks[index].Name}</div>
                                    <div style={{ width: '20%', 'wordBreak': 'break-word' }}>{allbooks[index].Description}</div>
                                    <div style={{ width: '20%', 'wordBreak': 'break-word' }}>{allbooks[index].Author}</div>
                                    <div style={{ width: '20%', 'wordBreak': 'break-word' }}>{allbooks[index].Count}</div>
                                    <div style={{ width: '20%', 'wordBreak': 'break-word' }}>{allbooks[index].Publication}</div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        )
    }
    return (
        <>
            {data}
        </>
    )
}
export default Home;