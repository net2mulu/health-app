import React from "react";
import { Button } from "@material-tailwind/react";
import { useRouter } from "next/router";

const AdminHome = () => {
  const router = useRouter();

  return (
    <div>
      {" "}
      <Button onClick={() => router.push("/")} color="blue" ripple={true}>
        Click me!
      </Button>
    </div>
  );
};

export default AdminHome;
