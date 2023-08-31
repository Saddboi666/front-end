import { Button, Card, Space } from "antd"
import './dashboard.css';
import { AccountBalance, AirplaneTicketOutlined, CalendarToday, Group, MonetizationOn, Money, Person } from '@mui/icons-material';
import { Link } from "react-router-dom";
export default function Dashboard() {
    return (
        <div className="dashboard">
            <div className="dashboard-grid">
                <Card className="card" size={'large'}>
                    <h2>User Management</h2>

                    <Card size="default">
                        <Space size={'middle'} direction="horizontal">
                            <Button className='content-card'><Link to={'/staff'}>{<Person size={"28px"} style={{ size: "28px", "color": "black" }} />}
                                <p>Staff</p></Link>
                            </Button>

                            <Button className="content-card">{<Group />}
                                <p>Customers</p>
                            </Button>
                        </Space>
                    </Card>
                </Card>
                <Card className="card" size={'default'}>
                    <h2>Service Monitoring</h2>
                    <Card size="default">
                        <Space size={'middle'} direction="horizontal">
                            <Button className='content-card'><Link to={'/reservations'}>{<CalendarToday size={"28px"} style={{ size: "28px", "color": "black" }} />}
                                <p>Current Trips</p></Link>
                            </Button>

                            <Button className="content-card">{<AirplaneTicketOutlined />}
                                <p>Flight Status</p>
                            </Button>
                        </Space>
                    </Card>
                </Card>

                <Card className="card" size={'default'}>
                    <h2>Financial Management</h2>
                    <Card size="default">
                        <Space size={'middle'} direction="horizontal">
                            <Button className='content-card'>{<MonetizationOn size={"28px"} style={{ size: "28px", "color": "black" }} />}
                                <p>Batch Trips</p>
                            </Button>

                            <Button className="content-card">{<AccountBalance />}
                                <p>Accounting</p>
                            </Button>
                        </Space>
                    </Card>
                </Card>
            </div>
        </div>
    )
}
