import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Loader from "./Loading";
import HomePage from "./HomePage";
import AddRental from "./AddRental";
import SearchPage from "./SearchPage";
import AccountPage from "./AccountPage";

const router = () => {
    const [loading, setLoading] = useState(false);
  
    const handleLoading = (isLoading) => {
      setLoading(isLoading);
    };

    return (
        <div>
          {loading && <Loader />}
          <Switch>
            <Route exact path="/">
              <HomePage handleLoading={handleLoading} />
            </Route>
            <Route path="/rentals">
              <AddRental handleLoading={handleLoading} />
            </Route>
            <Route path="/search">
              <SearchPage handleLoading={handleLoading} />
            </Route>
            <Route path="/account">
              <AccountPage handleLoading={handleLoading} />
            </Route>
          </Switch>
        </div>
      );
};
    
export default router;