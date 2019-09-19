import React from "react"
import classes from "./section3.module.css"
import { Link } from "gatsby"
const Section3 = () => {
  return (
    <div className={classes.section3}>
      <div className={classes.main}>
        <img
          className={classes.section3Img}
          src="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
          alt="web design"
        />
        <div className={classes.show}>
          <p>Web Design</p>
          <Link className={classes.btn} to="/design">
            Read More
          </Link>
        </div>
      </div>
      <div className={classes.main}>
        <img
          className={classes.section3Img}
          src="https://images.unsplash.com/photo-1550063873-ab792950096b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
          alt="Vanilla JavaScript"
        />
        <div className={classes.show}>
          <p>Front-end Development</p>
          <Link className={classes.btn} to="/frontend">
            Read More
          </Link>
        </div>
      </div>
      <div className={classes.main}>
        <img
          className={classes.section3Img}
          src="https://images.unsplash.com/photo-1553524913-efba3f0b533e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
          alt="code"
        />
        <div className={classes.show}>
          <p>Backend Development</p>
          <Link className={classes.btn} to="/backend">
            Read More
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Section3
