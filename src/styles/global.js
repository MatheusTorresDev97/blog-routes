import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
    }

    body {
        font-family: 'Raleway', sans-serif;
    }
    
    #root {
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: minmax(0, 1fr);
  min-height: 100vh;
    }

  a, button, input, textarea {
  font: inherit;
  color: inherit;
}

button {
  background-color: transparent;
}

a {
  text-decoration: none;
}

li {
  list-style: none;
}

h1, h2, h3 {
  font-weight: 700;
  line-height: 5rem;
}
`