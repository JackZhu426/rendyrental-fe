import React from 'react';
import 'antd/dist/antd.css';
import {
  Form,
  Select,
  Checkbox,
  Row,
  Col,
  Input,
  Button,
  DatePicker,
  InputNumber,
  Modal,
} from 'antd';
import { PostProperty } from '../../config/Properties';
import UploadImage from '../ImageUpload/UploadImage';

const { Option } = Select;

const ManageListPage = '/property/manage-listings';

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 4,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 14,
    },
  },
};

const { TextArea } = Input;
class postForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: [],
      modalVisible: false,
    };
    this.setFiles = this.setFiles.bind(this);
  }

  handleFormSubmit = async (values, error) => {
    //formart data
    let newData = values;
    const PF = values.propertyFeatures;
    if (PF) {
      if (PF.indexOf('Furnished') > -1) {
        newData['furnished'] = true;
      } else newData['furnished'] = false;
    }
    if (PF) {
      if (values.propertyFeatures.indexOf('Petsconsidered') > -1) {
        newData['petAllowed'] = true;
      } else newData['petAllowed'] = false;
    }
    if (PF) {
      if (values.propertyFeatures.indexOf('Airconditioner') > -1) {
        newData['airCon'] = true;
      } else newData['airCon'] = false;
    }
    if (PF) {
      if (values.propertyFeatures.indexOf('Intercom') > -1) {
        newData['intercom'] = true;
      } else newData['intercom'] = false;
    }
    if (PF) {
      if (values.propertyFeatures.indexOf('smokingAllowed') > -1) {
        newData['smokingAllowed'] = true;
      } else newData['smokingAllowed'] = false;
    }
    const date = new Date();

    newData['postDate'] = date;

    newData['availableDate'] = Date(values.availableDate);

    newData['propImage'] = this.state.file;

    //console.log(newData);

    delete newData.propertyFeatures;

    await PostProperty(newData);

    //back to list page
    this.setState({
      modalVisible: true,
    });
    //window.alert('Add a new property to your list successfully');
    //window.location.href = ManageListPage;
  };

  setFiles(url) {
    this.setState({ file: [...this.state.file, url] });
  }

  Redirection = () => {
    window.location.href = ManageListPage;
  };

  render() {
    const { modalVisible } = this.state;
    return (
      <Form
        name="validate_other"
        {...formItemLayout}
        initialValues={{
          bedrooms: 1,
          bathrooms: 1,
          parkingspaces: 1,
          rent: 0,
        }}
        onFinish={(values) => this.handleFormSubmit(values)}
        onFinishFailed={(error) => {
          console.log(error);
        }}
      >
        <Modal
          visible={modalVisible}
          footer={[
            <Button key="OK" onClick={this.Redirection}>
              OK
            </Button>,
          ]}
        >
          <p></p>
          <p>Post your property successfully</p>
          <p></p>
        </Modal>
        <Form.Item
          style={{ height: 45 }}
          name="roomType"
          label="Property Type"
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Please select a property type!',
            },
          ]}
        >
          <Select placeholder="Please select a property type" size={'large'}>
            <Option value="House">House</Option>
            <Option value="Apartment">Apartment</Option>
            <Option value="Studio">Studio</Option>
          </Select>
        </Form.Item>
        <Form.Item name="propertyFeatures" label="Property Features">
          <Checkbox.Group>
            <Row>
              <Col span={8}>
                <Checkbox value="Furnished" style={{ lineHeight: '32px' }}>
                  Furnished
                </Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="Petsconsidered" style={{ lineHeight: '32px' }}>
                  Pets considered
                </Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="Airconditioner" style={{ lineHeight: '32px' }}>
                  Airconditioner
                </Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="Intercom" style={{ lineHeight: '32px' }}>
                  Intercom
                </Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="smokingAllowed" style={{ lineHeight: '32px' }}>
                  Smoking Allowed
                </Checkbox>
              </Col>
            </Row>
          </Checkbox.Group>
        </Form.Item>
        <Form.Item
          label="Street Number"
          model="multiple"
          name="streetNumber"
          rules={[
            {
              required: true,
              message: 'Please Input Steert number!',
            },
          ]}
        >
          <Input style={{ height: 40 }} type="number" />
        </Form.Item>
        <Form.Item
          label="Street"
          model="multiple"
          name="streetName"
          rules={[
            {
              required: true,
              message: 'Please Input Street name!',
            },
          ]}
        >
          <Input style={{ height: 40 }} />
        </Form.Item>
        <Form.Item
          label="City"
          mode="multiple"
          name="city"
          rules={[
            {
              required: true,
              message: 'Please input city!',
            },
          ]}
        >
          <Input style={{ height: 40 }} />
        </Form.Item>
        <Form.Item
          label="State"
          mode="multiple"
          name="state"
          rules={[
            {
              required: true,
              message: 'Please input state',
            },
          ]}
        >
          <Input style={{ height: 40 }} />
        </Form.Item>
        <Form.Item
          label="Postcode"
          mode="multiple"
          name="postCode"
          rules={[
            {
              required: true,
              message: 'Please input postcode!',
            },
          ]}
        >
          <Input style={{ height: 40 }} type="number" />
        </Form.Item>
        <Form.Item label="Bedrooms">
          <Form.Item
            name="numOfBed"
            noStyle
            rules={[
              {
                required: true,
                message: 'Please enter a number',
                pattern: new RegExp(/^[1-9]\d*$/, 'g'),
              },
            ]}
          >
            <InputNumber min={1} max={10} style={{ height: 35 }} />
          </Form.Item>
        </Form.Item>
        <Form.Item label="Bathrooms">
          <Form.Item
            name="numOfBath"
            noStyle
            rules={[
              {
                required: true,
                message: 'Please enter a number',
                pattern: new RegExp(/^[1-9]\d*$/, 'g'),
              },
            ]}
          >
            <InputNumber min={1} max={10} style={{ height: 35 }} />
          </Form.Item>
        </Form.Item>
        <Form.Item label="Parking spaces">
          <Form.Item
            name="numOfCarSpace"
            noStyle
            rules={[
              {
                required: true,
                message: 'Please enter a number',
                pattern: new RegExp(/^[1-9]\d*$/, 'g'),
              },
            ]}
          >
            <InputNumber min={1} max={10} style={{ height: 35 }} />
          </Form.Item>
        </Form.Item>
        <Form.Item label="Available Since" name="availableDate">
          <DatePicker picker="date" placeholder="Choose your date" />
        </Form.Item>
        <Form.Item
          label="Rent"
          name="rent"
          mode="multiple"
          rules={[
            {
              required: true,
              message: 'Please enter an amount',
              pattern: new RegExp(/^[1-9]\d*$/, 'g'),
            },
          ]}
        >
          <Input prefix="$" suffix="Per Week" style={{ height: 40 }} />
        </Form.Item>
        <Form.Item label="Description" name="description">
          <TextArea rows={5} placeholder="Description" style={{ width: 600 }} />
        </Form.Item>
        <Form.Item label="Pictures" name="propImage">
          <UploadImage setFiles={this.setFiles} />
          {this.state.file.length > 0
            ? `${this.state.file.length} images uploaded successfully.`
            : '*** Please upload at least one image and wait until all your images have finished uploading'}
        </Form.Item>
        <Form.Item
          wrapperCol={{
            xs: {
              span: 20,
              offset: 4,
            },
            sm: {
              span: 14,
              offset: 10,
            },
          }}
        >
          <Button type="primary" htmlType="submit" size={'large'}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    );
  }
}
export default postForm;
