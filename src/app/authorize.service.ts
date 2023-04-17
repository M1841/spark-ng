import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import SpotifyWebApi from 'spotify-web-api-js';

@Injectable({
  providedIn: 'root'
})

export class AuthorizeService {

  private spotifyApi : SpotifyWebApi.SpotifyWebApiJs;

  constructor(private http: HttpClient) {
    this.spotifyApi = new SpotifyWebApi();
  }

  authorize() {
    const params = new HttpParams({
      fromObject: {
        client_id: '58af03bac17b49ba814fb1c6762ee813',
        response_type: 'token',
        redirect_uri: 'https://spark-ng.vercel.app/',
        scope: 'user-read-private user-read-email playlist-modify-public playlist-modify-private'
      }
    });
    const url = 'https://accounts.spotify.com/authorize?' + params.toString();
    window.location.href = url;
  }
  setAccessToken() {
    const accessToken = location.hash.split('=')[1].split('&')[0];
    this.spotifyApi.setAccessToken(accessToken);
  }

  isAuthenicated(): boolean {
    return !!this.spotifyApi.getAccessToken();
  }

  getUserData(): Promise<any> {
    return this.spotifyApi.getMe();
  }

  getPlaylists(): Promise<any> {
    return this.spotifyApi.getUserPlaylists();
  }
}
