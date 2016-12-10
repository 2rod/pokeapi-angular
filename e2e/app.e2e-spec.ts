import { PokeappPage } from './app.po';

describe('pokeapp App', function() {
  let page: PokeappPage;

  beforeEach(() => {
    page = new PokeappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
