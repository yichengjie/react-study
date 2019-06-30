import React from 'react' ;

class CopyRequest extends React.Component{
    render(){
        return (
            <div className="row">
                <div className ="col-md-10">
                    <textarea className="form-control" rows="10">
                    </textarea>
                </div>
                <div className ="col-md-2">
                    <button className="btn btn-default" type="submit">
                        添加
                    </button>
                </div>
            </div>
        ) ;
    }
}

export default CopyRequest ;