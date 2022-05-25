import React, { useState, useEffect, useContext } from "react";
import { Checkbox } from "antd";
import AppContext from "../../app/context/app-context";



const Checkboxlist = (props) => {
  const appContext = useContext(AppContext);
  const [checkboxList, setCheckboxList] = useState([]);
    useEffect(() => {
      setCheckboxList(appContext.specialities);
    }, [appContext.specialities]);

  const { checkboxHandler } = props;
    return (
      <>
        <Checkbox.Group
          options={checkboxList}
          onChange={checkboxHandler}
        />
        <br />
      
      </>
    );
}

export default Checkboxlist;


