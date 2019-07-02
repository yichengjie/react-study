import React from 'react' ;
import './style.css' ;
import ProductionSearch from './ProductionSearch' ;

class GenRequestXml extends React.Component{
    render(){
        return (
            <div className="gen-request-container">
                <div className="header">
                    <div className="brand">获取请求</div>
                    <div className="content">
                        <button type="button" className="btn btn-default item">生产机搜索</button>
                        <button type="button" className="btn btn-default item">复制XML</button>
                        <button type="button" className="btn btn-default item">跟踪带</button>
                        <button type="button" className="btn btn-default item">手动构造</button>
                    </div>
                </div>
                <div className="content">
                    <ProductionSearch></ProductionSearch>
                </div>
            </div>
        ) ;
    }
}

export default GenRequestXml ;