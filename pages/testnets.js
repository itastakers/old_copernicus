import { Chip, Container, Link, Typography } from "@material-ui/core";
import HeroComponent from "../components/hero";
import MainLayout from "../components/layout/main";
import { DataGrid } from "@material-ui/data-grid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import testnets from "../atlas/testnets.json";
import CheckIcon from "@material-ui/icons/Check";
import ClearIcon from "@material-ui/icons/Clear";
import { useEffect, useState } from "react";
import { shuffleArray } from "../utils/arrays";

const columns = [
  { field: "name", headerName: "Name", flex: 2 },
  { field: "sdk_version", headerName: "SDK Version", flex: 0.7 },
  {
    field: "incentivized",
    headerName: "Incentivized",
    flex: 0.7,
    renderCell: ({ value }) => {
      if (value === true) {
        return <CheckIcon style={{ color: "green" }} />;
      } else {
        return <ClearIcon style={{ color: "red" }} />;
      }
    },
  },
  { field: "start_date", headerName: "Start date", type: "date", flex: 1 },
  { field: "end_date", headerName: "End date", type: "date", flex: 1 },
  {
    field: "status",
    headerName: "Status",
    flex: 0.7,
    renderCell: ({ value }) => {
      return (
        <Chip
          style={{ textTransform: "capitalize" }}
          label={value}
          color={value == "active" ? "primary" : "basic"}
        />
      );
    },
  },
  {
    field: "links",
    headerName: "Links",
    flex: 1,
    renderCell: ({ value }) => {
      return value.map((i) => (
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href={i.url}
          id={i.icon}
          color="primary"
          title={i.tooltip}
          style={{ marginRight: 10 }}
        >
          <FontAwesomeIcon icon={[i.icon_type, i.icon]} />
        </Link>
      ));
    },
  },
];

export default function Testnets() {
  var [rows, setRows] = useState([]);

  useEffect(() => {
    const r = shuffleArray(testnets.map((obj) => ({ ...obj, id: obj.name })));
    setRows(r);
  }, [testnets]);

  return (
    <MainLayout>
      <HeroComponent>
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h3"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            Cosmos Testnet Tracker
          </Typography>
          <Typography align="center" color="textPrimary" gutterBottom>
            This list is managed by the community. If your favorite project is
            missing, don't hesitate to open a pull request in{" "}
            <Link href="https://github.com/itastakers/atlas/blob/main/atlas/testnets.json">
              this repository
            </Link>
            . Pull requests will be reviewed quickly and merged as long they
            don't contain spam or fraudolent links.
          </Typography>
        </Container>
      </HeroComponent>

      <Container maxWidth="xl">
        <DataGrid
          autoHeight
          rows={rows}
          columns={columns}
          pageSize={50}
          disableColumnMenu
        />
      </Container>
    </MainLayout>
  );
}
