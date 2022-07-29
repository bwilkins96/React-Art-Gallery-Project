import harvardArt from "./data/harvardArt";
import GalleryNavigation from "./components/GalleryNavigation";
import GalleryView from "./components/GalleryView";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="page-wrapper">
      <GalleryNavigation galleries={harvardArt.records} />

      <Switch>
        <Route path="/galleries/:galleryId">
          <GalleryView galleries={harvardArt.records} />
        </Route>
        <Route exact path="/">
          <h2>Harvard Art Museum</h2>
          <p className="noTouch">Look, but please don't touch. Select a Gallery in the navigation bar to view artwork. Click on an image for more info.</p>
        </Route>
        <Route>
          <h2>Page Not Found</h2>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
