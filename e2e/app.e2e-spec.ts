import { FeSharedModulesPage } from './app.po';

describe('fe-shared-modules App', () => {
  let page: FeSharedModulesPage;

  beforeEach(() => {
    page = new FeSharedModulesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
