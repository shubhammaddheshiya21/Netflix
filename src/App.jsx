import React from "react";
import Card from "./Cards.jsx";
import Sdata from "./Sdata.jsx";
const App = () => (
    <>
        <h1 className="heading_style">List of Top 6 Netflix Series in 2023</h1>
        {Sdata.map((val, index) => {
            console.log(index);
            return (
                <Card
                    imgsrc={val.imgscr}
                    title={val.title}
                    sname={val.sname}
                    link={val.links}
                />
            );
        })}
    </>
);

export default App;