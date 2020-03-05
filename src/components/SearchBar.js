import React, { useContext } from "react";
import { Context } from "../context/Context";
import { Form, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import styled from "styled-components";

export default function SearchBar() {
  const { setSearchValue, searchValue } = useContext(Context);
  console.log(searchValue);

  const handleChangeSearchbar = evt => {
    console.log(evt.target.value);
    setSearchValue(evt.target.value);
  };

  return (
    <StyledSearchBar className="search-form">
      <Form.Item>
        <Input
          name="search"
          prefix={<SearchOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
          placeholder="Search..."
          onChange={handleChangeSearchbar}
          value={searchValue}
        />
      </Form.Item>
    </StyledSearchBar>
  );
}

const StyledSearchBar = styled.section`
width:38.2vw;
`