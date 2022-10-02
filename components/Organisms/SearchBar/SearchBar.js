import React from "react";
import { StyledContainer } from "./style";

import { Input, Space } from "antd";

const { Search } = Input;
const onSearch = (value) => console.log(value);

const SearchBar = () => {
  return (
    <StyledContainer>
      <Space direction="vertical">
        <Search
          placeholder="input search text"
          onSearch={onSearch}
          enterButton
          size="large"
          bordered
        />
      </Space>
    </StyledContainer>
  );
};

export default SearchBar;
