import React from 'react';

import "./styles.css"

interface PageHeaderProps {
  title: string;
  description?: string;
  emoji?: string,
  message?: any[]
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
  return (
    <header className="page-header" >
      <div className="header-content">
        <div>
        <strong>{props.title}</strong>
        {props.description && <p>{props.description}</p>}
        </div>
        <div>
          <div id="emoji">
            <p>{props.emoji}</p>
            <small>{props.message}</small>
          </div>
        </div>

        {props.children}
      </div>

    </header >
  )

}

export default PageHeader;