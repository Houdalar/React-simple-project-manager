import ProjectsSidebar from './components/ProjectsSideBar';
import NewProject from './components/NewProject.jsx';


function App() {
  return (
    <main className="h-screen my-8 flex gap-8">
    <ProjectsSidebar />
    <NewProject />
  </main>
  );
}

export default App;
