import React from 'react';
import {  Table } from 'antd';
import { connect } from 'react-redux';
import './App.css';

const App = ({ treeData }) => {



  const columns = [
    {
      title: 'Account Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Action',
      dataIndex: '',
      key: '',
    },
    {
      title: 'Account Type',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: 'Account Category',
      dataIndex: '',
      key: '',
    },
    {
      title: 'Use Status',
      dataIndex: '',
      width: '',
      key: '',
    },
  ];
  

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    onSelect: (record, selected, selectedRows) => {
      console.log(record, selected, selectedRows);
    },
    onSelectAll: (selected, selectedRows, changeRows) => {
      console.log(selected, selectedRows, changeRows);
    },
  };
  return (
    <>
    <div className='App'>
      <Table
        
        columns={columns}
        bordered
        className='table'
        rowSelection={{
          ...rowSelection,
        }}
        dataSource={ treeData }
      />
    </div>
    </>
  );
};

const mapStateToProp = state => {
  return {
    treeData: state.counter
  };
};


// const mapDispatchToProps = dispatch => ({

// });

export default connect(mapStateToProp, null)(App);
