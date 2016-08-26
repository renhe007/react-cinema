import React from "react";
import {render} from "react-dom";
import {Route,Router,browserHistory} from "react-router";
import route from "../config/router";


render(
  <div>
    {route}
  </div>
  ,document.getElementById('root')
);
