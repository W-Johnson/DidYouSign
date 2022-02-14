import React from 'react'
import Popover from '@mui/material/Popover';
import './Node.scss'
import {IInfoUser} from "../../interface";
import CardNode from "../CardNode/CardNode";

interface PropsNode {
    info: IInfoUser;
    left: boolean;
}

export default function Node({info, left}: PropsNode) {
    const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

    const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);


    return (<div className={"node"}>
        <div className={"node-circle"} onMouseEnter={handlePopoverOpen}
             onMouseLeave={handlePopoverClose}>
        </div>
        <Popover
            id="mouse-over-popover"
            sx={{
                pointerEvents: 'none',
                margin: left ? "-1em" : "1em"
            }}
            open={open}
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'center',
                horizontal: left ? 'left' : 'right',
            }}
            transformOrigin={{
                vertical: 'center',
                horizontal: !left ? 'left' : 'right',
            }}
            onClose={handlePopoverClose}
            disableRestoreFocus
        >
            <CardNode imageSrc={info.image} name={info.username} more={info.more}/>
        </Popover>

    </div>)
}