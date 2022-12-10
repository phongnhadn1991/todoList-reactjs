import { Col, Row, Input, Typography, Radio, Select, Tag } from 'antd';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import filtersSlice from '../../redux/slice/FilterSlice';

const { Search } = Input;

export default function Filters() {
  const dispatch = useDispatch()
  const [searchText, setSearchText] = useState('')
  const [filterStatus, setFilterSatus] = useState('All')
  const [prioriry, setPriority] = useState([])

  const onchangeSearchText = (e) => {
    setSearchText(e.target.value)
    dispatch(filtersSlice.actions.searcFilterChange(e.target.value))
  }

  const handleStatusChange = (e) => {
    setFilterSatus(e.target.value)
    dispatch(filtersSlice.actions.statusFilterChange(e.target.value))
  }

  const handlePriorityChange = (e) => {
    setPriority(e)
    dispatch(filtersSlice.actions.priorityFilterChange(e))
  }

  return (
    <Row justify='center'>
      <Col span={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Search
        </Typography.Paragraph>
        <Search value={searchText} onChange={onchangeSearchText} placeholder='input search text' />
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Filter By Status
        </Typography.Paragraph>
        <Radio.Group value={filterStatus} onChange={handleStatusChange}>
          <Radio value='All'>All</Radio>
          <Radio value='Completed'>Completed</Radio>
          <Radio value='Todo'>To do</Radio>
        </Radio.Group>
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Filter By Priority
        </Typography.Paragraph>
        <Select
          mode='multiple'
          allowClear
          placeholder='Please select'
          style={{ width: '100%' }}
          onChange={handlePriorityChange}
          value={prioriry}
        >
          <Select.Option value='High' label='High'>
            <Tag color='red'>High</Tag>
          </Select.Option>
          <Select.Option value='Medium' label='Medium'>
            <Tag color='blue'>Medium</Tag>
          </Select.Option>
          <Select.Option value='Low' label='Low'>
            <Tag color='gray'>Low</Tag>
          </Select.Option>
        </Select>
      </Col>
    </Row>
  );
}
