import React, {PureComponent} from 'react'
import Article from '../Article'
import './style.css'

export default class ArticleList extends PureComponent{
  state = {
    openArticleId: null
  }

  render() {
    console.log("ReDraw ArticleList")
    console.log("change")
    console.log(this.props.articles)
    if(this.props.articles !== undefined) {
      const articleElements = this.props.articles.map((article, index) =>
        <li key={article.id} className="article-list__li">
          <Article article={article}
                   isOpen={this.state.openArticleId === article.id}
                   onButtonClick={this.handleClick.bind(this, article.id)}
          />
        </li>
      )
      return (
          <div style={{height:"400px", overflow: "auto" }}>
            {articleElements}
          </div>
      )
    }
    else{
      return null
    }
  }

  handleClick = openArticleId => this.setState({
    openArticleId: this.state.openArticleId === openArticleId ? null : openArticleId
  })

}
