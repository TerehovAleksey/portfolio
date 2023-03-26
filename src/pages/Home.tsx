import React from 'react';
import Header from "../components/Header";

const Home = () => {
    return (
        <>
            <Header/>
            <main className="section">
                <div className="container">
                    <ul className="content-list">
                        <li className="content-list__item">
                            <h2 className="title-2">Frontend</h2>
                            <p>.NET MAUI, Blazor, ASP.NET Core MVC, WPF</p>
                            <p>React/Redux, React Native</p>
                            <p>JavaScript/TypeScript, HTML, CSS</p>
                        </li>
                        <li className="content-list__item">
                            <h2 className="title-2">Backend</h2>
                            <p>.NET/C#, NodeJS </p>
                            <p>WebAPI, GraphQL, gRPC, RabbitMQ</p>
                            <p>MSSQL, PostgreSQL, MongoDB, Firebase</p>
                            <p>Docker, Azure, AWS</p>
                        </li>
                    </ul>
                </div>
            </main>
        </>
    );
};

export default Home;
