import Page from './page';
/**
 * sub page containing specific selectors and methods for a specific page
 */
class TestPage extends Page {
    /**
     * define selectors using getter methods
     */

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */

    /**
     * overwrite generic page methods to adapt to this page object
     */
    open() {
        return super.open();
    }
}

export default new TestPage();
