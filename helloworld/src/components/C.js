// 调用子元素回调 numTimes 次，来重复生成组件
import React from 'react' ;


//你可以把回调函数作为 props.children 进行传递
function Repeat(props) {
    let items = [];
    for (let i = 0; i < props.numTimes; i++) {
      items.push(props.children(i));
    }
    return <div>{items}</div>;
}
  
function ListOfTenThings() {
    return (
        <Repeat numTimes={10}>
            {(index) => <div key={index}>This is item {index} in the list</div>}
        </Repeat>
    );
}

export default ListOfTenThings ;