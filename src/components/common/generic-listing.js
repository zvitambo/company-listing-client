import React from 'react'
import { List } from "antd";
import Company from "../company/company";



const GenericListing = (props) => {
const { listData } = props; 

    return (
      <List
        itemLayout='vertical'
        size='large'
        pagination={{
          onChange: (page) => {
            console.log(page);
          },
          pageSize: 4,
        }}
        dataSource={listData}
        
        renderItem={(item) => (
          <Company item={item} />
         
        )}
      />
    );
}

export default GenericListing;
