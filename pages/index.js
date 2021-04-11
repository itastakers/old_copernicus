import { Button, Container, Grid, Typography } from "@material-ui/core";
import HeroComponent from "../components/hero";
import MainLayout from "../components/layout/main";

export default function Home() {
  return (
    <MainLayout>
      <HeroComponent>
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            Atlas
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            paragraph
          >
            Track testnets, upgrades, peers and validators of Cosmos Network.
          </Typography>
          <div className="">
            <Grid container spacing={2} justify="center">
              <Grid item>
                <Button variant="contained" color="primary">
                  Main call to action
                </Button>
              </Grid>
              <Grid item>
                <Button variant="outlined" color="primary">
                  Secondary action
                </Button>
              </Grid>
            </Grid>
          </div>
        </Container>
      </HeroComponent>
    </MainLayout>
  );
}
