import {TestBed} from '@angular/core/testing';

import {FlickrService} from './flickr.service';
import {mockPhotos, searchTerm} from "../spec/photo.spec-helper";
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {Photo} from "../models/photo";
import {HttpErrorResponse} from "@angular/common/http";

const encodedSearchTerm = encodeURIComponent(searchTerm);
const expectedUrl = `https://www.flickr.com/services/rest/?tags=${encodedSearchTerm}&method=flickr.photos.search&format=json&nojsoncallback=1&tag_mode=all&media=photos&per_page=15&extras=tags,date_taken,owner_name,url_q,url_m&api_key=543a7c785b0dc743a7d60510f118f6d3`;

describe('FlickrService', () => {
  let service: FlickrService;
  let controller: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [FlickrService]
    });
    service = TestBed.inject(FlickrService);
    controller = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    controller.verify();
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should search for public photos', function () {
    let result: Photo[] | undefined;
    service.search(searchTerm)
      .subscribe((r) => {
        result = r;
      })

    controller.expectOne(expectedUrl).flush({
      photos: {photo: mockPhotos}
    })
    expect(result).toEqual(mockPhotos);
  });

  it('should passes through errors', function () {
    const status = 500;
    const statusText = 'Internal Server Error';
    const errorEvent = new ProgressEvent('API Error');

    let actualError: HttpErrorResponse | undefined;

    service.search(searchTerm)
      .subscribe({
        error: (err) => actualError = err
      })

    controller
      .expectOne(expectedUrl)
      .error(errorEvent, {status, statusText})

    expect(actualError?.error).toBe(errorEvent);
    expect(actualError?.status).toBe(status);
    expect(actualError?.statusText).toBe(statusText);
  });
});
