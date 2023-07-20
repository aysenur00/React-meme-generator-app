import memesData from "../memesData"
import React from "react"

/**
     * Challenge: 
     * As soon as the Meme component loads the first time,
     * make an API call to "https://api.imgflip.com/get_memes".
     * 
     * When the data comes in, save just the memes array part
     * of that data to the `allMemes` state
     * 
     * Think about if there are any dependencies that, if they
     * changed, you'd want to cause to re-run this function.
     * 
     * Hint: for now, don't try to use an async/await function.
     * Instead, use `.then()` blocks to resolve the promises
     * from using `fetch`. We'll learn why after this challenge.
     */

export default function Meme() {

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })
    console.log(meme)
    const [allMemes, setAllMemes] = React.useState([])

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))

    }, [])
    function handleClick() {

        if (allMemes.length > 0) {
            const randomIndex = Math.floor(Math.random() * allMemes.length)
            setMeme(prevState => ({
                ...prevState,
                randomImage: allMemes[randomIndex].url
            }))
        }
    }
    function handleChange(event) {
        const { name, value } = event.target
        setMeme((prevData) => {
            return {
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
                <img src={meme.randomImage} className="meme--image" alt="meme" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}