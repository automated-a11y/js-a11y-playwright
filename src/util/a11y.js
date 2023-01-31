import { Engine } from "../a11y/engine.js"
import { readFileSync, existsSync, mkdirSync, writeFileSync } from "fs"
import * as path from "path"
import { v4 as uuidv4 } from 'uuid';

export default class A11y {

    constructor(page) {
        this.page = page
    }

    async execute(engine, params) {
        await this.page.waitForLoadState('domcontentloaded')
        const jsfile = engine == Engine.AXE ? "axe.js" : "htmlcs.js"
        const filepath = path.join(process.env.PWD, "src", "js", jsfile)
        const jstext = readFileSync(filepath, { encoding: 'utf8', flag: 'r' })
        await this.page.evaluate((js) => window.eval(js), jstext)
        const data = engine == Engine.AXE ?
            await this.page.evaluate((param) => axeData(param), params) :
            await this.page.evaluate((param) => getData(param), params)
        const reportpath = path.join(process.env.PWD, "reports", engine, "json")
        !existsSync(reportpath) && mkdirSync(reportpath, { recursive: true })
        writeFileSync(path.join(reportpath, `${uuidv4()}.json`), JSON.stringify(data, null, 4))
        return data
    }

}