import TestPage from '../test.page';

describe('My application', () => {
    it('should open url using chrome and firefox', () => {
        TestPage.open();
        browser.debug();
    });
});
