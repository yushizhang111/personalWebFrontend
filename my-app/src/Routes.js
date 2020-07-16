import React from "react";
import { Switch, Route } from "react-router-dom";
import About from "./Pages/About";
import Skill from "./Pages/Skill";
import Project from "./Pages/Project";
import Work from "./Pages/Work";

const Routes = () => (
  <main>
    <Switch>
      <Route exact path="/" component={About} />
      <Route exact path="/skills" component={Skill} />
      <Route exact path="/projects" component={Project} />
      <Route exact path="/works" component={Work} />
      <Route exact path="/about" component={About} />
      {/* <Route exact path="vehicles/:id/changes" component={VehicleDetail} />
      <Route exact path="/vehicles" component={VehicleList} />
      <Route path="/vehicles/:id" component={VehicleDetail} />
      <Route path="/vehicle/:id/quotes" component={Quotes} />
      <Route path="/newquote" component={NewQuote} />
      <Route path="/quote" component={Quote} />
      <Route exact path="/webusers" component={WebUsers} /> }
      <Route path="/webusers/:id" component={WebUser} />
      <Route path="/profile" component={User} />
      <Route path="/exhibitions" component={Exhibitions} />
      <Route path="/exhibition/:id/listings" component={ExhibitionVehicles} />
      <Route path="/new-customer" component={NewCustomer} />
      <Route exact path="/customers" component={ExhibitionCustomerList} />
      <Route exact path="/tasks" component={UserCustomerList} />
      <Route exact path="/customer/:id" component={ExhibitionCustomerDetail} />
      <Route path="/vehicles-list/:id" component={ExhibitionVehicleDetail} />
      <Route
        exact
        path="/customer/:customerId/opportunity/:opportunityId"
        component={OpportunityDetail}
      /> */}
    </Switch>
  </main>
);

export default Routes;
