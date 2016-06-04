export class Ng2flowerPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ng2flower-app h1')).getText();
  }
}
