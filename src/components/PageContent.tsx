import Deals from "domains/Deal/Deals";
import Games from "domains/Game/Games";
import { Switch, Route } from "react-router-dom";

const PageContent = () => {
  return (
    // ref: https://tailblocks.cc/
    <div className="container m-auto">
      <Switch>
        <Route path="/games">
          <Games />
        </Route>
        <Route path="/giveaways">
          <Deals giveaways={true} key={window.location.pathname} />{" "}
          {/* @@todo: Shit but works, research more later! */}
        </Route>
        <Route path="/">
          <Deals />
        </Route>
      </Switch>
    </div>
  );
};

export default PageContent;
