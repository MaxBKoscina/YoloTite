/*!

=========================================================
* Black Dashboard React v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";

// reactstrap components
import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Label,
  FormGroup,
  Input,
  Table,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

// core components
import {
  chartExample1,
  chartExample2,
  chartExample3,
  chartExample4
} from "variables/charts.js";

function Dashboard(props) {
  const [bigChartData, setbigChartData] = React.useState("data1");
  const setBgChartData = (name) => {
    setbigChartData(name);
  };
  return (
    <>
      <div className="content">
        <Row>
          <Col xs="12">
            <Card className="card-chart">
              <CardHeader>
                <Row>
                  <Col className="text-left" sm="6">
                    
                    <CardTitle tag="h2">AFLUENCIA</CardTitle>
                  </Col>
                  
                </Row>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={chartExample1[bigChartData]}
                    options={chartExample1.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col lg="12">
            <Card className="card-chart">
              <CardHeader>
                <h5 className="card-category">Horas más concurridas</h5>
                <CardTitle tag="h3">
                  <i className="tim-icons icon-bell-55 text-info" /> 16:00
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={chartExample2.data}
                    options={chartExample2.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="12">
            <Card className="card-chart">
              <CardHeader>
                <h5 className="card-category">Lista de apariciones</h5>
                
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                <table class="table">
  <thead>
    <tr>
      
      <th scope="col">Fecha</th>
      <th scope="col">N° total de personas</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      
      <td>Mark</td>
      <td>Otto</td>
      
    </tr>
    <tr>
      
      <td>Jacob</td>
      <td>Thornton</td>
      
    </tr>
    <tr>
      
      <td colspan="2">Larry the Bird</td>
      
    </tr>
  </tbody>
</table>

                </div>
              </CardBody>
            </Card>
          </Col>
          
        </Row>
        <Row>
          
           
        </Row>
      </div>
    </>
  );
}

export default Dashboard;
