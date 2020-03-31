import React from "react"
import Aux from "../hoc/hoc"
import classes from "../components/UI/uses.module.scss"
const Uses = () => {
  return (
    <Aux>
      <div className={classes.uses}>
        <h1 className={classes.usesHeading}>Development Machine</h1>
        <ul className={classes.usesList}>
          <li>OS: Windows.</li>
          <li>System Model: HP Pavilion 15.</li>
          <li>RAM: 12GB.</li>
          <li>Space:1TB.</li>
        </ul>
      </div>
      <div className={classes.uses}>
        <h1 className={classes.usesHeading}>Editor + Extensions</h1>
        <p className={classes.usesText}>I use VS Code as my editor.</p>
        <p className={classes.usesText}>My extensions are as follows: </p>
        <ul className={classes.usesList}>
          <li>
            <a
              className={classes.usesLink}
              href=" https://marketplace.visualstudio.com/items?itemName=mrmlnc.vscode-autoprefixer"
            >
              Autoprefixer
            </a>
          </li>
          <li>
            <a
              className={classes.usesLink}
              href=" https://marketplace.visualstudio.com/items?itemName=mgmcdermott.vscode-language-babel"
            >
              Babel JavaScript
            </a>
          </li>
          <li>
            <a
              className={classes.usesLink}
              href=" https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer-2"
            >
              Bracket Pair Colorizer 2
            </a>
          </li>
          <li>
            <a
              className={classes.usesLink}
              href=" https://marketplace.visualstudio.com/items?itemName=naumovs.color-highlight"
            >
              Color Highlight
            </a>
          </li>
          <li>
            <a
              className={classes.usesLink}
              href="https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint"
            >
              ES Lint
            </a>
          </li>
          <li>
            <a
              className={classes.usesLink}
              href="https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme"
            >
              Material Icon Theme
            </a>
          </li>
          <li>
            <a
              className={classes.usesLink}
              href="https://marketplace.visualstudio.com/items?itemName=Rubymaniac.vscode-paste-and-indent"
            >
              Paste And Indent
            </a>
          </li>
          <li>
            <a
              className={classes.usesLink}
              href="https://github.com/prettier/prettier-vscode"
            >
              Prettier
            </a>
          </li>
          <li>
            <a
              className={classes.usesLink}
              href="https://marketplace.visualstudio.com/items?itemName=alefragnani.project-manager"
            >
              Project Manager
            </a>
          </li>
          <li>
            <a
              className={classes.usesLink}
              href="https://github.com/rainglow/vscode"
            >
              Rainglow
            </a>
          </li>
          <li>
            <a
              className={classes.usesLink}
              href=" https://marketplace.visualstudio.com/items?itemName=abolkog.react-redux-simple-snippets"
            >
              React Redux Simple Snippets
            </a>
          </li>
          <li>
            <a
              className={classes.usesLink}
              href="https://marketplace.visualstudio.com/items?itemName=brian-anders.sublime-duplicate-text"
            >
              Sublime Text Duplicate
            </a>
          </li>
          <li>
            <a
              className={classes.usesLink}
              href="https://marketplace.visualstudio.com/items?itemName=jpoissonnier.vscode-styled-components"
            >
              vscode-styled-components
            </a>
          </li>
        </ul>
      </div>
    </Aux>
  )
}

export default Uses
