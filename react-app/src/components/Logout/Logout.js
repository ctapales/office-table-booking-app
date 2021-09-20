import React from "react";
import { Button } from "react-bootstrap";

function Logout({handleAuthentication}) {

    function handleLogout() {
      localStorage.setItem("user", null);
      handleAuthentication();
    }

  return (
    <div className="logout">
      <Button
        variant="secondary"
        type="submit"
        onClick={handleLogout}
      >
        Logout
      </Button>
    </div>
  );
}

export default Logout;
