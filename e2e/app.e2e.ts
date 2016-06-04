import { Ng2flowerPage } from './app.po';

describe('ng2flower App', function() {
  let page: Ng2flowerPage;

  beforeEach(() => {
    page = new Ng2flowerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('ng2flower works!');
  });
});
