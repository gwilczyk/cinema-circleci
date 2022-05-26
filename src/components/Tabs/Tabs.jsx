import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { Tab } from 'components/Tabs'

import 'components/Tabs/Tabs.scss'

const Tabs = ({ children }) => {
  const [activeTab, setActiveTab] = useState(children[0].props.label)

  const handleClick = (label) => setActiveTab((prev) => label)

  return (
    <div className="tabs">
      <ol className="tab-list">
        {children.map((child) => {
          const { label } = child.props

          return <Tab activeTab={activeTab} key={label} label={label} onClick={handleClick} />
        })}
      </ol>

      <div className="content">
        {children.map((child) =>
          child.props.label === activeTab ? child.props.children : undefined
        )}
      </div>
    </div>
  )
}

Tabs.propTypes = {
  children: PropTypes.array.isRequired
}

export default Tabs
