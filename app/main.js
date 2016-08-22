import React from "react";
import {render} from "react-dom";
import {Route,Router,browserHistory} from "react-router";
import route "../config/router";


render(
  {route}
  ,document.getElementById('root')
);
