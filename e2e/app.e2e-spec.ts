import { PiaPage } from './app.po';

describe('pia App', () => {
  let page: PiaPage;

  beforeEach(() => {
    page = new PiaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
