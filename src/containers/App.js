
import { useState, useEffect} from "react";
import axios from "axios";
import { Layout, Menu, Row, Col } from "antd";
import Companies from '../components/company/companies';
import AppContext from '../app/context/app-context';
const { Header,   Content } = Layout;

function App() {

    const [companyList, setCompanyList] = useState([]);

    useEffect(() => {
      axios
        .get(`http://localhost:3001/api/companies`)
        .then((res) => {
          setCompanyList(res.data);
        })
        .catch((err) => {
          console.log("Something went wrong - ", err);
        });
    }, []);

    const specialitiesList = ["Excavation", "Plumbing", "Electrical"];


  return (
    <Layout>
      <Header>
        {" "}
        <div className='logo' />
        <Menu theme='light' />
        Header
      </Header>
      <Content
        className='site-layout-content'
        style={{ minHeight: "100vh", backgroundColor: "whitesmoke" }}
      >
        <Row style={{ marginTop: "10%", marginBottom: "20%" }}>
          <Col span={6}></Col>
          <Col span={12}>
            <AppContext.Provider
              value={{ companies: companyList, specialities: specialitiesList }}
            >
              <Companies />
            </AppContext.Provider>
          </Col>
          <Col span={6}></Col>
        </Row>
      </Content>
      
    </Layout>
  );
}

export default App;
