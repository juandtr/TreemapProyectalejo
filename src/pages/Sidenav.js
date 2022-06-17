import React, { Component } from 'react';
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import {BrowserRouter, Route} from 'react-router-dom';
import '../css/estilos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartPie, faTable} from '@fortawesome/free-solid-svg-icons';

import TestEs3i from '../components/TestEs3i';

class Sidenav extends Component {
    state={
        expanded: false,
        selected: 'font-awesome'
    }

    onToggle=expanded=>{
        this.setState({expanded: expanded})
    }

    render() {
        const {expanded}=this.state;
        return (
            <div style={{marginLeft: expanded ? 240: 64}}>
                <BrowserRouter>
    <Route render={({ location, history }) => (
        <React.Fragment>
            <SideNav
                onSelect={(selected) => {
                    const to = '/' + selected;
                    if (location.pathname !== to) {
                        history.push(to);
                    }
                }}
                onToggle={this.onToggle}
            >
                
                <SideNav.Toggle />
                <SideNav.Nav defaultSelected="exJson">
                                  
                    
                    <NavItem eventKey="exJson">
                        <NavIcon>
                        <FontAwesomeIcon icon={faTable} className="iconSidenav"/>
                        </NavIcon>
                        <NavText>
                        Gráfica Círcular
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="es3i">
                        <NavIcon>
                        <FontAwesomeIcon icon={faChartPie} className="iconSidenav"/>
                        </NavIcon>
                        <NavText>
                        Test Es3i
                        </NavText>
                    </NavItem> 
                                
                
                </SideNav.Nav>
            </SideNav>
            <main style={{padding: '30px'}}>      
               
                <Route path="/es3i" exact component={props => <TestEs3i/>} />                
            </main>
        </React.Fragment>
    )}
    />
</BrowserRouter>
            </div>
        );
    }
}

export default Sidenav;