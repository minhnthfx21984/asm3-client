import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { deleteSession } from "../Redux/Action/ActionSession";
import Cookies from "js-cookie";

function LoginLink(props) {
  const dispatch = useDispatch();

  const onRedirect = () => {
    Cookies.remove("id_user");
    Cookies.remove("name_user");
    Cookies.remove("token");

    const action = deleteSession("");
    dispatch(action);
  };

  return (
    <li className="nav-item" onClick={onRedirect}>
      <Link className="nav-link" to="/signin">
        ( Logout )
      </Link>
    </li>
  );
}

export default LoginLink;
