import React, {Component} from 'react';
import Wrapper from '../Wrapper/Wrapper';
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: true
    }

    SideDrawerClosedHandler = () =>{
        this.setState({showSideDrawer: false});
    }

    SideDrawerTogglerHandler = () => {
        this.setState((prevState) => {
            return { showSideDrawer: !prevState.showSideDrawer};
        });
    }

    render (){
        return (
            <Wrapper>
                <Toolbar drawerToggleClicked={this.SideDrawerTogglerHandler} />
                <SideDrawer open={this.state.showSideDrawer} closed={this.SideDrawerClosedHandler} />
                <div>ToolBar, SideDrawer, Backdrop</div>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Wrapper>
        )
    }
}


export default Layout;