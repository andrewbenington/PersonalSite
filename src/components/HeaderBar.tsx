import headshot from '../files/headshot.jpg';
import React, { useState } from 'react';
import { Banner, Headshot, Info, Name, PageTitle } from './style';
import { FlexColStretch, FlexColWide, FlexRow, FlexRowRepel } from '../style';
import Navigation from './Navigation';
import { useLocation } from 'react-router-dom'


function HeaderBar() {
    let pages = useLocation().pathname.split('/');
    let pageName = pages[pages.length - 1].charAt(0).toUpperCase() + pages[pages.length - 1].slice(1);
    const [title, setTitle] = useState(pageName === "" ? "About" : pageName);

    return (
        <FlexRow>
            <Headshot src={headshot} alt={"Andrew Benington Headshot"} />
            <FlexColWide>
                <Banner>
                    <FlexRowRepel>
                        <FlexColStretch>
                            <Name>Andrew Benington</Name>
                            <br></br>
                            <Info>
                                <p>Technology Leadership Program at Target</p>
                                <p>Alumnus, University of Illinois at Urbana-Champaign</p>
                            </Info>
                        </FlexColStretch>

                        <PageTitle>{title}</PageTitle>
                    </FlexRowRepel>
                    <Navigation handler={setTitle} />
                </Banner>
            </FlexColWide>
        </FlexRow>
    );
}

export default HeaderBar;

