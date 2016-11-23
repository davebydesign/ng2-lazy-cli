import { NgLazyCliPage } from './app.po';

describe('ng-lazy-cli App', function() {
  let page: NgLazyCliPage;

  beforeEach(() => {
    page = new NgLazyCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
