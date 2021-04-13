import {
  Button,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  CardActions,
  CardMedia,
} from "@material-ui/core";
import HeroComponent from "components/hero";
import MainLayout from "components/layout/main";
import { makeStyles } from "@material-ui/core/styles";
import { features } from "copernicus/configuration";
import { useRouter } from "next/router";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Name() {
  const classes = useStyles();

  const router = useRouter();
  const { project_name } = router.query;

  const data = projects.find((e) => {
    return e.project_id === project_name;
  });

  return (
    <MainLayout>
      <HeroComponent>
        <Container maxWidth="">
          <Typography
            component="h1"
            variant="h1"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            {project_name}
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            paragraph
          >
            Project peers here
          </Typography>
        </Container>
      </HeroComponent>

      <Container className={classes.cardGrid} maxWidth="md">
        {/* End hero unit */}
        
      </Container>
    </MainLayout>
  );
}
