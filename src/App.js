import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import TableContainer from "./components/TableContainer";
import { getNames } from "./features/Table/TableSlice";
import "./App.css";

function App() {
   const {isLoading} = useSelector(store => store.table)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNames());
  }, []);

  if (isLoading) {
   return <center>
    <h1>Loading...</h1>
   </center>
  }

  return (
    <div className="App">
      <TableContainer />
    </div>
  );
}

export default App;
