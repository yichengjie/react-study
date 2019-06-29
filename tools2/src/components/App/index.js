import React from 'react' ;
import Button from '@material-ui/core/Button';
import './style.css';
import SystemCheck from '../SystemCheck' ;
import Container from '@material-ui/core/Container';
import GenRequest from '../GenRequest' ;
class App extends React.Component{
    render(){
        return (
            <Container maxWidth="xl" className="App">
                <SystemCheck></SystemCheck>
                <GenRequest></GenRequest>
                <Button variant="contained" color="primary">
                    你好，世界
                </Button>
            </Container>
        ) ;
    }
}

export default App ;