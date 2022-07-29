import { useParams, Link } from "react-router-dom";
import "./Des.css";

function ArtDescription(props) {
    const {gallery} = props;
    const { galleryId, artId } = useParams();
    // eslint-disable-next-line
    const info = gallery.objects.find(obj => obj.images[0].imageid == artId);
    const images = info.images;

    console.log(gallery);
    console.log("check this out", info);

    return (
        <div className="description">
            <Link to={`/galleries/${galleryId}`}>Back to {gallery.name} Gallery</Link>
            <p>Title: {info.title}</p>
            <p>Description: {info.description}</p>
            <p>Technique: {info.technique}</p>
            <p>Date: {info.century}</p>
            <p>Credit: {info.creditline}</p>

            <div className="artContainer">
                {images.map(img => {
                    console.log("a", img.baseimageurl);
                    return <img className="artLarge" src={img.baseimageurl} alt={`${info.title}`}/>
                })}
            </div>

            <a href={`${info.url}`}>Offical Site</a>
        </div>
    );
}

export default ArtDescription;
