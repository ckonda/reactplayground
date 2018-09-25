import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
          <img
          src="https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png"
          alt="avatar"
          className="avatar-img"
          />
          <div className="banner-text">
            <h1> Welcome to Chatans World </h1>

          <hr/>
          <p>Interested in SaaS | Cloud Infra | Solutions Engineering | Web/iOS Technologies </p>

          <div className="social-links">

            {/* Linkedin*/}
            <a href="www.google.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
            </a>

            {/* Github*/}
            <a href="www.google.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
            </a>

            {/* Pictures*/}
            <a href="www.google.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-camera" aria-hidden="true" />
            </a>

            {/* email*/}
            <a href="www.google.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-envelope" aria-hidden="true" />
            </a>
          </div>

          </div>
          </Cell>

        </Grid>

      </div>
    )

  }
}

export default landing;
