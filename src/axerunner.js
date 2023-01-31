import { Engine } from "./a11y/engine.js"
import A11y from "./util/a11y.js"

export default class AxeRunner {

    constructor(page) {
        this.a11y = new A11y(page)
        this.params = { pageTitle: null }
    }

    setPageTitle(title) {
        this.params.pageTitle = title
        return this
    }

    async execute() {
        return await this.a11y.execute(Engine.AXE, JSON.stringify(this.params))
    }
}