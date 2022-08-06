import React, { useState } from 'react';
import { useEffect } from 'react';
import TableComponents from "../../components/table"
import { request } from 'umi';

const Listpage: React.FC = () => {

    const [tableList, setTableList] = useState([])

    useEffect(() => {
        requestFun()
    }, [])


    const requestFun = () => {
        request(
            '/classes/students',
            { method: 'POST' }
        ).then((res) => {
            setTableList(res)
        })
    }

    return (
        <div>
            <h1>学员列表</h1>
            <TableComponents tableList={tableList} />
        </div>
    );
}

export default Listpage
