import React from 'react';
import Header from '../Components/common/Header/Header';

const AppLayout = (props) => {
    return (
        <>
            <Header />
            <div>{props.children}</div>
            <div><strong>Note: Please do not click back button</strong></div>
        </>
    );
}
export default AppLayout;