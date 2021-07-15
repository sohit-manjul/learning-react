import React from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import {makeStyles} from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Tasks from "components/Tasks/Tasks.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import Danger from "components/Typography/Danger.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import {bugs, website, server} from "variables/general.js";

import {dailySalesChart, emailsSubscriptionChart, completedTasksChart} from "variables/charts.js";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";
import {ArrowDownward} from "@material-ui/icons";

const useStyles = makeStyles(styles);

export default function Dashboard() {
    const classes = useStyles();
    return (
        <div>
            <GridContainer>
                <GridItem xs={12}
                    sm={6}
                    md={3}>
                    <Card>
                        <CardHeader color="success" stats icon>
                            <CardIcon color="success">
                                <Icon>content_copy</Icon>
                            </CardIcon>
                            <p className={
                                classes.cardCategory
                            }>Recon Rate</p>
                            <b>
                                <h1 className={
                                    classes.cardTitle
                                }>
                                    94
                                    <small>%</small>
                                </h1>
                            </b>
                            <p className={
                                classes.cardCategory
                            }></p>
                            <p className={
                                classes.cardCategory
                            }></p>
                        </CardHeader>
                        <CardFooter stats>
                            <div className={
                                classes.stats
                            }>
                                <DateRange/>
                                on File Date
                            </div>
                        </CardFooter>
                    </Card>
                </GridItem>
                <GridItem xs={12}
                    sm={6}
                    md={3}>
                    <Card>
                        <CardHeader color="warning" stats icon>
                            <CardIcon color="warning">
                                <Store/>
                            </CardIcon>
                            <p className={
                                classes.cardCategory
                            }>Total Accounts</p>
                            <h5 className={
                                classes.cardTitle
                            }>284000</h5>
                            <p className={
                                classes.cardCategory
                            }>Accounts For Recon</p>
                            <h5 className={
                                classes.cardTitle
                            }>224000</h5>
                        </CardHeader>
                        <CardFooter stats>
                            <div className={
                                classes.stats
                            }>
                                <DateRange/>
                                on File Date
                            </div>
                        </CardFooter>
                    </Card>
                </GridItem>
                <GridItem xs={12}
                    sm={6}
                    md={3}>
                    <Card>
                        <CardHeader color="danger" stats icon>
                            <CardIcon color="danger">
                                <Icon>info_outline</Icon>
                            </CardIcon>
                            <p className={
                                classes.cardCategory
                            }>Open Bugs On Dev</p>
                            <h5 className={
                                classes.cardTitle
                            }>16</h5>
                            <p className={
                                classes.cardCategory
                            }>Open Bugs On BA</p>
                            <h5 className={
                                classes.cardTitle
                            }>12</h5>
                        </CardHeader>
                        <CardFooter stats>
                            <div className={
                                classes.stats
                            }>
                                <LocalOffer/>
                                Tracked from BugZilla
                            </div>
                        </CardFooter>
                    </Card>
                </GridItem>
                <GridItem xs={12}
                    sm={6}
                    md={3}>
                    <Card>
                        <CardHeader color="warning" stats icon>
                            <CardIcon color="warning">
                                <Accessibility/>
                            </CardIcon>
                            <p className={
                                classes.cardCategory
                            }>Application Status</p>
                            <h1 className={
                                classes.cardTitle
                            }>UP</h1>
                            <p className={
                                classes.cardCategory
                            }></p>
                            <p className={
                                classes.cardCategory
                            }></p>
                        </CardHeader>
                        <CardFooter stats>
                            <div className={
                                classes.stats
                            }>
                                <Update/>
                                Just Updated
                            </div>
                        </CardFooter>
                    </Card>
                </GridItem>
            </GridContainer>
            <GridContainer>
                <GridItem xs={12}
                    sm={12}
                    md={4}>
                    <Card chart>
                        <CardHeader color="success">
                            <ChartistGraph className="ct-chart"
                                data={
                                    dailySalesChart.data
                                }
                                type="Line"
                                options={
                                    dailySalesChart.options
                                }
                                listener={
                                    dailySalesChart.animation
                                }/>
                        </CardHeader>
                        <CardBody>
                            <h4 className={
                                classes.cardTitle
                            }>Recon Rate Stats</h4>
                            <p className={
                                classes.cardCategory
                            }>
                                <Danger>
                                    <ArrowDownward className={
                                        classes.upArrowCardCategory
                                    }/>
                                    1% increase in today sales.
                                </Danger>
                            </p>
                        </CardBody>
                        <CardFooter chart>
                            <div className={
                                classes.stats
                            }>
                                <AccessTime/>
                                as of File Date
                            </div>
                        </CardFooter>
                    </Card>
                </GridItem>
                <GridItem xs={12}
                    sm={12}
                    md={4}>
                    <Card chart>
                        <CardHeader color="warning">
                            <ChartistGraph className="ct-chart"
                                data={
                                    emailsSubscriptionChart.data
                                }
                                type="Bar"
                                options={
                                    emailsSubscriptionChart.options
                                }
                                responsiveOptions={
                                    emailsSubscriptionChart.responsiveOptions
                                }
                                listener={
                                    emailsSubscriptionChart.animation
                                }/>
                        </CardHeader>
                        <CardBody>
                            <h4 className={
                                classes.cardTitle
                            }>Category Stats</h4>
                            <p className={
                                classes.cardCategory
                            }>Statistics on Categorization of Items</p>
                        </CardBody>
                        <CardFooter chart>
                            <div className={
                                classes.stats
                            }>
                                <AccessTime/>
                                as of File Date
                            </div>
                        </CardFooter>
                    </Card>
                </GridItem>
                <GridItem xs={12}
                    sm={12}
                    md={4}>
                    <Card chart>
                        <CardHeader color="danger">
                            <ChartistGraph className="ct-chart"
                                data={
                                    completedTasksChart.data
                                }
                                type="Line"
                                options={
                                    completedTasksChart.options
                                }
                                listener={
                                    completedTasksChart.animation
                                }/>
                        </CardHeader>
                        <CardBody>
                            <h4 className={
                                classes.cardTitle
                            }>Issue Stats</h4>
                            <p className={
                                classes.cardCategory
                            }>Statistics on Issues in Items</p>
                        </CardBody>
                        <CardFooter chart>
                            <div className={
                                classes.stats
                            }>
                                <AccessTime/>
                                as of File Date
                            </div>
                        </CardFooter>
                    </Card>
                </GridItem>
            </GridContainer>
            <GridContainer>
                <GridItem xs={12}
                    sm={12}
                    md={6}>
                    <CustomTabs title="Open Issues:" headerColor="primary"
                        tabs={
                            [{
                                    tabName: "Bugs",
                                    tabIcon: BugReport,
                                    tabContent: (
                                        <Table tableHeaderColor="warning"
                                            tableHead={
                                                ["bug Id", "Category", "Assignee", "Description", "Status"]
                                            }
                                            tableData={
                                                [
                                                    [
                                                        "Bug-12345", 'PE',  "Sohit Manjul", "Incorrect Mapping", "Assigned"
                                                    ],
                                                    [
                                                      "Bug-54321", "RS", "Sohit Manjul", "Incorrect Transaction Type", "New"
                                                    ]
                                                ]
                                            }/>
                                    )
                                }]
                        }/>
                </GridItem>
                <GridItem xs={12}
                    sm={12}
                    md={6}>
                    <Card>
                        <CardHeader color="warning">
                            <h4 className={
                                classes.cardTitleWhite
                            }>Resource Availability</h4>
                            <p className={
                                classes.cardCategoryWhite
                            }>
                              Resourse Planning for this Sprint
                            </p>
                        </CardHeader>
                        <CardBody>
                            <Table tableHeaderColor="warning"
                                tableHead={
                                    ["Name", "Capacity", "Filed Hours", "Spare Hours"]
                                }
                                tableData={
                                    [
                                        [
                                            "Sohit Manjul", "50", "46", "4"
                                        ],
                                        [
                                            "Rampuram Arun", "50", "70", "76"
                                        ]
                                    ]
                                }/>
                        </CardBody>
                    </Card>
                </GridItem>
            </GridContainer>
        </div>
    );
}
