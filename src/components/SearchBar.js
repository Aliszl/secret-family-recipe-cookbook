import React, { useContext } from "react";
import { Context } from "../context/Context";
import { Form, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

export default function SearchBar() {
  const { setSearchValue, searchValue } = useContext(Context);
  console.log(searchValue);

  const handleChangeSearchbar = evt => {
    console.log(evt.target.value);
    setSearchValue(evt.target.value);
  };

  return (
    <section className="search-form">
      <Form.Item>
        <Input
          name="search"
          prefix={<SearchOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
          placeholder="Search..."
          onChange={handleChangeSearchbar}
          value={searchValue}
        />
      </Form.Item>
    </section>
  );
}
