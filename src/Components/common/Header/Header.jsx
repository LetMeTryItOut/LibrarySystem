import React, { useState } from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import * as types from '../../../actions/actionTypes';
import { Redirect } from 'react-router-dom';

const Header = () => {

    //const RVisistedCities = useSelector(state => state.homeReducer.visitedCities, shallowEqual);
    //const RVisistedProducts = useSelector(state => state.homeReducer.visitedProducts, shallowEqual);
    const dispatch = useDispatch();
    const [redirectURL, setRedirectURL] = useState("");

    const handleRefreshClickEvent = () => {
        //dispatch({ type: types.RESET_COUNT });
        setRedirectURL("/");
    }

    let data = [];
    if (redirectURL !== "")
        data.push(<Redirect to={{ pathname: redirectURL }} />);

    data.push(<div key="header" style={{ backgroundColor: 'lightgrey', width: '100%', 'wordBreak': 'break-all' }}>
        <h3>Welcome to Your Library</h3>
    </div>);

    return (
        <>
            {data}
        </>
    );
}
export default Header;