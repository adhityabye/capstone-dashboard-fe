import LayoutWrapper from "./components/LayoutWrapper";
import StatsCards from "./components/StatsCards";
import UserTable from "./components/UserTable";
import UserActions from "./components/UserActions";

export default function Page() {
  return (
    <LayoutWrapper>
      <UserActions />
      <StatsCards />
      <UserTable />
    </LayoutWrapper>
  );
}
