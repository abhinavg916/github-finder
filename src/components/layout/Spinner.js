import React, { Fragment } from 'react';
import spinner from './spinner.gif';

const Spinner = () =>
    // No need of {} braces and return because when there's only one javascript element then return is required
        <Fragment>
            <img src={spinner} alt="Loading..." style={{width: '200px', margin: 'auto', display:'block'}} />
        </Fragment>
     
export default Spinner;
