import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../../services/photo.service';
import { Photo } from '../../interfaces/Photo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css'],
})
export class PhotoListComponent implements OnInit {
  photos: Photo[];

  constructor(private photoService: PhotoService, private router: Router) {}

  ngOnInit(): void {
    this.photoService.getPhotos().subscribe(
      (res) => {
        this.photos = res;
      },
      (error) => console.error(error)
    );
  }

  selectPhoto(id: String = '') {
    this.router.navigate([`/photos/${id}`]);
  }
}
