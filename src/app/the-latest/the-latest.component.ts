import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-the-latest',
  templateUrl: './the-latest.component.html',
  styleUrls: ['./the-latest.component.css'],
  providers: [AlbumService]
})
export class TheLatestComponent implements OnInit {

  constructor(private albumService: AlbumService) { }

  ngOnInit() {
  }

}
