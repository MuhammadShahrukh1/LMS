import React, { useState } from 'react';
import { Button, DatePicker, Select, message, Steps, theme, Form, Typography, Input } from 'antd';
import { Row, Col } from 'antd'
import useMessage from 'antd/es/message/useMessage';
const { Step } = Steps
const { Title } = Typography;
import FormLayout from '../components/FormLayout';
import stepsDetails from '../assets/formData';
import Sidebar from '../components/Sidebar';
import { useForm } from 'react-hook-form';
const {Option} = Select;



const LoanRequest = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    mode: 'all'
  })
  const [currentState, setCurrentState] = useState(0)
  const [submitable, setSubmitable] = useState(false)

  const currentStep = stepsDetails[currentState];
  const back = () => {
    setCurrentState(currentState - 1)
  };

  const next = () => {
    setCurrentState(currentState + 1);
  };

// const next = () =>{
//   setCurrentState(currentState + 1)
// }

  const submitForm = (data) => {
    console.log(data);
    message.success('Form Succesfully submitted')
  }



  return (
    <div className="flex flex-col bg-blue-50 min-h-screen">
      <Sidebar />
      <div className="px-4 py-20 md:p-6 overview md:w-full">
        <div className="md:flex justify-between items-center mb-6 hidden">
          <h1 className="text-2xl font-bold p-3 text-blue-500">Customer Dashboard</h1>
        </div>

        {/* <div className="bg-white mt-3 md:mt-0 px-4 py-6 mb-6 rounded-lg shadow-lg">
              <h2 className="text-lg font-semibold text-gray-600">Welcome, {currentuser.username}</h2>
              <p className="text-gray-500 font-normal">Thank you for using our platform. Here's an overview of your account.</p>
            </div> */}

        {/* <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6 mt-8">
              <CardItem title="Active Loans" value="0" description="Good Standing" color="text-green-600" />
              <CardItem title="Approved Loans" value="0" description="$0.00" />
              <CardItem title="Pending Requests" value="0" description="N/A" />
              <CardItem title="References" value="0" description="Not Verified" color="text-red-600" />
            </div> */}

        {/* <div className="bg-white p-6 text-center rounded-lg shadow-xl mt-8">
              <p className="text-gray-600 mb-4">No recent activity to display.</p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                Apply for a New Loan
              </button>
            </div> */}


        <div className='px-12 py-8 max-w-full bg-white rounded-xl shadow-xl'>

          <Steps current={currentState} style={{ marginBottom: 20 }}>
            {stepsDetails.map((step) => (
              <Step key={step.title} title={step.title} style={{}} />
            ))}
          </Steps>

          <Form layout='vertical' onSubmit={handleSubmit(submitForm)}>
            <FormLayout>

              {currentStep.fields.map((field) => (
                <Form.Item key={field.name} label={field.label} rules={field.rules} >
                  {
                    field.type === 'select' ? (
                      <Select placeholder={`Select ${field.label}`} {...register(`${field.label}`)}>
                        {field.options.map((opt) => (
                          <Option key={opt.value} value={opt.value}>{opt.label}</Option>
                        ))}
                      </Select>
                    ) : field.type === 'date' ? (
                      <DatePicker style={{ width: '100%' }} />
                    ) : (
                      <Input placeholder={`Enter ${field.label}`} type={field.type} />
                    )
                  }
                </Form.Item>
              )
              )}
            </FormLayout>
            <div className='mb-4 mt-8 w-full relative'>
              {currentState > 0 && <Button onClick={back} type='primary'>Back</Button>}
              {currentState < stepsDetails.length - 1 && <Button onClick={next} type='primary' style={{ position:'absolute',right:'0px', bottom:'0px' }}>Next</Button>}
              {currentState == stepsDetails.length - 1 && <Button onClick={handleSubmit} type='submit' style={{ position: 'absolute', right: 0 }}>Submit</Button>}
            </div>
            
          </Form>
        </div>

      </div>
    </div>
  );
}


export default LoanRequest