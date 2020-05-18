import React from 'react'
import PropTypes from 'prop-types'
import { IndexPageTemplate } from '@templates/index-page'
import { LayoutWrap } from '@components/Layout/style'

const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <LayoutWrap>
        <IndexPageTemplate
          image={getAsset(data.image)}
          title={data.title}
          heading={data.heading}
          subheading={data.subheading}
          description={data.description}
          intro={data.intro || { blurbs: [] }}
          mainpitch={data.mainpitch || {}}
        />
      </LayoutWrap>
    )
  } else {
    return <div>Loading...</div>
  }
}

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default IndexPagePreview
