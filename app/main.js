import React from "react";
import {render} from "react-dom";
import route from "../config/router";


render(
  <div>
    {route}
  </div>
  ,document.getElementById('root')
);
