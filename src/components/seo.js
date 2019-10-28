/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ title, description, image, pathname, meta, keywords, lang }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            defaultTitle: title
            defaultDescription: description
            siteUrl: url
            defaultImage: image
            instagramUsername
          }
        }
      }
    `
  )

  const { defaultTitle, defaultDescription, siteUrl, defaultImage, instagramUsername } = site.siteMetadata;
  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
    url: `${siteUrl}${pathname || "/"}`,
  }

  return (
    <Helmet
      htmlAttributes={{
        lang
      }}
      title={seo.title}
      titleTemplate={`%s | ${defaultTitle}`}
      meta={[
        {
          name: `description`,
          content: seo.description,
        },
        {
          property: `og:title`,
          content: defaultTitle
        },
        {
          property: `og:description`,
          content: seo.description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        // Need to add author info
        // {
        //   name: `twitter:creator`,
        //   content: site.siteMetadata.author,
        // },
        {
          name: `twitter:title`,
          content: defaultTitle,
        },
        {
          name: `twitter:description`,
          content: seo.description,
        },
        {
          name: `twitter:image`,
          content: seo.image,
        },
        // TODO: Add instagram and facebook info
      ]
        .concat(
          keywords.length > 0
            ? {
                name: `keywords`,
                content: keywords.join(`, `),
              }
            : []
        )
        .concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: [],
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
}

export default SEO
