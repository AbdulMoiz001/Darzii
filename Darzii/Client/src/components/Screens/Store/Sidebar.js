import React from 'react'
import { Col, Nav } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'
import './Sidebar.css'

const Sidebar = () => {
    const location = useLocation()
  return (
    <Col 
    xs={2} 
    style={{
        height: '100%',
        width: '350px',
        boxShadow: '0 0 1rem 0 rgba(0, 0, 0, 0.3)', 
        backgroundColor: 'rgba(255, 255, 255, .08)',
        backdropFilter: 'blur(1px)',
        paddingTop: '20px',
    }}
    >
        <Nav variant="pills"  className='flex-column' >
            <Nav.Item className='navbutton'>
                <input type='checkbox' className='checkbox' checked='true'/>
                <Nav.Link href="/Store" className={`${location.pathname ==="/Featured"?"active":""} navlink`}>Featured</Nav.Link >
            </Nav.Item>
            <Nav.Item className='navbutton'>
                <input type='checkbox' className='checkbox'/>
                <Nav.Link href="/Store" className={`${location.pathname ==="/Mens-Shirts"?"active":""} navlink`}>Mens Shirts</Nav.Link >
            </Nav.Item>
            <Nav.Item className='navbutton'>
            <input type='checkbox' className='checkbox'/>
                <Nav.Link href="/Store" className={`${location.pathname ==="/Women-Shirts"?"active":""} navlink`}>Women Shirts</Nav.Link>
            </Nav.Item>
            <Nav.Item className='navbutton'>
            <input type='checkbox' className='checkbox'/>
                <Nav.Link href="/Store" className={`${location.pathname ==="/Kids-Shirts"?"active":""} navlink`}>Kids Shirts</Nav.Link>
            </Nav.Item>
            <Nav.Item className='navbutton'>
            <input type='checkbox' className='checkbox'/>
                <Nav.Link href="/Store" className={`${location.pathname ==="/Shoes"?"active":""} navlink`}>Shoes</Nav.Link>
            </Nav.Item>
            <Nav.Item className='navbutton'>
            <input type='checkbox' className='checkbox'/>
                <Nav.Link href="/Store" className={`${location.pathname ==="/Pants"?"active":""} navlink`}>Pants</Nav.Link>
            </Nav.Item>

        </Nav>
    </Col>
  )
}

export default Sidebar;