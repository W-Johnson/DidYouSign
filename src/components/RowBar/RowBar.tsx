import React, {useEffect} from 'react'
import './RowBar.scss'
import Node from "../Node/Node"
import axios from "axios";

interface Props {
    contentList: any[],
    setContentList: any
}

export default function RowBar({contentList, setContentList} : Props) {


    const getNode =  () => {
        console.log("in GetNode")
         axios.get("https://murmuring-mountain-00929.herokuapp.com/api/signatures?populate=%2A").then(response => {
            const infoList = response.data.data.map((obj: any) => {
                return {
                    username: obj.attributes.username,
                    more: obj.attributes.more,
                    image: "https://murmuring-mountain-00929.herokuapp.com" + obj.attributes.picture?.data?.attributes?.url
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
                            <Node info={sign} left={left}/>
                            <div className="bar-part"/>
                        </div>
                    )
                }).reverse()}
            </div>
        </div>
    )
}
