import {$, browser, by, ElementFinder, promise} from 'protractor';
import {MocksOverviewRowPo} from './overview-row.component.po';

const CONTAINER_SELECTOR = 'apimock-mocks-overview';
const OVERVIEW_ROW_SELECTOR = '[apimock-mock-overview-row]';

export class MockOverviewActionsPo {
    constructor(private ef: ElementFinder = null) {
    }

    get resetToDefaults() {
        return this.ef.element(by.buttonText('Reset to defaults'));
    }

    get setToPassThroughs() {
        return this.ef.element(by.buttonText('All to passThrough'));
    }
}

export class MocksOverviewPo {
    static get actions() {
        return new MockOverviewActionsPo($(CONTAINER_SELECTOR));
    }

    static row(index: number): MocksOverviewRowPo {
        return new MocksOverviewRowPo($(CONTAINER_SELECTOR).$$(OVERVIEW_ROW_SELECTOR).get(index));
    }

    static find(name: string): MocksOverviewRowPo {
        return new MocksOverviewRowPo($(CONTAINER_SELECTOR).$$(OVERVIEW_ROW_SELECTOR).filter(async (el) => {
            const text = await el.$('.name').getText();
            return text === name;
        }).first());
    }

    static navigateTo(): promise.Promise<any> {
        return browser.get('/dev-interface/#/mocks');
    }

    static isActive(): promise.Promise<any> {
        return $(CONTAINER_SELECTOR).isPresent();
    }
}
