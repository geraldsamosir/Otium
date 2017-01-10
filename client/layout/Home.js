import React, { Component } from 'react'

import { Button, CardText } from 'react-mdl';
import { Carousel , Card,Row ,Col } from 'antd';

export default class Home extends Component{
    render(){
        return(
            <div>
                <Carousel autoplay>

                    <div>
                        <img  width="100%" src="https://media.ciayo.com/banner/desktop_1483504620GyeYYd67ef.png" alt=""/>
                    </div>
                    <div>
                        <img  width="100%" src="https://media.ciayo.com/banner/desktop_1483504650UWyLexUIKr.png" alt=""/>
                    </div>
                    <div>
                        <img  width="100%" src="https://media.ciayo.com/banner/desktop_14835046954rZc6YVMH9.png" alt=""/>
                    </div>
                    <div>
                        <img  width="100%" src="https://media.ciayo.com/banner/desktop_1483504718f8wi6Id2gZ.png" alt=""/>
                    </div>
                </Carousel>
                <div className="ant-menu-dark" style={{padding:'5%' }}>
                     <Row>
                        <Col span="8">
                        <Card  style={{marginLeft:'2%', marginRight:'2%'}}>
                            <div className="custom-image">
                            <img alt="example" width="100%" src="https://media.ciayo.com/editorchoice/desktop_1482203497EkhUJMR5AY.jpg" />
                            </div>
                        </Card>
                        </Col>
                        <Col span="8">
                        <Card  style={{marginLeft:'2%', marginRight:'2%'}}>
                            <div className="custom-image">
                            <img alt="example" width="100%" src="https://media.ciayo.com/editorchoice/desktop_1482203558dR40NIh5rt.jpg" />
                            </div>
                        </Card>
                        </Col>
                        <Col span="8">
                        <Card  style={{marginLeft:'2%', marginRight:'2%'}}>
                            <div className="custom-image">
                            <img alt="example" width="100%" src="https://media.ciayo.com/editorchoice/desktop_148220351971ThuI8GNb.jpg" />
                            </div>
                        </Card>
                        </Col>
                    </Row>
                </div>
                <Row style={{paddingLeft :'15%'}}>
                <Col span="5">
                <Card  style={{marginLeft:'2%', marginRight:'2%'}}>
                    <div className="custom-image">
                        <img alt="example" width="100%" src="https://media.ciayo.com/comics/cover/1483981786-up-cover-comic-300px-trigger-junkie.jpg" />
                    </div>
                </Card>
                </Col>
                <Col span="5">
                <Card  style={{marginLeft:'2%', marginRight:'2%'}}>
                    <div className="custom-image">
                        <img alt="example" width="100%" src="https://media.ciayo.com/comics/cover/1483981786-up-cover-comic-300px-trigger-junkie.jpg" />
                    </div>
                </Card>
                </Col>
                <Col span="5">
                <Card  style={{marginLeft:'2%', marginRight:'2%'}}>
                    <div className="custom-image">
                        <img alt="example" width="100%" src="https://media.ciayo.com/comics/cover/1483981786-up-cover-comic-300px-trigger-junkie.jpg" />
                    </div>
                </Card>
                </Col>
                <Col span="5">
                <Card  style={{marginLeft:'2%', marginRight:'2%'}}>
                    <div className="custom-image">
                        <img alt="example" width="100%" src="https://media.ciayo.com/comics/cover/1483981786-up-cover-comic-300px-trigger-junkie.jpg" />
                    </div>
                </Card>
                </Col>
                <Col span="5">
                <Card  style={{marginLeft:'2%', marginRight:'2%'}}>
                    <div className="custom-image">
                        <img alt="example" width="100%" src="https://media.ciayo.com/comics/cover/1483981786-up-cover-comic-300px-trigger-junkie.jpg" />
                    </div>
                </Card>
                </Col>
                <Col span="5">
                <Card  style={{marginLeft:'2%', marginRight:'2%'}}>
                    <div className="custom-image">
                        <img alt="example" width="100%" src="https://media.ciayo.com/comics/cover/1483981786-up-cover-comic-300px-trigger-junkie.jpg" />
                    </div>
                </Card>
                </Col>
                <Col span="5">
                <Card  style={{marginLeft:'2%', marginRight:'2%'}}>
                    <div className="custom-image">
                        <img alt="example" width="100%" src="https://media.ciayo.com/comics/cover/1483981786-up-cover-comic-300px-trigger-junkie.jpg" />
                    </div>
                </Card>
                </Col>
                <Col span="5">
                <Card  style={{marginLeft:'2%', marginRight:'2%'}}>
                    <div className="custom-image">
                        <img alt="example" width="100%" src="https://media.ciayo.com/comics/cover/1483981786-up-cover-comic-300px-trigger-junkie.jpg" />
                    </div>
                </Card>
                </Col>
                </Row>   
            </div>
        )
    }
}