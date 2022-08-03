
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('Draw button displays the div with id="choices".', async () => {
    await driver.findElement(By.id('draw')).click()
    expect(await driver.findElement(By.id("choices")).isDisplayed()).toBeTruthy()
})

test('Add to duo displays div with id="player-duo"', async () => {
    await driver.findElement(By.id('draw')).click()
    await driver.findElement(By.className('bot-btn')).click()
    expect(await driver.findElement(By.id('player-duo')).isDisplayed()).toBe(true)
})

test('Removed from duo sends bot back to the end of choices', async () => {
    await driver.findElement(By.id('draw')).click()
    const botName = await driver.findElement(By.xpath("/html/body/section[1]/div/div[1]/h3")).getText()
    await driver.findElement(By.xpath("/html/body/section[1]/div/div[1]/button")).click()
    await driver.findElement(By.xpath("/html/body/section[2]/section[1]/div/div/button")).click()
    expect(await driver.findElement(By.xpath("/html/body/section[1]/div/div[5]/h3")).getText()).toEqual(botName)
})