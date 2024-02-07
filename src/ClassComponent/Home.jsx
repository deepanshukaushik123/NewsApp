import React, { Component } from 'react'
import NewsItem from './NewsItem'
import InfiniteScroll from 'react-infinite-scroll-component';

export default class Home extends Component {
    constructor() {
        super()
        this.state = {
            totalResults: 0,
            articles: [],
            page: 1,
            q: ""
        }
    }
    async getAPIData(q) {
        // this.setState({ page: 1, q: q })
        // var response = await fetch(`https://newsapi.org/v2/everything?q=${q}&page=${this.state.page}&pageSize=12&language=${this.props.language}&sortBy=publishedAt&apiKey=c5ae0910cc1840bf8a49bacabb47a6fd`)
        // response = await response.json()
        // this.setState({
        //     totalResults: response.totalResults,
        //     articles: response.articles.filter((x) => x.title !== "[Removed]")
        // })

        this.setState({ page: 1, q: q })
        var response = await fetch(`https://newsapi.org/v2/everything?q=${q}&page=${this.state.page}&pageSize=12&language=${this.props.language}&sortBy=publishedAt&apiKey=301c5411d2c14378ae6c68c0ff399326`)
        response = await response.json()
        if (response.articles) {
            this.setState({
                totalResults: response.totalResults,
                articles: response.articles.filter((x) => x.title !== "[Removed]")
            })
        }
    }

    fetchData = async () => {
        // this.setState({ page: this.state.page + 1 })
        // var response = await fetch(`https://newsapi.org/v2/everything?q=${this.state.q}&page=${this.state.page}&pageSize=12&language=${this.props.language}&sortBy=publishedAt&apiKey=c5ae0910cc1840bf8a49bacabb47a6fd`)
        // response = await response.json()
        // this.setState({
        //     totalResults: response.totalResults,
        //     articles: response.articles.filter((x) => x.title !== "[Removed]")
        // })

        this.setState({ page: this.state.page + 1 })
        var response = await fetch(`https://newsapi.org/v2/everything?q=${this.state.q}&page=${this.state.page}&pageSize=12&language=${this.props.language}&sortBy=publishedAt&apiKey=301c5411d2c14378ae6c68c0ff399326`)
        response = await response.json()
        if (response.articles) {
            this.setState({
                articles: this.state.articles.concat(response.articles.filter((x) => x.title !== "[Removed]"))
            })
        }
    }

    componentDidMount() {
        this.getAPIData(this.props.q)
    }
    componentDidUpdate(oldProps) {
        if (this.props !== oldProps) {
            if (this.props.search && this.props.search !== oldProps.search)
                this.getAPIData(this.props.search)
            else
                this.getAPIData(this.props.q)
        }
    }
    render() {
        return (
            <>
                <div className="container-fluid my-3">
                    <h4 className='bg-secondary text-center text-light p-2'>{this.props.q} News Items</h4>
                    <InfiniteScroll
                        className='infinite'
                        dataLength={this.state.articles.length} //This is important field to render the next data
                        next={this.fetchData}
                        hasMore={this.state.articles.length < this.state.totalResults}
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
                            {this.state.articles.map((item, index) => {
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
}
