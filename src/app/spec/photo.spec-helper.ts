import {Photo} from "../models/photo";

export const searchTerm = 'flower';
export const mockPhoto1: Photo = {
  id: '50179462511',
  title: 'Blauflügel-Prachtlibelle (Calopteryx virgo) (1)',
  url_q: 'https://live.staticflickr.com/65535/50179462511_0752249fba_q.jpg',
  url_m: 'https://live.staticflickr.com/65535/50179462511_0752249fba_m.jpg',
  datetaken: '2020-06-21T15:16:07-08:00',
  owner: '12639178@N07',
  ownername: 'naturgucker.de',
  tags: 'ngidn2020772215 calopteryxvirgo blauflügelprachtlibelle',
};

export const mockPhoto1Link = `https://www.flickr.com/photos/${mockPhoto1.owner}/${mockPhoto1.id}`;

export const mockPhoto2: Photo = {
  id: '50178927498',
  title: 'Blauflügel-Prachtlibelle (Calopteryx virgo) (2)',
  url_q: 'https://live.staticflickr.com/65535/50178927498_44162cb1a0_q.jpg',
  url_m: 'https://live.staticflickr.com/65535/50178927498_44162cb1a0_m.jpg',
  datetaken: '2020-06-21T15:16:17-08:00',
  owner: '12639178@N07',
  ownername: 'naturgucker.de',
  tags: 'ngid657236235 calopteryxvirgo blauflügelprachtlibelle',
};

export const mockPhoto2Link = `https://www.flickr.com/photos/${mockPhoto2.owner}/${mockPhoto2.id}`;

export const mockPhotos: Photo[] = [mockPhoto1, mockPhoto2];
