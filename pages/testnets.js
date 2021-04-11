import { Chip, Container, Link, Typography } from "@material-ui/core";
import HeroComponent from "../components/hero";
import MainLayout from "../components/layout/main";
import { DataGrid } from "@material-ui/data-grid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const columns = [
  { field: "name", headerName: "Name", flex: 1 },
  { field: "description", headerName: "Description", flex: 2 },
  { field: "sdk_version", headerName: "SDK Version", flex: 0.7 },
  { field: "incentivized", headerName: "Incentivized", flex: 0.7 },
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

const rows = [
  {
    id: 0,
    name: "Agoric",
    description: "Incentivized testnet, 5 phases with different objectives",
    sdk_version: "v0.40 >",
    incentivized: true,
    start_date: "2021-02-25",
    end_date: "2021-05-25",
    status: "active",
    links: [
      {
        icon_type: "fab",
        icon: "github",
        tooltip: "Repository",
        url: "https://github.com/Agoric/agoric-sdk/",
      },
      {
        icon_type: "fas",
        icon: "book",
        tooltip: "Documentation",
        url: "https://validate.agoric.com/",
      },
      {
        icon_type: "fab",
        icon: "discord",
        tooltip: "Discord",
        url: "https://agoric.com/discord",
      },
    ],
  },
];

export default function Testnets() {
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
