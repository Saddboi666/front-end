import { Table } from 'antd';
import React, { useEffect, useState } from 'react';

export const GetStaff = () => {
    const [staff, setStaff] = useState([]);
    const fetchData = () => {
        fetch("http://localhost:8090/api/staff")
            .then(response => response.json())
            .then(data => {
                setStaff(data)
            })
    }

    useEffect(() => {
        fetchData();

    }, [])

    return (
        <div className='staff-wrapper'>


            <Table columns={
                [
                    {
                        title: "Id",
                        dataIndex: 0,
                    },
                    {
                        title: "First Name",
                        dataIndex: 1,
                    },
                    {
                        title: "Last Name",
                        dataIndex: 2,
                    },
                    {
                        title: "Email",
                        dataIndex: 3,
                    },

                    {
                        title: "Department",
                        dataIndex: 4,
                    },
                    {
                        title: "User Name",
                        dataIndex: 5,
                    }

                ]
            }
                rowKey={staff.keys()} dataSource={staff.map(person => [person.id, person.first_name, person.last_name, person.email, person.department_id, person.user_name])}>

            </Table>

        </div>
    )
}