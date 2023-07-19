import memesData from "../memesData"
import React from "react"

/**
     * Challenge: 
     * 1. Set up the text inputs to save to
     *    the `topText` and `bottomText` state variables.
     * 2. Replace the hard-coded text on the image with
     *    the text being saved to state.
     */

export default function Meme() {
    
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })
    console.log(meme)
    const [allMemeImages, setAllMemeImages] = React.useState(memesData)

    function handleClick() {
        const memes = allMemeImages.data.memes
        const randomIndex = Math.floor(Math.random() * memes.length)
        setMeme(prevState => ({
            ...prevState,
            randomImage: memes[randomIndex].url
        }))
    }
    function handleChange(event) {
        const { name, value } = event.target
        setMeme((prevData)=>{
            return{
                ...prevData,
                [name]: value
            }
        })
    }


    return (
        <main>
            <div className="form">
                <input
                    className="form--input"
                    type="text"
                    placeholder="Enter meme text"
                    name="topText"
                    onChange={handleChange}
                />
                <input
                    className="form--input"
                    type="text"
                    placeholder="Enter meme text"
                    name="bottomText"
                    onChange={handleChange}
                />
                <button onClick={handleClick} className="form--button">
                    Get a new meme image
                </button>

            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}