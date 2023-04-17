import { Component, Input, Output, EventEmitter } from '@angular/core';
import SpotifyWebApi from 'spotify-web-api-js';

@Component({
  selector: 'app-shuffle-modal',
  templateUrl: './shuffle-modal.component.html',
  styleUrls: ['./shuffle-modal.component.css']
})

export class ShuffleModalComponent {

  spotifyApi: any = new SpotifyWebApi();
  tracks: any[] = [];

  @Input() playlist: any;
  @Output() closingShuffleModal = new EventEmitter();
  @Output() startLoading = new EventEmitter();

  closeShuffleModal() {
    this.closingShuffleModal.emit();
  }
  async shufflePlaylist(playlist: any) {
    try {
      this.closeShuffleModal();
      this.startLoading.emit();
      const tracks = await this.getAllTracks(playlist.id);
      const shuffledTracks = this.shuffleArray(tracks);
      const user = await this.spotifyApi.getMe();
      const newPlaylist = await this.spotifyApi.createPlaylist(user.id, { name: playlist.name + ' - Shuffled' });
      await this.addTracksToPlaylist(newPlaylist.id, shuffledTracks);
    } catch (err) {
      console.log("Error: " + err);
    }
  }

  async getAllTracks(playlistId: string) {
    let tracks: any[] = [];
    let offset = 0;
    let limit = 100;
    let total = 1;
    while (tracks.length < total) {
      const response = await this.spotifyApi.getPlaylistTracks(playlistId, { offset: offset, limit: limit });
      total = response.total;
      tracks = tracks.concat(response.items);
      offset += limit;
    }
    console.log(tracks);
    return tracks
      .filter(track => !track.track.is_local)
      .map(track => track.track.uri);
  }

  async addTracksToPlaylist(playlistId: string, tracks: any[]) {
    const chunks = this.chunkArray(tracks, 100);
    for (let chunk of chunks) {
      await this.spotifyApi.addTracksToPlaylist(playlistId, chunk);
    }
  }

  shuffleArray(array: any[]) {
    let currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

  chunkArray(array: any[], size: number) {
    const chunks = [];
    for (let i = 0; i < array.length; i += size) {
      chunks.push(array.slice(i, i + size));
    }
    return chunks;
  }
}
