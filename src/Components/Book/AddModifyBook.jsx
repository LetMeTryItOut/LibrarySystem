import React, { useEffect, useState } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import * as types from '../../actions/actionTypes';

const AddEditBook = () => {
    const params = useParams();

    const RBooks = useSelector(state => state.libraryReducer.books, shallowEqual);
    let existingBookDetail;
    if (params.bookName != undefined) {
        existingBookDetail = RBooks.filter(book => {
            return book.Name == params.bookName
        });
    }
    const [bookProperties, setBookProperties] = useState({
        'Name': existingBookDetail !== undefined ? existingBookDetail[0].Name : "",
        'Description': existingBookDetail !== undefined ? existingBookDetail[0].Description : "",
        'Count': existingBookDetail !== undefined ? existingBookDetail[0].Count : "",
        'Author': existingBookDetail !== undefined ? existingBookDetail[0].Author : "",
        'Publication': existingBookDetail !== undefined ? existingBookDetail[0].Publication : ""
    });
    const [redirectURL, setRedirectURL] = useState("");

    const dispatch = useDispatch();

    const handleSubmitEvent = (e) => {
        let url = "/home";
        if (params.bookName !== undefined)
            dispatch({ type: types.EDIT_BOOK, bookProperties });
        else
            dispatch({ type: types.ADD_NEW_BOOK, bookProperties });
        setRedirectURL(url);
    }

    const handleBackEvent = (e) => {
        let url = "/home";
        setRedirectURL(url);
    }

    const handleInputChange = (e, controlType) => {
        console.log(e.currentTarget.value);
        let updatedValue = e.currentTarget.value;
        let newBookProperties = {
            'Name': bookProperties.Name,
            'Description': bookProperties.Description,
            'Author': bookProperties.Author,
            'Count': bookProperties.Count,
            'Publication': bookProperties.Publication
        };
        switch (controlType) {
            case "Name":
                newBookProperties['Name'] = updatedValue;
                break;
            case "Description":
                newBookProperties['Description'] = updatedValue;
                break;
            case "Author":
                newBookProperties['Author'] = updatedValue;
                break;
            case "Count":
                newBookProperties['Count'] = updatedValue;
                break;
            case "Publication":
                newBookProperties['Publication'] = updatedValue;
                break;
        }
        setBookProperties(newBookProperties);
    }

    let data = [];
    if (redirectURL !== "") {
        data.push(<Redirect to={{ pathname: redirectURL }} />);
    }
    else {
        data.push(
            <div key="AddBook" style={{ 'width': '100%' }}>
                <div>
                    <input type='button' onClick={(e) => handleBackEvent(e)} value="<<back" />
                </div>
                <form onSubmit={handleSubmitEvent}>
                    <div style={{ 'width': '50%', 'marginLeft': '20%', 'marginRight': '20%', 'marginTop': '2%' }}>
                        <div>
                            <label>Book Name:</label>
                            <input value={bookProperties.Name} disabled={params.bookName !== undefined}
                                onChange={(e) => handleInputChange(e, 'Name')} />
                        </div>
                        <div>
                            <label>Book Description:</label>
                            <input value={bookProperties.Description} onChange={(e) => handleInputChange(e, 'Description')} />
                        </div>
                        <div>
                            <label>Author:</label>
                            <input value={bookProperties.Author} onChange={(e) => handleInputChange(e, 'Author')} />
                        </div>
                        <div>
                            <label>Count:</label>
                            <input value={bookProperties.Count} onChange={(e) => handleInputChange(e, 'Count')} />
                        </div>
                        <div>
                            <label>Publication:</label>
                            <input value={bookProperties.Publication} onChange={(e) => handleInputChange(e, 'Publication')} />
                        </div>
                        <div>
                            <input type="submit" value="submit" />
                        </div>
                    </div >
                </form>
            </div>
        )
    }
    return (
        <>
            {data}
        </>
    )
}
export default AddEditBook;


