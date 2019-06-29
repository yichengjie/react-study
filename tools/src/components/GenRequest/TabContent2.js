import React from 'react';
import { Input } from 'antd';
const { TextArea } = Input;

class TabContent2 extends React.Component{
    render(){
        return(
            <div>
                <TextArea rows={4} />
            </div>
        ) ;
    }
}

export default TabContent2 ;