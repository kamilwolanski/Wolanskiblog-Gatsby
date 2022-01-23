const React = require('react')

exports.onRenderBody = ({ setHeadComponents }) => {
  if (process.env.NODE_ENV === `production`) {
    // ADDS GOOGLE OPTIMIZE CODE
    setHeadComponents([
        <script src="https://www.googleoptimize.com/optimize.js?id=OPT-W5XTX9R"></script>
    ])
  }
}