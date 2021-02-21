import * as types from '../actions/actionTypes';

const initialState = {
    books: [
        { Name: "Book1", Description: "Description1", Author: "Author1", Count: "10", Publication: "Publication1" },
        { Name: "Book2", Description: "Description2", Author: "Author2", Count: "5", Publication: "Publication2" }
    ]
};

export default function libraryReducer(state = initialState, action) {
    switch (action.type) {
        case types.GET_ALL_BOOKS:
            return Object.assign({}, state, {
                books: action.books
            });
        case types.ADD_NEW_BOOK:
            return {
                ...state,
                books: [...state.books, action.bookProperties]
            }
        case types.EDIT_BOOK:
            return {
                ...state,
                books: state.books.map((item, index) => {
                    if (item.Name === action.bookProperties.Name) {
                        return {
                            ...item,
                            Description: action.bookProperties.Description,
                            Count: action.bookProperties.Count,
                            Author: action.bookProperties.Author,
                            Publication: action.bookProperties.Publication,
                        }
                    }
                    return item;
                })
            }
        default:
            return state;
    }
}