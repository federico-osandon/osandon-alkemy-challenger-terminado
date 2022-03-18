import React from 'react'
import { Col, Row } from 'react-bootstrap'

import MenuCard from '../MenuCard/MenuCard'

const MenuList = ({menuList}) => {
    return (
        <div className="container">
            <Row xs={1} md={2} className="g-4">
                {/* {Array.from({ length: 3 }).map((_, idx) => ( */}
                {menuList.map((menu) => (
                    <Col key={menu.id} >
                       <MenuCard menu={menu} />
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default MenuList