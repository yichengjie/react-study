import React from 'react' ;
import { Input,Button ,Row, Col} from 'antd';


class TabContent1 extends React.Component{
    render(){
        return (
            <Row type="flex" justify="start" >
                <Col span={2} style={{textAlign:"right",marginRight:"5px",paddingTop:"3px"}}>票号/PNR:</Col>
                <Col span={4} ><Input placeholder="Basic usage" /></Col>
                <Col span={2} style={{textAlign:"right",marginRight:"5px",paddingTop:"3px"}} >
                    <label >日期:</label>
                </Col>
                <Col span={4}><Input placeholder="Basic usage" /></Col>
                <Col span={4} style={{marginLeft:"15px"}}>
                    <Button  type="primary" icon="search"> 搜索</Button>
                </Col>
            </Row>
        ) ;
    }
}

export default TabContent1 ;