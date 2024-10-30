"use client";

import UserTable from "./components/UserTable";
import UserActions from "./components/UserActions";
import Header from "./components/Header";

export default function Page() {
  return (
    <>
      <Header />
      <UserActions />
      <UserTable />
    </>
  );
}
