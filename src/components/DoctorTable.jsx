import React, { useEffect, useState } from 'react';
import { Button, message, Popconfirm, Space, Table, Tag } from 'antd';
import { AppstoreAddOutlined, DeleteFilled, EditFilled, InfoCircleFilled, SearchOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

// const api = "https://shop-pd211-awdhcvf3ebdpb7es.polandcentral-01.azurewebsites.net/api/products/all";

const api ="https://localhost:7209/api/Doctors/all";
const DoctorTable = () => {

    const [doctors, setDoctors] = useState([]);

    const columns = [
        {
            title: 'Image',
            dataIndex: 'imageUrl',
            key: 'image',
            render: (_, item) => <img height={50} src={item.imageUrl} alt={item.title}></img>,
        },
        {
            title: 'LastName',
            dataIndex: 'lastName',
            key: 'lastName',
            render: (text, item) => <Link to={`/Doctors/${item.id}`}>{text}</Link>,
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: (text, item) => <Link to={`/Doctors/${item.id}`}>{text}</Link>,
        },
        {
            title: 'FirstName',
            dataIndex: 'firstName',
            key: 'firstName',
            render: (text, item) => <Link to={`/Doctors/${item.id}`}>{text}</Link>,
        },
        {
            title: 'Dirthday',
            dataIndex: 'birthday',
            key: 'birthday',
            render: (data) => <span>{data}</span>,
        },
        {
            title: 'CategoryId',
            dataIndex: 'categoryId',
            key: 'categoryId',
            render: (text) => <span>{text}</span>,
        },
        {
            title: 'Work_experience',
            dataIndex: 'work_experience',
            key: 'work_experience',
            render: (text) => <span>{text}</span>,
        },
        // {
        //     title: 'Stock',
        //     dataIndex: 'quantity',
        //     key: 'stock',
        //     render: (text) =>
        //         text > 0 ?
        //             <Tag color="green">Available</Tag>
        //             :
        //             <Tag color="volcano">Out of Stock</Tag>
        // },
        // {
        //     title: 'Tags',
        //     key: 'tags',
        //     dataIndex: 'tags',
        //     render: (_, { tags }) => (
        //         <>
        //             {tags.map((tag) => {
        //                 let color = tag.length > 5 ? 'geekblue' : 'green';
        //                 if (tag === 'loser') {
        //                     color = 'volcano';
        //                 }
        //                 return (
        //                     <Tag color={color} key={tag}>
        //                         {tag.toUpperCase()}
        //                     </Tag>
        //                 );
        //             })}
        //         </>
        //     ),
        // },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <Link to={`/hospital/${record.id}`}>
                        <Button color="default" variant="outlined" icon={<InfoCircleFilled />} />
                    </Link>
                    <Button style={{ color: '#faad14' }} variant="outlined" icon={<EditFilled />} />
                    <Popconfirm
                        title="Delete the doctor"
                        description={`Are you sure to delete ${record.title}?`}
                        onConfirm={() => deleteItem(record.id)}
                        okText="Yes"
                        cancelText="No"
                    >
                        <Button color="danger" variant="outlined" icon={<DeleteFilled />} />
                    </Popconfirm>
                </Space>
            ),
        },
    ];

    // load data from server
    useEffect(() => {
        fetch(api)
            .then(res => res.json())
            .then(data => {
                setDoctors(data);
            });
    }, []);

    const deleteItem = (id) => {

        // TODO: HTTP delete request
        setDoctors(doctors.filter(x => x.id !== id));
        message.success('Doctors deleted successfuly!');
    }

    return (
        <>
            <div>
                <Link to="/create">
                    <Button type="primary" icon={<AppstoreAddOutlined />} style={{ marginBottom: '16px' }}>
                        Create New Doctor
                    </Button>
                </Link>
            </div>
            <Table columns={columns} dataSource={doctors} rowKey="id" />
        </>
    )
}
export default DoctorTable;