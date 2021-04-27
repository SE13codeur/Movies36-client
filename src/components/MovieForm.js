import React, {useState, useEffect} from 'react'
import { Form, Input, Button } from 'antd'
import { useNavigate } from 'react-router'

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const RoomForm = ({ id, room, setRoom }) => {

    const navigate = useNavigate()
    const [values, setValues] = useState(null)
    
    useEffect(() => {
        setValues(room)
        console.log(values)
    }, [room, id, values])

    const onFinish = async (values) => {
        await window.fetch(`/api/rooms/${id}`, {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'PATCH',
            body: JSON.stringify(values)
        })
        console.log('Success:', values);
        setRoom(values)
    };

    const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
    };

    const handleChange = (event) => {
        const { value, name } = event.target
        setValues({ ...values, [name]: value })
    }

    const handleDelete = async () => {
        await window.fetch(`/api/rooms/${id}`, {
            method: 'DELETE'
        })

        navigate('/rooms')
    }

    if (!values) return null

    return (
        <Form
            {...layout}
            name='basic'
            initialValues={{
            remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >
            
            <Form.Item
                label="Name"
                name="name"
                initialValue={values.name}

                rules={[
                {
                    required: true,
                    message: 'Please input your room\'s name!',
                },
                ]}
            >
                <Input
                    value={values.name}
                    name='name'
                    onChange={handleChange}
                    
                />
            </Form.Item>

            <Form.Item
                label="Max capacity"
                name="maxPeople"
                initialValue={values.maxPeople}
                rules={[
                    {
                        required: false
                    },
                ]}
            >
                <Input value={values.maxPeople} type='number' name='maxPeople' />
            </Form.Item>

            <Form.Item {...tailLayout}>
            </Form.Item>

            <Form.Item {...tailLayout}>
                <Button
                    type="primary"
                    htmlType="submit"
                >
                        Submit
                </Button>
                <Button
                    type="danger"
                    htmlType="delete"
                    onClick={handleDelete}
                >
                        Delete
                </Button>
            </Form.Item>

        </Form>
    );
};

export default RoomForm