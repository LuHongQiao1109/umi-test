import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import AV from "leancloud-storage"

import { message, Upload } from 'antd';
import React, { useState } from 'react';

const { Query, User } = AV;

const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
};

const beforeUpload = (file) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';

    if (!isJpgOrPng) {
        message.error('You can only upload JPG/PNG file!');
    }

    const isLt2M = file.size / 1024 / 1024 < 2;

    if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
    }

    return isJpgOrPng && isLt2M;
};

const UpLoad = () => {
    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState();

    // const handleChange = (info) => {
    //     if (info.file.status === 'uploading') {
    //         setLoading(true);
    //         return;
    //     }
    //     if (info.file.status === 'done') {
    //         // Get this url from response in real world.
    //         getBase64(info.file.originFileObj, (url) => {
    //             setLoading(false);
    //             setImageUrl(url);
    //         });
    //     }
    // };
    const customRequest = (info) => {
        // if (info.file.status === 'uploading') {
        //     setLoading(true);
        //     return;
        // }
        // if (info.file.status === 'done') {
        //     // Get this url from response in real world.
        //     getBase64(info.file.originFileObj, (url) => {
        //         // const data = { base64: url };
        //         // resume.txt 是文件名
        //         const file = new AV.File('resume.txt', { base64: url });
        //         console.log('%c ❤️file❤️:', 'color: Indigo; background: Orchid; font-size: 20px;', file);
        //         setLoading(false);
        //         setImageUrl(file);
        //     });
        // }
        getBase64(info.file, (url) => {
            // const data = { base64: url };
            // resume.txt 是文件名
            const file = new AV.File('resume.txt', { base64: url });
            file.save().then((res) => {
                console.log(res);
                setLoading(false);
                setImageUrl(res.attributes.url);
            })

        });

    }

    const uploadButton = (
        <div>
            {loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div
                style={{
                    marginTop: 8,
                }}
            >
                Upload
            </div>
        </div>
    );
    return (
        <Upload
            name="avatar"
            listType="picture-card"
            className="avatar-uploader"
            showUploadList={false}
            //action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            customRequest={customRequest}
            beforeUpload={beforeUpload}
        // onChange={handleChange}
        >
            {imageUrl ? (
                <img
                    src={imageUrl}
                    alt="avatar"
                    style={{
                        width: '100%',
                    }}
                />
            ) : (
                uploadButton
            )}
        </Upload>
    );
};

export default UpLoad;