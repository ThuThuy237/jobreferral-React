import React from 'react';
// import HomeFooter from '../components/HomeFooter/HomeFooter';
import MyHeader from '../Components/MyHeader';

export default function LayoutHome({children}) {
    return (
        <>
            <MyHeader/>
            {children}
            {/* <HomeFooter/> */}
        </>
    )
}
