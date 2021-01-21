import React, { Fragment } from 'react';
import Tex from '../Atomics/Text/Tex';

import './BigBanner.scss';

const BigBanner     = ({
    title           = 'Title',
    subTitle        = 'subTitle',
    paragraph         = 'Department your permission to use the information for the stated purpose. However, not providing certain information may result in the Department’s.',
    theme           = 'default'
}) => {
    return (
        <div className="bigBanner">
            <div className="wrapper">
                <>
                    <div className="body">
                        <Tex theme={'Heading1'} title={'Best Quotes From All Over The World'} ></Tex>
                        <h5>
                        <Tex theme={'Heading5'} title={paragraph} ></Tex>
                        </h5>
                        <p>
                            <Tex theme={'Paragraph'} title={paragraph} ></Tex>
                        </p>
                    </div>
                </>
            </div>
        </div>
        
    )
}


export default BigBanner;