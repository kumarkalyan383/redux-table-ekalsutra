import { useSelector } from "react-redux";

const TableContainer = () => {
  const { names } = useSelector((store) => store.table);
  return (
    <center>
        <h1>Names</h1>
      <table>
        <thead>
          <tr>
            <th>Serial No</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {names.map((each) => {
            return (
              <tr key={each.id}>
                <td className="table-data">{each.id}</td>
                <td className="table-data">{each.name}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </center>
  );
};

export default TableContainer;
