import { SwipeableDrawer } from "@material-ui/core";
import React, { useState } from "react";
import styled from "styled-components";
import SideBar from "../../components/SideBar";

const TabButton = styled.button`
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    height: 70px;
    width: 60px;
`

function Test() {
    const [isOpen, setIsOpen] = useState(false)
    return (<React.Fragment key={'Drawer'}>
        <TabButton onClick={() => { setIsOpen(true); }}>Drawer</TabButton>
        <SwipeableDrawer
            open={isOpen}
            onClose={() => { setIsOpen(false); }}
            onOpen={() => { setIsOpen(true); }}
        >
            <SideBar></SideBar>
        </SwipeableDrawer>
    </React.Fragment>)
}

export default Test;
