import img from '../imgs/globe.png'

export default function Header(props){
    return(
        <header className="header">
            <img src={img} alt='globe logo.' className="header--logo"/>
            <h2 className="header--title">my travel journal.</h2>
        </header>

    )
} 