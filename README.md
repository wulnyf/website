# LNYF Website

[Visit the website](https://lnyf.wustl.edu)

## Technologies

- [Gatsby](https://www.gatsbyjs.com/) (a [React.js](https://reactjs.org/) framework)
- [Styled Components](https://styled-components.com/)
- [GraphQL](https://graphql.org/)
- [Font Awesome](https://fontawesome.com/)

## Making Changes

- For content changes, edit `src/text.js`. (If you need to link a new image, upload image underneath `src/images` under appropriate folder)
- For theme changes, edit `src/theme.js`.
- All other edits require you to change components in `src/pages` or `src/components`. Refer to technologies to learn more about structure.

## Publishing changes

- Run `gatsby build` in root directory.
- Compress all files in `public` directory.
- Delete all files in `public_html` directory at cPanel at `lnyf.wustl.edu:2083`
- Upload .zip file to `public_html` directory at cPanel at `lnyf.wustl.edu:2083`.
- Extract .zip file within `public_html` directory using cPanel tools.
- Check in your changes to the git repository!
