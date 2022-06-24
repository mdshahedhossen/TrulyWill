import React from 'react';
import Banner from './Banner';
import Carousel from './Carousel';
import ImportantQuestion from './ImportantQuestion';
import TruelySoluation from './TruelySoluation';
import Trust from './Trust';
import WhyChoose from './WhyChoose';
import Works from './Works';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ImportantQuestion></ImportantQuestion>
            <Carousel></Carousel>
            <TruelySoluation></TruelySoluation>
            <Works></Works>
            <WhyChoose></WhyChoose>
            <Trust></Trust>

        </div>
    );
};

export default Home;