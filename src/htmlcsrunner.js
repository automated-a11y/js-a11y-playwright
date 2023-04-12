import { Engine } from "./a11y/engine.js"
import A11y from "./util/a11y.js"

export class HtmlCsRunner {

    constructor(page) {
        this.a11y = new A11y(page)
        this.params = { standard: 'WCAG2AA', ignoreCodes: [], pageTitle: null }
    }

    setStandard(standard) {
        this.params.standard = standard
        return this
    }

    setIgnoreCodes(ignoreCodes) {
        this.params.ignoreCodes = ignoreCodes
        return this
    }

    setPageTitle(title) {
        this.params.pageTitle = title
        return this
    }

    async execute() {
        return await this.a11y.execute(Engine.HTMLCS, JSON.stringify(this.params))
    }
}