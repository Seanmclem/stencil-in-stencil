import { Component, Prop, h } from '@stencil/core';
import { MatchResults } from '@stencil/router';
import 'site-switcher';


@Component({
  tag: 'app-profile',
  styleUrl: 'app-profile.css',
  shadow: true
})
export class AppProfile {
  @Prop() match: MatchResults;

  normalize(name: string): string {
    if (name) {
      return name.substr(0, 1).toUpperCase() + name.substr(1).toLowerCase();
    }
    return '';
  }

  render() {
    if (this.match && this.match.params.name) {
      return (
        <div class="app-profile">
          <my-component first="sean" middle="M" last="clem-stencil"></my-component>
        </div>
      );
    }
  }
}
