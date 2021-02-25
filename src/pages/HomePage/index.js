import React from 'react';
import '../../styles/styles.scss';
import TextContent from '../../components/homePageContent/TextContent';
import ImgContent from '../../components/homePageContent/ImgContent';

function HomePage() {
    return (
        <div className="content-page-wrapper">
            <TextContent />
            <ImgContent />
        </div>
    );
}
export default HomePage;
