import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";

import { Link } from "react-router-dom";
import StandardImageList from "./List";
import { IconButton } from "@mui/material";

import React, { useEffect, useState } from "react";
import axios from "axios";

export default function TemporaryDrawer(props) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios({
      method: "GET",
      baseURL: "http://api.fakeshop-api.com",
      url: "/products/getAllProducts",
    })
      .then(({ data }) => {
        setData(data.products);
      })
      .catch((err) => console.dir(err))
      .finally(() => setLoading(false));
  }, []);

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div className="queen">
        <Link to="/List">
          <Button color="inherit">Products</Button>
        </Link>
      </div>
    </Box>
  );

  return (
    <>
      <div>
        {["left"].map((anchor) => (
          <React.Fragment key={anchor}>
            <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
            <Drawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
            >
              {list(anchor)}
            </Drawer>
          </React.Fragment>
          
        ))}
      </div>
    </>
  );
}
