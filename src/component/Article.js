import React from "react";
import { LangContext } from "../context";

class Article extends React.Component {
  render() {
    return (
      <LangContext.Consumer>
        {(value) => (
          <div>
          {value.lang === "Ar" ? (
            <div className="ar-lang">
              <p>مرحبًا ، هذه المقالة باللغة العربية</p>
            </div>
          ) : (
            <div className="eng-lang">
              <p>Hello, this article in English</p>
            </div>
          )}
  
          <button
              onClick={value.change} 
              value={value.lang === 'Ar' ? 'En' : 'Ar'}
           >
            {value.lang === 'Ar' ? "English" : "Arabic"}
           </button>
        </div>
        )}
      </LangContext.Consumer>
    );
  }
}

Article.contextType = LangContext;

export default Article;
