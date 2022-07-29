import { NavLink } from "react-router-dom";
import "./GalleryNavigation.css"

function GalleryNavigation(props) {

    const { galleries } = props;
    //console.log(galleries);

    return (
        <>
        <h1>Galleries</h1>
        <nav>
            <NavLink className="navLink" exact to="/">Home</NavLink>
            {galleries.map(gal => {
                return <NavLink className="navLink" key={gal.id} to={`/galleries/${gal.id}`}>{gal.name}</NavLink>
            })}
        </nav>
        </>
    )
}

export default GalleryNavigation;
