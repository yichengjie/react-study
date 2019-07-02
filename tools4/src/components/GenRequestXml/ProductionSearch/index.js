import React from 'react' ;
import './style.css' ;

class ProductionSearch extends React.Component{

    render() {
        return (
            <div className="production-search-container">
                <div className="condition">
                    <form className="form-inline">
                        <div className="form-group">
                            <label htmlFor="exampleInputName2">票号/PNR &nbsp;: &nbsp;</label>
                            <input type="text" className="form-control" id="exampleInputName2" 
                                placeholder="请输入票号、PNR" />
                        </div>
                        <div className="form-group" style={{margin:"0 20px"}}>
                            <label htmlFor="exampleInputEmail2">日期&nbsp;: &nbsp;</label>
                            <input type="email" className="form-control" id="exampleInputEmail2" 
                                placeholder="请输入日期" />
                        </div>
                        <button type="submit" className="btn btn-primary btn-sm">搜索</button>
                    </form>
                </div>
                <textarea className="form-control" rows="6"></textarea>
                <div>
                    <button className="btn btn-default">添加</button>
                </div>
            </div>
        ) ;
    }
}

export default ProductionSearch ;