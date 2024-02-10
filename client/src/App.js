import "./App.css";
import { Outlet } from "react-router-dom";
import TopBar from "./components/navigation/TopBar";
import BottomBar from "./components/navigation/BottomBar";
function App() {
  // const [isLoading, setIsLoading] = useState(false);
  // const dispatch = useDispatch();

  return (
    <>
      <div className="App">
        <TopBar />
        <div className="app_content">
          <Outlet />
        </div>
        <BottomBar />
      </div>
    </>
  );
}
export default App;