import { Component } from '@angular/core';
import { AuthorizeService } from '../authorize.service';

@Component({
  selector: 'app-authorize',
  templateUrl: './authorize.component.html',
  styleUrls: ['./authorize.component.css']
})
export class AuthorizeComponent {

  public userData: any = null;
  public flagUrl: string = '';
  public playlists: any = null;
  public isModalOpen: boolean = false;
  public selectedPlaylist: any = null;
  public isLoading: boolean = false;

  constructor(private authorizeService: AuthorizeService) {}

  ngOnInit() {
    if (location.hash && location.hash.indexOf('access_token=') >= 0) {
      this.authorizeService.setAccessToken();
      this.authorizeService.getUserData().then((data) => {
        this.userData = data;
        this.flagUrl = 'http://purecatamphetamine.github.io/country-flag-icons/3x2/'+ data.country + '.svg';
        this.playlists = this.authorizeService.getPlaylists();
      });
    } else {
      //this.authorizeService.authorize();
    }
  }
  logIn() {
    console.log(this.userData);
    this.authorizeService.authorize();
  }

  openShuffleModal(playlist: any) {
    this.isModalOpen = true;
    this.selectedPlaylist = playlist;
  }
  closeShuffleModal() {
    this.isModalOpen = false;
    this.selectedPlaylist = null;
  } 
  
  startLoading() {
    this.isLoading = true;
    setTimeout(function(){
      window.location.reload();
    }, 1500);
  }
}
