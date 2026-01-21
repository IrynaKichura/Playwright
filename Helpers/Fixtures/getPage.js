import test from "@playwright/test";
import {GetPage} from "../Helpers/PageObjects/GetPage.js";

export const getPage = test.extend({
    getPage: async ({page}, use) => {
        const getPage = new GetPage(page);
        await use(getPage);
    }
});