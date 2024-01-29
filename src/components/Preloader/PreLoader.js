import React, { useEffect } from 'react';
import './preloader.scss';
import { preLoaderAnim } from '../../animations';

const PreLoader = () => {

    useEffect (() => {
        preLoaderAnim()
    },[])
  return (
    <div className="preloader app__flex">
        <div className="texts-container">
            <span>Developer.</span>
            <span>Vibes.</span>
            <span>Inshallah.</span>
        </div>
    </div>
  )
}

export default PreLoader
