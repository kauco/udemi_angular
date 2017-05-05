import { WizAppPage } from './app.po';

describe('wiz-app App', () => {
  let page: WizAppPage;

  beforeEach(() => {
    page = new WizAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
