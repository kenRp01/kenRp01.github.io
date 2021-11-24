/* eslint-disable react/require-default-props */
/* eslint-disable react/no-danger */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable jsx-a11y/html-has-lang */
import React from 'react';
import PropTypes from 'prop-types';

export default function HTML({
  htmlAttributes,
  headComponents,
  bodyAttributes,
  preBodyComponents,
  postBodyComponents,
  body,
}) {
  return (
    <html {...htmlAttributes}>
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3552473861451375"
          crossOrigin="anonymous"
        />
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        {headComponents}
        <meta
          name="google-site-verification"
          content="pkDEu-F98KUoo5v_8gyYM9it2L9csuqVdahulXNj5kA"
        />
      </head>
      <body {...bodyAttributes}>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3552473861451375"
          crossOrigin="anonymous"
        />
        {/* <!-- 横長広告 --> */}
        <ins
          className="adsbygoogle"
          // eslint-disable-next-line react/style-prop-object
          style={{ display: 'block' }}
          data-ad-client="ca-pub-3552473861451375"
          data-ad-slot="7070615353"
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
        <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
        {preBodyComponents}
        <div key="body" id="___gatsby" dangerouslySetInnerHTML={{ __html: body }} />
        {postBodyComponents}
      </body>
    </html>
  );
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
};
