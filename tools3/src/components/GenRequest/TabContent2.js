import React from 'react';
import { Input,Button ,Row, Col} from 'antd';
const { TextArea } = Input;

class TabContent2 extends React.Component{
    render(){
        return(
            <div>
                <Row>
                 <TextArea rows={4}  placeholder="请输入请求XML"/>
                </Row>
                <Row style ={{marginTop:"5px"}}>
                    <Button  type="primary"> 添加</Button>
                </Row>
            </div>
        ) ;
    }
}

export default TabContent2 ;