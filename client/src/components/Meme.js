
import React from "react"

export default function Meme() {

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

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