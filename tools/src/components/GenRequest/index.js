import React from 'react' ;
import { Tabs, Radio } from 'antd';
import { EOPNOTSUPP } from 'constants';
import TabContent1 from './TabContent1' ; 
import TabContent2 from './TabContent2';

const { TabPane } = Tabs;

class Demo extends React.Component {
  state = { size: 'small' };

  render() {
    const { size } = this.state;
    return (
      <div>
        <Radio.Group value={size}  style={{ marginBottom: 5 }}>
          <Radio.Button value="small">Dprice</Radio.Button>
          <Radio.Button value="default">Dreprice</Radio.Button>
          <Radio.Button value="large">Dshop</Radio.Button>
        </Radio.Group>
        <Tabs defaultActiveKey="1" size={size}>
          <TabPane tab="生产机搜索" key="1">
              <TabContent1></TabContent1>
          </TabPane>
          <TabPane tab="复制请求" key="2">
            <TabContent2></TabContent2>
          </TabPane>
          <TabPane tab="跟踪带" key="3">
            Content of tab 3
          </TabPane>
          <TabPane tab="构造请求" key="4">
            Content of tab 4
          </TabPane>
        </Tabs>
      </div>
    );
  }
}

export default Demo ;