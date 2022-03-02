import './App.css';
import Header from "./components/Header/Header";

import React, {useState} from "react";
import RowBar from "./components/RowBar/RowBar";
import {IInfoUser} from "./interface";
import SocialMedia from "./components/SocialMedia";
function App() {


    const [contentList, setContentList] = useState<IInfoUser[]>([])
    return (
        <div className="App">
            <Header setContentList={setContentList} contentList={contentList}/>
            <div>
                <SocialMedia/>
                <RowBar contentList={contentList} setContentList={setContentList}/>
            </div>
        </div>
    );
}

export default App;
