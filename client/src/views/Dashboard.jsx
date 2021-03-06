import React, { Component } from "react";
import ChartistGraph from "react-chartist";
import { Grid, Row, Col } from "react-bootstrap";
import { Card } from "components/Card/Card.jsx";
import "components/Company/Company.css";
import { StatsCard } from "components/StatsCard/StatsCard.jsx";
import { Tasks } from "components/Tasks/Tasks.jsx";
import {
  dataPie,
  legendPie,
  dataSales,
  optionsSales,
  responsiveSales,
  legendSales,
  dataBar,
  optionsBar,
  responsiveBar,
  legendBar
} from "variables/Variables.jsx";

class Dashboard extends Component {
  createLegend(json) {
    var legend = [];
    for (var i = 0; i < json["names"].length; i++) {
      var type = "fa fa-circle text-" + json["types"][i];
      legend.push(<i className={type} key={i} />);
      legend.push(" ");
      legend.push(json["names"][i]);
    }
    return legend;
  }
  render() {
    return (
      <div className="content">
        <div className="bkgmenu"></div>

        <div>
          <figure class="snip1563">
            <img
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1(Non développé automatiquement, car 14 Mo est trop grand. Vous pouvez quand même le développer ou l'ouvrir dans une nouvelle fenêtre.)&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80"
              alt="sample110"
            />
            <figcaption>
              <h3>Plus que des logiciels de gestion</h3>
              <p>Nos logiciels sont innovants et performants.</p>
            </figcaption>
            <a href="#"></a>
          </figure>
          <figure class="snip1563">
            <img
              src="https://images.unsplash.com/photo-1557186817-c11ad50d5b41?ixlib=rb-1.2.1(Non développé automatiquement, car 2 Mo est trop grand. Vous pouvez quand même le développer ou l'ouvrir dans une nouvelle fenêtre.)&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
              alt="sample59"
            />
            <figcaption>
              <h3>Dastock</h3>
              <p>Votre Satisfaction c'est notre satisfaction </p>
            </figcaption>
            <a href="#"></a>
          </figure>
        </div>

        <Grid fluid>
          <figure class="snip1563">
            <img
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1(Non développé automatiquement, car 14 Mo est trop grand. Vous pouvez quand même le développer ou l'ouvrir dans une nouvelle fenêtre.)&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80"
              alt="sample110"
            />
            <figcaption>
              <h3>Plus que des logiciels de gestion</h3>
              <p>Nos logiciels sont innovants et performants.</p>
            </figcaption>
            <a href="#"></a>
          </figure>
          <figure class="snip1563">
            <img
              src="https://images.unsplash.com/photo-1557186817-c11ad50d5b41?ixlib=rb-1.2.1(Non développé automatiquement, car 2 Mo est trop grand. Vous pouvez quand même le développer ou l'ouvrir dans une nouvelle fenêtre.)&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
              alt="sample59"
            />
            <figcaption>
              <h3>Dastock</h3>
              <p>Votre Satisfaction c'est notre satisfaction </p>
            </figcaption>
            <a href="#"></a>
          </figure>
          <Row>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="pe-7s-server text-warning" />}
                statsText="Capacity"
                statsValue="105GB"
                statsIcon={<i className="fa fa-refresh" />}
                statsIconText="Updated now"
              />
            </Col>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="pe-7s-wallet text-success" />}
                statsText="Revenue"
                statsValue="$1,345"
                statsIcon={<i className="fa fa-calendar-o" />}
                statsIconText="Last day"
              />
            </Col>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="pe-7s-graph1 text-danger" />}
                statsText="Errors"
                statsValue="23"
                statsIcon={<i className="fa fa-clock-o" />}
                statsIconText="In the last hour"
              />
            </Col>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="fa fa-twitter text-info" />}
                statsText="Followers"
                statsValue="+45"
                statsIcon={<i className="fa fa-refresh" />}
                statsIconText="Updated now"
              />
            </Col>
          </Row>
          <Row>
            <Col md={8}>
              <Card
                statsIcon="fa fa-history"
                id="chartHours"
                title="Users Behavior"
                category="24 Hours performance"
                stats="Updated 3 minutes ago"
                content={
                  <div className="ct-chart">
                    <ChartistGraph
                      data={dataSales}
                      type="Line"
                      options={optionsSales}
                      responsiveOptions={responsiveSales}
                    />
                  </div>
                }
                legend={
                  <div className="legend">{this.createLegend(legendSales)}</div>
                }
              />
            </Col>
            <Col md={4}>
              <Card
                statsIcon="fa fa-clock-o"
                title="Email Statistics"
                category="Last Campaign Performance"
                stats="Campaign sent 2 days ago"
                content={
                  <div
                    id="chartPreferences"
                    className="ct-chart ct-perfect-fourth"
                  >
                    <ChartistGraph data={dataPie} type="Pie" />
                  </div>
                }
                legend={
                  <div className="legend">{this.createLegend(legendPie)}</div>
                }
              />
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <Card
                id="chartActivity"
                title="2014 Sales"
                category="All products including Taxes"
                stats="Data information certified"
                statsIcon="fa fa-check"
                content={
                  <div className="ct-chart">
                    <ChartistGraph
                      data={dataBar}
                      type="Bar"
                      options={optionsBar}
                      responsiveOptions={responsiveBar}
                    />
                  </div>
                }
                legend={
                  <div className="legend">{this.createLegend(legendBar)}</div>
                }
              />
            </Col>

            <Col md={6}>
              <Card
                title="Tasks"
                category="Backend development"
                stats="Updated 3 minutes ago"
                statsIcon="fa fa-history"
                content={
                  <div className="table-full-width">
                    <table className="table">
                      <Tasks />
                    </table>
                  </div>
                }
              />
            </Col>
          </Row>
        </Grid>
        <figure class="snip1563">
          <img
            src="https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?ixlib=rb-1.2.1(270 ko)
https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?ixlib=rb-1.2.1
&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            alt="sample110"
          />
          <figcaption>
            <h3>Nos Chiffres</h3>
            <p>30% Réinvestis en R&D</p>
          </figcaption>
          <a href="#"></a>
        </figure>
      </div>
    );
  }
}

export default Dashboard;
