import React from 'react';
import Banner from './Banner';
import Carousel from './Carousel';
import ImportantQuestion from './ImportantQuestion';
import TruelySoluation from './TruelySoluation';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ImportantQuestion></ImportantQuestion>
            <Carousel></Carousel>
            <TruelySoluation></TruelySoluation>
        </div>
    );
};

export default Home;