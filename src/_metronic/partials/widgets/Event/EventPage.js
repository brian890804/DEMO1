
import { Switch, Route } from "react-router-dom";
import EventDashBoardCard from "./Dashboard/EventDashBoardCard"
import ActivityCard from "./Activity/ActivityCard";
import FirstCard from "./Activity/FirstCard";
import ActivityViewPage from "./View/ActivityViewPage";
import Step from './Component/Step'
const root = process.env.PUBLIC_URL + "/";
function PageLayout({ children }) {
  return (
    <div className="p-2 ">
      <div style={{
        width: "100%",
        // minHeight: "70vh",
        borderRadius: 2,
        paddingLeft: 50,
        paddingRight: 50,
        padding: 1,
        backgroundColor: 'Transparent',
      }}>
        {children}
      </div>
    </div>
  )
}
export default function EventPage() {
  return (
    <PageLayout>
      <Switch>
        <Route exact path="/crafted/widgets/Form/AddActivity">
          <Step index={0} />
          <ActivityCard />
        </Route>
        <Route path="/crafted/widgets/Form/AddActivity/Success">
          <Step index={1} />
          <div style={{ textAlign: 'center' }}>
            <img src={`${root}images/Success.png`} alt="aa" style={{ width: '50%', margin: 10 }} />
          </div>
        </Route>
        <Route exact path="/crafted/widgets/Form/ReviseActivity/FirstPage/:id">
          <Step index={0} />
          <FirstCard />
        </Route>
        <Route path={`/crafted/widgets/Form/ReviseActivity/:id`}>
          <Step index={1} />
          <ActivityCard />
        </Route>
        <Route path={`/crafted/widgets/Form/View`}>
          <ActivityViewPage />
        </Route>
        <Route path="/">
          <EventDashBoardCard />
        </Route>
      </Switch>
    </PageLayout>
  )
}