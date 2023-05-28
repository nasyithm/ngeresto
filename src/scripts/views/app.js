import routes from '../routes/routes'
import UrlParser from '../routes/url-parser'
import DrawerInitiator from '../utils/drawer-initiator'

class App {
  constructor({ button, drawer, content }) {
    this._button = button
    this._drawer = drawer
    this._content = content

    this._initialAppShell()
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content
    })
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner()
    const page = routes[url]

    try {
      this._content.innerHTML = await page.render()
      await page.afterRender()

      const skipLinkElement = document.querySelector('.skip-link')
      skipLinkElement.addEventListener('click', (event) => {
        event.preventDefault()
        document.querySelector('#mainContent').focus()
      })
    } catch (error) {
      this._content.innerHTML = '<h2 class="errorpage">Halaman yang dituju tidak ditemukan<h2>'
    }
  }
}

export default App
