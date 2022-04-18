import { MemoryRouter as Router } from 'react-router';
import { Route, Switch } from 'react-router-dom';
import Sidebar from './Components/Sidebar';
import Home from './Views/Home';

export default function PageLayout() {
  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="col-span-2">
        <Sidebar />
      </div>
      <div>
        <div className="col-span-1">
          <Router>
            <Switch>
              <Route path="/" component={Home} />
            </Switch>
          </Router>
        </div>
      </div>
    </div>
  );
}
