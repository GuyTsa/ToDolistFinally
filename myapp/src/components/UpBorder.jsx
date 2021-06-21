import "../css/UpBorder.css";
import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  textbox_css: {
    marginTop: 5,
    marginLeft: 5,
  },
  sendbutton_css: {
    width: 130,
    height: 50,
  },
});

const UpBorder = (props) => {
  const classes = useStyles();
  const [BorderProduct, setBorderProduct] = useState("");

  return (
    <div>
      <Grid container spacing={3} className={classes.textbox_css}>
        <Grid item xs={3}>
          <TextField
            id="outlined-basic"
            label="enter product"
            variant="outlined"
            onChange={(e) => setBorderProduct(e.target.value)}
          />
        </Grid>
        <Grid item xs={3}>
          <Button
            className={classes.sendbutton_css}
            variant="contained"
            onClick={() => {
              props.PassProductToParent(BorderProduct);
            }}
          >
            send
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default UpBorder;
