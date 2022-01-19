import { useEffect, useState, useContext } from "react"
import { Link } from "react-router-dom"
import Button from "../components/Button"
import EventsNow from "../components/EventsNow"
import ArticlePreview from "../components/ArticlePreview"
import Blob from "../components/Blob"
import useFetch from "../useFetch"
import EventsSection from "../components/EventsSection"
import GoTopBtn from "../components/GoTopBtn"

const Home = () => {


    const { data, isLoading, error } = useFetch("http://localhost:8000/articles")

    return(
        <div className="landing-page">
            { error && <div>{ error }</div>}
            { isLoading && <div>Loading...</div>}

            <Blob class = "blob__orange blob-high" />
            <h1>Lautsprecher</h1>

            <EventsSection title = "Today"/>
            <Button txt = "+ events" link ="/events" className="button__orange" />

            <div className="content-main">
                {
                    data && (
                    <ArticlePreview title = { data[0].title} body = { data[0].body } link = "/single-article/0"  />
                    )
                }
                <div className="content-main__item community-preview card-shadow" >
                    <h2 className="content-main__title">Community</h2>
                    <Button txt = "Finde einen Musikern" link = "/musicians" className="button__red"/>
                </div>
            </div>


            <div className="content-sec">
                <Button txt = "Hi there" link = "/contact" className ="content-sec__btn button__lightblue card-shadow" />
                <Button txt = "About us" link = "/about" className ="content-sec__btn button__lightgreen  card-shadow"  />
            </div>
           {/* 
            <div className="content-main">
                {
                    data &&
                <ArticlePreview title = { data.title } body = { data.body } link = "/single-article/0"  />
                }
                <div className="content-main__item community-preview card-shadow" >
                    <h2 className="content-main__title">Community</h2>
                    <Button txt = "Finde einen Musikern" link = "/musicians" className="button__red"/>
                </div>
            </div>
           
           
             */}
             <GoTopBtn />
        </div>
    )
}

export default Home