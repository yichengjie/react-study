import React from 'react' ;

class SearchRequest extends React.Component{
    render(){
        return (
            <form className="form-inline">
                <div className="form-group">
                    <label htmlFor="exampleInputName2">票号/PNR : &nbsp;</label>
                    <input type="text" className="form-control" id="exampleInputName2" placeholder="Jane Doe" />
                </div>
                <div className="form-group">
                    <label htmlFor ="exampleInputEmail2">&nbsp;&nbsp;&nbsp;&nbsp;日期 : &nbsp;</label>
                    <input type="email" className="form-control" id="exampleInputEmail2" placeholder="jane.doe@example.com" />
                </div>
                &nbsp;&nbsp;&nbsp;
                <button type="button" className="btn btn-default">搜索</button>
            </form>
        ) ;
    }
}

export default SearchRequest ;