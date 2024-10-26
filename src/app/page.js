`use client`;

import LayoutWrapper from "./components/LayoutWrapper";
import UserTable from "./components/UserTable";
import UserActions from "./components/UserActions";
import Header from "./components/Header";

export default function Page() {
  return (
    <LayoutWrapper>
      <Header />
      <UserActions />
      <UserTable />
    </LayoutWrapper>
  );
}
