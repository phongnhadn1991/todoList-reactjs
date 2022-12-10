import { Col, Row, Input, Button, Select, Tag } from 'antd';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Todo from '../Todo';
import {v4 as uuidv4 } from 'uuid'

import { todoFilterSearch } from '../../redux/selectors'
import todoListSlice from '../../redux/slice/TodoSlice';

export default function TodoList() {

  const todoList = useSelector(todoFilterSearch)
  const dispatch = useDispatch()
  const [todoName,setTodoName] = useState('')
  const [priority,setPriority] = useState('Medium')
  const resetTodoName = () => {
    setTodoName('')
    setPriority('Medium')
  }  

  const handelAddButtonClick = () => {
    if(todoName === '' || todoName === null) {
      return; 
    }
    dispatch(todoListSlice.actions.addTodo({
      id: uuidv4(),
      name: todoName,
      completed: false,
      priority: priority,
    }))
    resetTodoName()
  }

  const onChangeInPut = (e) => {
    setTodoName(e.target.value)
  }

  const onChangePriority = (value) => {
    setPriority(value)
  }

  return (
    <Row style={{ height: 'calc(100% - 40px)' }}>
      <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
        {todoList && todoList.length > 0 && todoList.map(item => (
          <Todo key={item.id} idTodo={item.id} name={item.name} prioriry={item.priority} completed={item.completed} />
        ))}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: 'flex' }} compact>
          <Input value={todoName} onChange={(e) => onChangeInPut(e)}  />
          <Select defaultValue="Medium" value={priority} onChange={(value) => onChangePriority(value)}>
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
          <Button type='primary' onClick={() => handelAddButtonClick()}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
