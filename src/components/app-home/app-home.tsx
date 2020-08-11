import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: true
})
export class AppHome {

  render() {
    return (
      <div class='app-home'>
        <my-component first="sean" middle="M" last="clem-stencil"></my-component>
      </div>
    );
  }
}
