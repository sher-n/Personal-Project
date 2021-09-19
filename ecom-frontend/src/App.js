import { useState } from "react";
import "./App.css";

import PrivateRoutes from "./components/private-routes/PrivateRoutes";
import LocalStorage from "./service/LocalStorage";


function App() {
  const [role, setRole] = useState(LocalStorage.getRole())

  return (
<PrivateRoutes role={role} setRole={setRole} />
    
  );
}

export default App;
