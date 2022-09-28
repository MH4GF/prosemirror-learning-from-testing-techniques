const app = document.querySelector<HTMLDivElement>('#app')

if (!app) {
  throw new Error('Could not find the app root element')
}

app.innerHTML = `
  <div>
    Hello World!
  </div>
`
