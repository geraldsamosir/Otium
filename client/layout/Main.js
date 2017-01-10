import React, { Component } from 'react'

import { LocaleProvider , Layout, Menu, Breadcrumb,Input} from 'antd';

import {Drawer,Navigation} from 'react-mdl'
import enUS from 'antd/lib/locale-provider/en_US';
const { Header, Content, Footer } = Layout;




export default class Main extends Component {


    render(){
        
        return(
            <LocaleProvider locale={enUS} >
                <Layout className="layout">
                    <Header className="navbar-fixed-top">
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['2']}
                        style={{ lineHeight: '64px' }}
                     >
                        <Menu.Item title="LOGO"><img width="50%" src="https://www.ciayo.com/static/media/logo.08e6f2cd.png" alt=""/></Menu.Item>
                        <Menu.Item key="1">nav 1</Menu.Item>
                        <Menu.Item key="2">nav 2</Menu.Item>
                    </Menu>
                    </Header>
                    <Content>
                    <br/><br/><br/>
                    <div>
                        {this.props.children}
                    </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                    ©2016 Otium
                    </Footer>
                </Layout>            
            </LocaleProvider>
        )
    }
}