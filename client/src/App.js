import "./App.css";
import { Outlet } from "react-router-dom";
import TopBar from "./components/navigation/TopBar";
import BottomBar from "./components/navigation/BottomBar";
import { useSelector } from "react-redux";
function App() {
  // const [isLoading, setIsLoading] = useState(false);
  // const dispatch = useDispatch();
  // const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const isAuthenticated = true;

  return (
    <>
      <div className="App">
        <TopBar />
        <div className="app_content">
          <Outlet />
        </div>
        {isAuthenticated && <BottomBar />}
      </div>
    </>
  );
}
export default App;
