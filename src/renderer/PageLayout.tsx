import { MemoryRouter as Router } from 'react-router';
import { Route, Switch } from 'react-router-dom';
import Sidebar from './Components/Sidebar';
import PdfForm from './Views/FileGenerator/PdfForm';
// import Contacts from './Views/Chat/Contacts';
// import Conversation from './Views/Conversation';

export default function PageLayout() {
  return (
    <div className="grid grid-cols-8 gap-4">
      <div className="col-span-2">
        <Sidebar />
      </div>
      <div className="col-span-6">
          <Router>
            <Switch>
              <Route path="/" component={PdfForm} />
            </Switch>
          </Router>
      </div>
    </div>
  );
}
