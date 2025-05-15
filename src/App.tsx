import "./App.css";
import { Button } from "./components/ui/button";

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-svh">
      <Button className="bg-red-500 hover:bg-amber-500 duration-700 ">
        Click me
      </Button>
    </div>
  );
}

export default App;
