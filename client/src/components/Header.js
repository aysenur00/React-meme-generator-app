export default function Header(){
    return (
        <header className="header">
            <img className="header--image" src={require(`../images/star2.png`)}></img>
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">React course project 3</h4>
        </header>
    )
}