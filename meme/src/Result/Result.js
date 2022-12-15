import React,{useState} from 'react';
import styles from'./Result.module.css';
import { useNavigate, useLocation } from 'react-router-dom';
import {useClipboard} from 'use-clipboard-copy';

export const Result = () => {

    const [copied, setCopied] =useState(false);
    const clipboard =useClipboard();
    const navigate=useNavigate();
    const location = useLocation();
    const url=new URLSearchParams(location.search).get('url');

    //use library react-use-clipboard make user can copy
    const copyLink =() =>{
        clipboard.copy(url);
        setCopied(true);
    }

    return(
        <div className={styles.gap}>
            <button onClick={()=>navigate('/')} className={styles.home}>
                Make more memes
            </button>
            {url && <img alt='meme' src={url} />}
            <button onClick={copyLink} className={styles.copy}>
                {copied ? 'Link copied!' : 'Copy link'}
            </button>
      </div>
    )

};
