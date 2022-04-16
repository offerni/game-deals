import Deals from "domains/Deal/Deals";
import Games from "domains/Game/Games";
import { useEffect } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { PATHS } from "utils";
import { ModalContextProvider } from "./ModalContext";
import ScrollToTop from "./ScrollToTop";

const PageContent = () => {
  const location = useLocation();

  useEffect(() => {
    // @ts-ignore gtag is at window
    window.gtag("event", "page_view", {
      page_path: `${location.pathname}${location.search}`,
    });
  }, [location]);
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
