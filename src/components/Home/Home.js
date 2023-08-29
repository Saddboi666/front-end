import { Spin, Table } from "antd";
import React, { useEffect, useState } from "react";
import "./home.css";
export default function Home() {
    const result = [];
    const [filteredInfo, setFilteredInfo] = useState({});
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false)

    const fetchData = () => {
        fetch('https://sheet.best/api/sheets/7d685acc-0d98-4ba0-a9a4-9506af4b3f55')
            .then((response) => response.json())
            .then((data) => {
                //set the status to loading 
                setLoading(true);
                //check if data isn't empty and push to result array 
                if (data !== null) {
                    result.push(JSON.stringify(data));
                    setData(data)
                    console.log(data)
                    setLoading(false)
                }
            })
    }
    const handleChange = (pagination, filters, sorter) => {
        console.log(pagination, filters, sorter);
        setFilteredInfo(filters);
    };

    const filterDates = data.filter((items) => {
        let today = new Date();
        const yesterday = new Date();
        yesterday.setDate(today.getDate() - 1);
        if (new Date(items.Date) >= yesterday) {
            return items;
        }
    })
    // eslint-disable-next-line
    useEffect(() => {
        fetchData();

        // eslint-disable-next-line
        if (setLoading(true)) {
            return <Spin />
        }
    }, [])
    return (
        <>

            <h3 className="home-header">Upcoming Reservations</h3>
            {loading ? <Spin /> :
                <div className="trip-table">
                    <Table className="trip-table"
                        columns={
                            [
                                {
                                    title: "Date",
                                    dataIndex: 0,

                                },
                                {
                                    title: "Driver",
                                    dataIndex: 1,
                                    filters: [
                                        {
                                            text: 'Dan',
                                            value: 'Dan',
                                        }, {
                                            text: 'Dez',
                                            value: 'Dez',
                                        },
                                        {
                                            text: 'Jamel',
                                            value: 'Jamel',
                                        },
                                        {
                                            text: 'Larry',
                                            value: 'Larry',
                                        },
                                        {
                                            text: 'Liz', value: 'Liz',
                                        },
                                        {
                                            text: 'Michael',
                                            value: 'Michael',
                                        }
                                    ],
                                    onFilter: (value, record) => record.includes(value),
                                },
                                {
                                    title: "Time",
                                    dataIndex: 2,
                                },
                                {
                                    title: "Pickup Location",
                                    dataIndex: 3,
                                },
                                {
                                    title: "Dropoff Location",
                                    dataIndex: 4,
                                }
                            ]
                        } rowKey={data.keys()}
                        dataSource={filterDates.map(trips => [trips.Date, trips.Driver, trips.Time, trips.Pickup, trips.Dropoff])}
                        onChange={handleChange} />

                </div>
            }


        </>

    )
}