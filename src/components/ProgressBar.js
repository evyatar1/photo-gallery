import React, { useEffect} from 'react';
import UseStorage from '../hooks/useStorage';

const ProgressBar = ( { file , setFile }) => {
   const { url , progress } = UseStorage(file);
   useEffect(() => {
     if(url){
         setFile(null);
     }
   } , [url, setFile])
   
    return (
        <div className = "progress-bar" style = {{width: progress + '%' }}> </div>
    )
}

export default ProgressBar;

