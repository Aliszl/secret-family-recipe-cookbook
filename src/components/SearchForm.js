import React from "react";
import { Form, Input} from "antd";
import { SearchOutlined } from "@ant-design/icons";

export default function SearchForm({ handleChangeSearchbar }) {
  return (
    <section className="search-form">
      <Form.Item label="Search">
        <Input
          name="search"
          prefix={<SearchOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
          placeholder="Find a recipe..."
          onChange={handleChangeSearchbar}
        />
      </Form.Item>
    </section>
  );
}
