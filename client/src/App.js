import { useEffect } from "react";

import { Container, AppBar, Typography, Grow, Grid } from "@mui/material";
import memories from "./images/memories.png";
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import useStyles from "./styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useDispatch } from "react-redux";
import { getPosts } from "./actions/posts";

function App() {
  const classes = useStyles();
  const theme = createTheme();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg">
        <AppBar className={classes.AppBar} position="static" color="inherit">
          {/* <Typography className={classes.heading} variant="h2" align="center">
          Memories
        </Typography> */}
          <img className={classes.image} src={memories} alt="memories"></img>
        </AppBar>

        <Grow in>
          <Container>
            <Grid container justify="space-between" alignItems="stretch">
              <Grid item xs={12} sm={7}>
                <Posts />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Form />
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>
    </ThemeProvider>
  );
}

export default App;
