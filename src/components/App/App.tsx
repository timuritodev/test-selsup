import "./App.css";
import ParamEditor from "../ParamEditor/ParamEditor";
import { params, model } from "../../utils/utils";

function App() {
  return (
    <div>
      <ParamEditor params={params} model={model} />
    </div>
  );
}

export default App;
