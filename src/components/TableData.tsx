import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(
  name: string,
  amount: number,
  status: string,
  id: number,
  joined: string,
  grp: string
) {
  return { name, amount, status, id, joined, grp };
}

const rows = [
  createData("Zepplin", 686.0, "Active", 114423, "October", "Design"),
  createData("Figma", 76223, "Pending", 37, "June", "Finance"),
  createData("Meta", 176.0, "Cancelled", 89453, "March", "Coding"),
  createData("Angular", 49.0, "Active", 11467, "February", "Marketing"),
  createData("Vue", 999.0, "Active", 67385, "October", "Finance"),
];

export default function TableData() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell style={{ color: "#5F6980" }}>Source</TableCell>
            <TableCell style={{ color: "#5F6980" }} align="right">
              Amount
            </TableCell>
            <TableCell style={{ color: "#5F6980" }} align="right">
              Status
            </TableCell>
            <TableCell style={{ color: "#5F6980" }} align="right">
              User ID
            </TableCell>
            <TableCell style={{ color: "#5F6980" }} align="right">
              Joined
            </TableCell>
            <TableCell style={{ color: "#5F6980" }} align="right">
              Group
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    fontWeight: "bold",
                  }}
                >
                  <img src="/logofig.svg" /> {row.name}
                </span>
              </TableCell>
              <TableCell align="right">{row.amount}</TableCell>
              <TableCell align="right">
                <span
                  className={`${row.status === "Active" && "active"} ${
                    row.status === "Pending" && "pending"
                  } ${row.status === "Cancelled" && "cancel"}`}
                >
                  {row.status}
                </span>
              </TableCell>
              <TableCell align="right">{row.id}</TableCell>
              <TableCell align="right">{row.joined}</TableCell>
              <TableCell align="right">{row.grp}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
