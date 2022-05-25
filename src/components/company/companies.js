import React, { useState, useContext, useEffect } from "react";
import Search from "../common/search";
import Company from "../company/company";
import AppContext from "../../app/context/app-context";
import GenericListing from "../common/generic-listing";
import Checkboxlist from "../common/checkboxlist";
import { Divider } from "antd";

const Companies = () => {
  const appContext = useContext(AppContext);
  const [companyList, setCompanyList] = useState([]);
  let filteredList = [];
  
  useEffect(() => {
    setCompanyList(appContext.companies);
  }, [appContext.companies]);



  const searchHandler = (searchText) => {
    if (filteredList.length === 0) filteredList = [...appContext.companies];
    if (searchText.trim().length !== 0) {
      filteredList = filteredList.filter((company) => {
        return company.name.toLowerCase().includes(searchText.toLowerCase());
      });
    }
    setCompanyList(filteredList);
  };

  const checkboxHandler = (checkedValues) => {
    const checkedValuesStr = checkedValues.join(", ");
    if (filteredList.length === 0) filteredList = [...appContext.companies];
    if (checkedValuesStr.trim().length !== 0) {
      filteredList = filteredList.filter((company) => {
        return company.specialities
          .toLowerCase()
          .includes(checkedValuesStr.toLowerCase());
      });
    }
    setCompanyList(filteredList);
  };

  return (
    <div>
      <h1>Find a Construction Company</h1>
      <Divider />
      <Search searchHandler={searchHandler} />
      <Divider />
      <Checkboxlist checkboxHandler={checkboxHandler} />
      <Divider />
      <GenericListing listData={companyList} ListItem={Company} />
    </div>
  );
};

export default Companies;
