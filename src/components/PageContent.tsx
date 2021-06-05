import Deals from "domains/Deal/Deals";
import Games from "domains/Game/Games";
import { Switch, Route } from "react-router-dom";
import { PATHS } from "utils";
import { ModalContextProvider } from "./ModalContext";
import ScrollToTop from "./ScrollToTop";

const PageContent = () => {
  return (
    // ref: https://tailblocks.cc/
    <div className="container m-auto dark:bg-gray-800">
      <ScrollToTop />
      <ModalContextProvider>
        <Switch>
          <Route path={PATHS.games}>
            <Games />
          </Route>
          <Route path={PATHS.free}>
            <Deals />
          </Route>
          <Route path={PATHS.recent}>
            <Deals />
          </Route>
          <Route path="/">
            <Deals />
          </Route>
        </Switch>
      </ModalContextProvider>
    </div>
  );
};

export default PageContent;
