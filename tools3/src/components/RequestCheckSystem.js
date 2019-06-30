import React from 'react' ;

class RequestCheckSystem extends React.Component{
    constructor(props){
        super(props) ;
        this.state = {
            inputType:'search'
        } ;
    }
    handleChangeSystem(inputType){
        return (event) => {
            this.setState({inputType:inputType})
        }
    }
    render(){
        return (
            <nav className="search-area search-area-defaulta">
                系统选择:
                <select>
                    <option>请选择</option>
                </select>
                获取方式:
                <div className="btn-group" role="group" aria-label="Basic example"
                    style ={{marginTop:"8px"}}>
                    <button type="button" 
                            className={this.state.inputType === 'search'? 'btn btn-primary' : 'btn btn-default'} 
                            onClick={this.handleChangeSystem('search')}>
                        生产机搜索
                    </button>
                    <button type="button" 
                            className={this.state.inputType === 'copy'? 'btn btn-primary' : 'btn btn-default'}
                            onClick={this.handleChangeSystem('copy')}>
                        复制请求
                    </button>
                    <button type="button" 
                            className={this.state.inputType === 'tam'? 'btn btn-primary' : 'btn btn-default'}
                            onClick={this.handleChangeSystem('tam')}>
                        跟踪带
                    </button>
                </div> 
            </nav>
        ) ;
    }
}

export default RequestCheckSystem ;