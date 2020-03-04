import React, {useState, useContext} from "react";
import { Context } from "../context/Context";
import { Form, Input, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 }
};
export default function SearchBar() {
  const { setSearchValue, searchValue } = useContext(Context);

  const handleChangeSearchbar = evt => {
    console.log(evt.target.value)
    setSearchValue(evt.target.value);
  };
const handleSubmitSearch = evt=>{
  setSearchValue(evt.target.value);
}
  return (
    <section className="search-form">
      <Form.Item>
        <Input
          name="search"
          prefix={<SearchOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
          placeholder="Search..."
          onChange={handleChangeSearchbar}
        />
      </Form.Item>
    </section>
  );
}
