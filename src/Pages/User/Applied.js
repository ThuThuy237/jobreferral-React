import React from 'react';
import {
    Row,
    Col,
    // Button,
    Table, Tag, Space,
} from 'antd';
// import { useSelector } from 'react-redux';
import styles from '../../Styles/InfoUser.module.scss'


export default function InfoUser() {
    // const { userLogin } = useSelector(state => state.LoginReducer);

    const columns = [
        {
          title: 'Title',
          dataIndex: 'title',
          key: 'title',
          render: text => <p>{text}</p>,
        },
        {
          title: 'Age',
          dataIndex: 'age',
          key: 'age',
        },
        {
          title: 'Address',
          dataIndex: 'address',
          key: 'address',
        },
        {
          title: 'Tags',
          key: 'tags',
          dataIndex: 'tags',
          render: tags => (
            <>
              {tags.map(tag => {
                let color = tag.length > 5 ? 'geekblue' : 'green';
                if (tag === 'loser') {
                  color = 'volcano';
                }
                return (
                  <Tag color={color} key={tag}>
                    {tag.toUpperCase()}
                  </Tag>
                );
              })}
            </>
          ),
        },
        {
          title: 'Action',
          key: 'action',
          render: (text, record) => (
            <Space size="middle">
              <p>Invite {record.name}</p>
              <p>Delete</p>
            </Space>
          ),
        },
      ];
      
      const data = [
        {
          key: '1',
          title: 'John Brown John Brown John Brown John Brown John Brown John Brown John Brown John Brown John Brown John Brown John Brown John Brown',
          age: 32,
          address: 'New York No. 1 Lake Park',
          tags: ['nice', 'developer'],
        },
        {
          key: '2',
          title: 'Jim Green',
          age: 42,
          address: 'London No. 1 Lake Park',
          tags: ['loser'],
        },
        {
          key: '3',
          title: 'Joe Black',
          age: 32,
          address: 'Sidney No. 1 Lake Park',
          tags: ['cool', 'teacher'],
        },
      ];
    return (
        <>
            <Row >
                <Col span={24}><h1 className={styles.titlePage}><span>Applied Jobs</span></h1></Col>
            </Row>

            <Row justify="center" style={{ marginTop: '50px' }}>
                <Col span={20}>
                    <Table columns={columns} dataSource={data} />
                </Col>
            </Row>


        </>
    )
}
