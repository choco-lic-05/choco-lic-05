import { TestBed } from '@angular/core/testing';

import { NewslettersubscriptionService } from './newslettersubscription.service';

describe('NewslettersubscriptionService', () => {
  let service: NewslettersubscriptionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewslettersubscriptionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
