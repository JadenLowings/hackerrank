import React from 'react';
import './App.css';
import 'h8k-components';

import Articles from './components/Articles';

const title = "Sorting Articles";

function App({ articles }) {
    const [filterArticles, setFilterArticles] = React.useState([]);
    const orderByUpvotesClick = () => {
        const sorted = [...articles].sort((a, b) => b.upvotes - a.upvotes);
        setFilterArticles(sorted);
    };
    const orderByDateClick = () => {
        const sorted = [...articles].sort((a, b) => new Date(b.date) - new Date(a.date));
        setFilterArticles(sorted);
    };
    React.useEffect(() => {
        setFilterArticles(articles.sort((a, b) => b.upvotes - a.upvotes));
    }, []);

    return (
        <div className="App">
            <h8k-navbar header={title}></h8k-navbar>
            <div className="layout-row align-items-center justify-content-center my-20 navigation">
                <label className="form-hint mb-0 text-uppercase font-weight-light">
                    Sort By
                </label>
                <button data-testid="most-upvoted-link"
                    onClick={orderByUpvotesClick}
                    className="small">
                    Most Upvoted
                </button>
                <button data-testid="most-recent-link"
                    onClick={orderByDateClick}
                    className="small">
                    Most Recent
                </button>
            </div>
            <Articles articles={filterArticles} />
        </div>
    );

}

export default App;
