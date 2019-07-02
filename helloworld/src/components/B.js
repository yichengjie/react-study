import React from 'react' ;

class MyComponent extends React.Component{

    handleClick(username,event){
        // 使用原生的 DOM API 获取焦点
        this.refs.myInput.focus();
        var value = this.refs.myInput.value ;
        console.info('value : ' , value) ;
    }

    render(){
        // 当组件插入到com后，ref属性添加一个组件的引用用于this.refs
        return (
            <div>
                <input type= "text" ref ="myInput" />
                <input type ="button" 
                    value ="点我输入框获取焦点" 
                    onClick ={this.handleClick.bind(this,'username')}/>
            </div>
        ) ;
    }
}

export default MyComponent ;