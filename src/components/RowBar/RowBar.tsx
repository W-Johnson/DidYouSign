import React, {useEffect, useState} from 'react'
import './RowBar.scss'
import Node from "../Node/Node"
import {IInfoUser} from "../../interface";
import axios from "axios";
import CardNode from "../CardNode/CardNode";

export default function RowBar() {


    const [contentList, setContentList] = useState<IInfoUser[]>([])
    const getNode =  () => {
         axios.get("http://52.47.202.39:1337/signatures").then(response => {
            const infoList = response.data.map((obj: any) => {
                return {
                    username: obj.username,
                    more: obj.more,
                    image: "http://52.47.202.39:1337" + obj.picture.url
                }
            });
            setContentList(infoList)
        })

    }

    let left = false;
    useEffect(() => {
        getNode()
    }
        , []
    )
    return (
        <div className={"principal-part"}>
            
            <div className="bar">
                {contentList.map((sign, id) => {
                    left = !left;
                    return (
                        <div className={"part-node"} key={id}>
                            <div className="bar-part"/>
                            <Node info={sign} left={left}/>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
