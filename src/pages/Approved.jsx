import React, { useState } from "react";
import { Space, Table, Tag } from "antd";

const Approve = () => {
  const [dataSource, setDataSource] = useState([
    {
      key: "1",
      name: "HTML",
      age: "Approved",
      
    },
    {
        key: "2",
        name: "Tailwind CSS",
        age: "Approved",
        
      },
      {
        key: "3",
        name: "React",
        age: "Approved",
        
      },
      {
        key: "4",
        name: "Dog Chain",
        age: "Rejected",
        
      },
      {
        key: "5",
        name: "Javascript",
        age: "Pending",
        
      },
  ]);

  const handleDelete = (record) => {
    const updatedDataSource = dataSource.filter(item => item.key !==record.key);
    setDataSource (updatedDataSource)
  }

  const columns = [
    {
      title: "Course Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Status",
      dataIndex: "age",
      key: "age",
    },
   
    // {
    //   title: "Tags",
    //   key: "tags",
    //   dataIndex: "tags",
    //   render: (_, { tags }) => (
    //     <>
    //       {tags.map((tag) => {
    //         let color = tag.length > 5 ? "brown" : "blue";
    //         if (tag === "loser") {
    //           color = "volcano";
    //         }
    //         return (
    //           <Tag color={color} key={tag}>
    //             {tag.toUpperCase()}
    //           </Tag>
    //         );
    //       })}
    //     </>
    //   ),
    // },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          
          <button onClick={() => handleDelete(record)}>Delete</button>
        </Space>
      ),
    },
    
  ];



  return <div  className="h-[100vh]">
    <Table columns={columns} dataSource={dataSource}  className=" "/> 
  </div>;
};

export default Approve;


