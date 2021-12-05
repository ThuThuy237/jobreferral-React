import React, { useState } from 'react';
import {
    Row,
    Col,
    Tabs,
    Upload,
    message,
    Button,
} from 'antd';
import { InboxOutlined } from '@ant-design/icons';
// import { useSelector } from 'react-redux';
import styles from '../../Styles/InfoUser.module.scss';

export default function InfoUser() {
    // const { userLogin } = useSelector(state => state.LoginReducer);

    const [file, setFile] = useState(null);
    const [letter, setLetter] = useState(null);
    const changeTab = () => {

    }
    const { TabPane } = Tabs;
    const { Dragger } = Upload;

    const dummyRequest = ({ file, onSuccess }) => {
        setTimeout(() => {
            onSuccess("ok");
        }, 0);
    };
    const props1 = {
        name: 'file',
        multiple: false,
        accepts: ".doc, .docx, .pdf",
        onChange(info) {
            const { status } = info.file;
            if (status === 'done') {
                setFile(info.file);
                message.success(`${info.file.name} CV uploaded successfully.`);
            } else if (status === 'error') {
                message.error(`${info.file.name} CV upload failed.`);
            }
        }
    };
    const props2 = {
        name: 'file',
        multiple: false,
        accepts: ".doc, .docx, .pdf",
        onChange(info) {
            const { status } = info.file;
            if (status === 'done') {
                setLetter(info.file);
                message.success(`${info.file.name} Cover letter uploaded successfully.`);
            } else if (status === 'error') {
                message.error(`${info.file.name} Cover letter upload failed.`);
            }
        }
    };

    const uploadCv = () => {

    }
    const uploadCoverLetter = () => {

    }
    return (
        <>
            <Row >
                <Col span={24}><h1 className={styles.titlePage}><span>Job Applications</span></h1></Col>
            </Row>

            <Row justify="center" style={{ marginTop: '50px' }}>
                <Col span={23}>
                    <Tabs defaultActiveKey="1"
                        onChange={changeTab}
                        tabPosition="left"
                        size="large" >
                        <TabPane tab="Curriculum Vitae" key="1">
                            <Row justify="center" style={{ marginBottom: "50px" }}>
                                <Col style={{ textAlign: "center", height: 'fit-content', border: "1px solid gray", borderRadius: "20px" }}>
                                    <h1 style={{ marginTop: "10px"}}>Upload Curriculum Vitae</h1>
                                    <Dragger style={{ width: '60%', margin: "20px auto" }} {...props1} maxCount={1} customRequest={dummyRequest}>
                                        <p className="ant-upload-drag-icon">
                                            <InboxOutlined />
                                        </p>
                                        <p className="ant-upload-text">Click or drag file to this area to upload</p>
                                        <p className="ant-upload-hint">
                                            Support for a single or bulk upload. Strictly prohibit from uploading company data or other
                                            band files
                                        </p>
                                    </Dragger>
                                    {file ? <Button style={{ margin: "15px 0" }} type="primary" size="large" shape="round">Upload</Button> :
                                        <Button style={{ margin: "15px 0" }} onClick={uploadCv} disabled type="primary" size="large" shape="round">Upload</Button>}
                                </Col>
                            </Row>
                            <Row justify="center">
                                <Col span={18} style={{ textAlign: "center" }}>
                                    <h1>Preview</h1>
                                    <iframe title="File" src="https://www.cambridgeenglish.org/images/153312-yle-information-for-candidates.pdf" width="100%" height="900px">
                                    </iframe>
                                </Col>

                            </Row>
                        </TabPane>
                        <TabPane tab="Cover Letter" key="2">
                            <Row justify="center" style={{ marginBottom: "50px" }}>
                                <Col style={{ textAlign: "center", height: 'fit-content', border: "1px solid gray", borderRadius: "20px" }}>
                                    <h1 style={{ marginTop: "10px"}}>Upload Cover Letter</h1>
                                    <Dragger style={{ width: '60%', margin: "20px auto" }} {...props2} maxCount={1} customRequest={dummyRequest}>
                                        <p className="ant-upload-drag-icon">
                                            <InboxOutlined />
                                        </p>
                                        <p className="ant-upload-text">Click or drag file to this area to upload</p>
                                        <p className="ant-upload-hint">
                                            Support for a single or bulk upload. Strictly prohibit from uploading company data or other
                                            band files
                                        </p>
                                    </Dragger>
                                    {letter ? <Button style={{ margin: "15px auto" }} type="primary" size="large" shape="round">Upload</Button> :
                                        <Button style={{ margin: "15px auto" }} onClick={uploadCoverLetter} disabled type="primary" size="large" shape="round">Upload</Button>}
                                </Col>
                            </Row>
                            <Row justify="center">
                                <Col span={18} style={{ textAlign: "center" }}>
                                    <h1>Preview</h1>
                                    <iframe title="File" src="https://www.cambridgeenglish.org/images/153312-yle-information-for-candidates.pdf" width="100%" height="900px">
                                    </iframe>
                                </Col>
                            </Row>
                        </TabPane>
                    </Tabs>
                </Col>
            </Row>


        </>
    )
}
