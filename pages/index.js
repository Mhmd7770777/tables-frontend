import ArtistsTable from "../components/Organisms/ArtistsTable/ArtistsTable";
import LoginForm from "../components/Organisms/LoginForm/LoginForm";

export default function Home() {
  return (
    <div>
      <LoginForm />
      <ArtistsTable />
    </div>
  );
}
