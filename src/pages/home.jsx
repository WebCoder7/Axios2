import React from "react";
import { request } from "../config/request";
import { Container } from "@mui/material";

export const Home = () => {
  const [state, setState] = React.useState([]);

  React.useEffect(() => {
    request.get("/phones").then((res) => setState(res.data));
  }, []);
  return (
    <Container>
      {state?.map((item) => (
        <div key={item.id}>
          <img src={item.img} alt="img" />
        </div>
      ))}
    </Container>
  );
};
