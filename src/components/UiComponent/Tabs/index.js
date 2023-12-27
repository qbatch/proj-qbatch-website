import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

import TabsWrapper from "./style";

const index = ({ tabsData }) => {
  return (
    <TabsWrapper>
      <Tabs defaultActiveKey="all" >
        {tabsData?.map((item, ind) => (
          <Tab eventKey={item.eventKey} title={item.title} key={ind} onClick={item.onClick}>
            {item.component}
          </Tab>
        ))}
      </Tabs>
      
    </TabsWrapper>
  )
};

export default index;
