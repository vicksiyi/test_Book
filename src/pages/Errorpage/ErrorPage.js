import React from 'react';
import { Link } from "react-router-dom";
import { Result, Button } from 'antd';
import './index.css'

class ErrorPage extends React.Component {
    render() {
        return (
            <div className="card-404">
                <Result
                    status="404"
                    title="404"
                    subTitle="页面好像丢失了"
                    extra={<Button type="primary">
                        <Link to="/">返回首页</Link>
                    </Button>}
                />
            </div>
        )
    }
}


export default ErrorPage;