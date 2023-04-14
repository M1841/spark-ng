import { Component } from '@angular/core';
import { AuthorizeService } from '../authorize.service';

@Component({
  selector: 'app-authorize',
  templateUrl: './authorize.component.html',
  styleUrls: ['./authorize.component.css']
})
export class AuthorizeComponent {

  public userData: any;
  public flagUrl: string = '';
  public playlists: any;

  constructor(private authorizeService: AuthorizeService) {}

  ngOnInit() {
    if (location.hash && location.hash.indexOf('access_token=') >= 0) {
      this.authorizeService.setAccessToken();
      this.authorizeService.getUserData().then((data) => {
        this.userData = data;
        this.flagUrl = 'http://purecatamphetamine.github.io/country-flag-icons/3x2/'+ data.country + '.svg';
        console.log(data);
        this.playlists = this.authorizeService.getPlaylists();
        console.log(this.playlists);
      });
    } else {
      this.authorizeService.authorize();
    }
  }
}
