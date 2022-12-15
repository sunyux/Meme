import React, { useEffect,useState}  from 'react';
import styles from '../Meme/MemeStyles.module.css';
import { useNavigate} from 'react-router-dom'; 

export const Meme = () => {

    const [memes, setMemes] = useState([]);
    const [memeNum, setMemeNum] =useState(0);
    const [caption, setCaption] =useState([]);//array of string, add caption at meme

    const navigate = useNavigate();


 //get meme from api
useEffect(() => {
        fetch('https://api.imgflip.com/get_memes').then(res => {
          res.json().then(res => {
            const memes=res.data.memes;
            RandomMemes(memes);
            setMemes(memes);
          });
        });
      }, []);
//work for skip button, 
const RandomMemes = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * i);
          const temp = array[i];
          array[i] = array[j];
          array[j] = temp;
        }
      };

//Recording the user input
    const updateCaption =(e, index) => {
        const text=e.target.value || '';
        setCaption(
            caption.map((c,i) => {
                if(index === i)
                {
                    return text;
                }else
                {
                    return c;
                }
            })
        )
    }
    //get API_ID and API_KEP from env
    const {REACT_APP_API_ID,REACT_APP_API_KEY} =process.env;
    //add caption to the image

    const captionMeme =() =>{
        const current=memes[memeNum];
        const formData=new FormData();

        formData.append('template_id', current.id );
        formData.append('username', REACT_APP_API_ID);
        formData.append('password', REACT_APP_API_KEY);
        caption.forEach((c, index) => formData.append(`boxes[${index}][text]`, c));


        fetch('https://api.imgflip.com/caption_image',
        {
            method:'POST',
            body: formData
        }).then(res =>{
            res.json().then(res=>{
                navigate(`/about?url=${res.data.url}`
                //use ` not '' !!!!!!!!!!!!
            );
        });
    });

    };


     
    
   


    //get how many caption for this image
    useEffect(() =>{

        if(memes.length)
        {
            setCaption(Array(memes[memeNum].box_count).fill(''));
        }
    },[memeNum,memes]);

    useEffect(() =>{
        console.log(caption);
    },[caption]);


    //the page look like
    return (
        memes.length ? 
        <div className={styles.gap}>
            <button onClick={() => setMemeNum(memeNum+1)}
            className={styles.skip}>Skip</button>
             <button onClick={captionMeme}
            className={styles.generate}>Generate</button>
            {
                caption.map((c,index)=>(
                    <input placeholder="Please type text here"  onChange={(e) =>updateCaption(e,index)} Key={index}/>
                ))
            }
            <img alt='meme' src={memes[memeNum].url}/>
        </div> : 
        <></>
    );
}
