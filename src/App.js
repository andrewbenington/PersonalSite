import HeaderBar from './components/HeaderBar.tsx';
import SideBar from './components/SideBar.tsx'
import { MainPage } from './pages/About/style'
import { FlexRowTall } from './style'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { Skills, Classes, Projects, Contact, About, VLCProject } from './pages';


function App() {

  console.log('about');
  return (
    <Router>
      <MainPage>
        <HeaderBar />
        <FlexRowTall>
          <SideBar />
          <Switch>
            <Route path="/" exact component={About} />
            <Route path="/skills" exact component={Skills} />
            <Route path="/classes" exact component={Classes} />
            <Route path="/projects" exact component={Projects} />
            <Route path="/projects/vlc-project" exact component={VLCProject} />
            <Route path="/contact" exact component={Contact} />
          </Switch>
        </FlexRowTall>
      </MainPage>
    </Router>
  );
}

export default App;
