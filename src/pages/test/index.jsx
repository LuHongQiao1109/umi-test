import { Button } from "antd"
import { history } from "umi"

const TestPage = (props) => {
    const jumpHome = () => {
        history.push('/')
    }


    return (
        <div>
            <Button type="primary" onClick={jumpHome}>按钮</Button>
            <h1>test index11223</h1>
        </div>
    );
}

export default TestPage
