import React from 'react';
import { List, Avatar } from "antd";

const Company = (props) => {
    const { item } = props;    
    return (
      <List.Item
        key={item.title}       
      >
        <List.Item.Meta
          avatar={<Avatar src={item.logo} />}
          title={<a href={item.href}>{item.name}</a>}
          description={item.city}
        />
        {item.specialities}
      </List.Item>
    );
}

export default Company;
