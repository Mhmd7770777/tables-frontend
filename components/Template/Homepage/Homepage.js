import React from "react";
import { StyledContainer } from "./style";

import ArtistsTable from "../../Organisms/ArtistsTable";
import SearchBar from "../../Organisms/SearchBar";

const Homepage = () => {
  return (
    <StyledContainer>
      <SearchBar />
      <ArtistsTable />
    </StyledContainer>
  );
};

export default Homepage;
