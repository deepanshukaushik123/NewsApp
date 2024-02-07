import React, { useState } from 'react'
import NewsItem from './NewsItem'
import InfiniteScroll from 'react-infinite-scroll-component';
import { useEffect } from 'react';

export default function Home(props) {
    let [totalResults, setTotalresults] = useState(0)
    let [articles, setArticles] = useState([])
    let [page, setPage] = useState(1)
    let [q, setQ] = useState("")

    async function getAPIData(q) {
        setPage(1)
        setQ(q)
        var response = await fetch(`https://newsapi.org/v2/everything?q=${q}&page=${page}&pageSize=12&language=${props.language}&sortBy=publishedAt&apiKey=301c5411d2c14378ae6c68c0ff399326`)
        response = await response.json()
        if (response.articles) {
            setArticles(response.articles)
            setTotalresults(response.totalResults)
        }
    }

    let fetchData = async () => {
        setPage(page + 1)
        var response = await fetch(`https://newsapi.org/v2/everything?q=${q}&page=${page}&pageSize=12&language=${props.language}&sortBy=publishedAt&apiKey=301c5411d2c14378ae6c68c0ff399326`)
        response = await response.json()
        if (response.articles) {
            setArticles(articles.concat(response.articles.filter((x) => x.title !== "[Removed]")))
        }
    }

    useEffect(() => {
        if (props.search === "")
            getAPIData(props.q)
        else
            getAPIData(props.search)
    }, [props])

    return (
        <>
            <div className="container-fluid my-3">
                <h4 className='bg-secondary text-center text-light p-2'>{props.q} News Items</h4>
                <InfiniteScroll
                    className='infinite'
                    dataLength={articles.length} //This is important field to render the next data
                    next={fetchData}
                    hasMore={articles.length < totalResults}
                    loader={
                        <div className='text-center py-5'>
                            <div className="spinner-border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    }
                    endMessage={
                        <p style={{ textAlign: 'center' }}>
                            <b>No more NEWS Articles</b>
                        </p>
                    }
                >
                    <div className="row">
                        {articles.map((item, index) => {
                            return <NewsItem
                                key={index}
                                title={item.title}
                                description={item.description}
                                source={item.source.name}
                                url={item.url}
                                pic={item.urlToImage}
                                date={(new Date(item.publishedAt)).toLocaleDateString()}
                            />
                        })}
                    </div>
                </InfiniteScroll>
            </div>
        </>
    )
}

