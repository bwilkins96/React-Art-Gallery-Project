import "./Art.css"
import { Link, useParams } from "react-router-dom";

function ArtImageTile(props) {
    const { image } = props;
    const { galleryId } = useParams();
    let firstSrc; let firstAlt = "none found :(";
    let className = "art";

    let i = 0;
    while (!firstSrc && i < image.length) {
        firstSrc = image[i].baseimageurl;
        firstAlt = image[i].publiccaption;
        i++;
    }

    let artId  = "none-found";
    try {
        artId = image[i - 1].imageid;
    } catch {}

    if (artId === "none-found") {className = "hidden"}

    return (
        <Link to={`/galleries/${galleryId}/art/${artId}`}>
            <img src={firstSrc} alt={firstAlt} className={className}/>
        </Link>
    );
}

export default ArtImageTile;
