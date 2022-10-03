import React from "react";
import { StyledContainer } from "./style";

import ArtistsTable from "../../Organisms/ArtistsTable";
import AddArtistForm from "../../Organisms/AddArtistForm/AddArtistForm";
import SearchBar from "../../Organisms/SearchBar";

const Homepage = () => {
  return (
    <StyledContainer>
      <SearchBar />
      <ArtistsTable />
      <AddArtistForm />
    </StyledContainer>
  );
};

export default Homepage;
