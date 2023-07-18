import memesData from "../memesData"
import React from "react"

    
    export default function Meme() {
        
        const [meme, setMeme] = React.useState({
            topText:"", 
            bottomText:"", 
            randomImage:"http://i.imgflip.com/1bij.jpg"
        })
        
        const [allMemeImages, setAllMemeImages] = React.useState(memesData)

        function handleClick(){
            const memes = allMemeImages.data.memes
            const randomIndex = Math.floor(Math.random()*memes.length)
            setMeme(prevState => ({
                ...prevState,
                randomImage: memes[randomIndex].url
            }))
        }

        return (
        <main>
            <div className="form">
                <input 
                className="form--input" 
                type="text" 
                placeholder="Enter meme text">
                </input>
                <input 
                className="form--input" 
                type="text" 
                placeholder="Enter meme text">
                </input>
                <button onClick={handleClick} className="form--button">
                    Get a new meme image 
                </button>
                
            </div>
            <img src={meme.randomImage} className="meme--image"></img>
        </main>
    )
}