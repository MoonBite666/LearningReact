import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function App() {
    return <div className={"card"}>
        <Avatar />
        <Intro />
        <SkillList />
    </div>;
}

function Avatar() {
    return <img className={"avatar"} src={"avatar.jpg"} alt={"avatar"}/>

}

function Intro() {
    return <div className={"data"}>
        <h1>Tanasa</h1>
        <p>A grey hair, different-eyed furry girl.</p>
    </div>
}

function SkillList() {
    return <div className={"skill-list"}>
        <Skill color="cyan" text="Catch Fish" emoji="🐟"/>
        <Skill color="green" text="Cook" emoji="😋"/>
    </div>

}

function Skill(props){
    return <div className={"skill"} style={{backgroundColor: props.color}}>
        <span>{props.text}</span>
        <span>{props.emoji}</span>
    </div>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);
