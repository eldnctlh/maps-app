import React from 'react';
import styled from 'styled-components';

const Text = styled.div`
    text-align: center;
`;

const Link = styled.a`
    text-align: center;
    color: coral;
    display: block;
`;

const About = () => (
    <div>
        <Text>All information about author you can find in his CV:</Text>
        <Link href="https://drive.google.com/file/d/1Oh1AXgRUTFR_cWTSZotqlDXXxCmBoca_/view?usp=sharing">https://drive.google.com/file/d/1Oh1AXgRUTFR_cWTSZotqlDXXxCmBoca_/view?usp=sharing</Link>
    </div>
)

export default About;