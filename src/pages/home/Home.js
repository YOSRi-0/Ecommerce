import React from 'react';
import { Categories } from '../../components/categories/Categories';
import { Newsletter } from '../../components/newsletter/Newsletter';
import { Products } from '../../components/products/Products';
import { Slider } from '../../components/slider/Slider';

export const Home = () => {
    return (
        <>
            <Slider />
            <Categories bg="#e9ecef" />
            <Products filter="none" title="Popular Product" align="center" />
        </>
    );
};
