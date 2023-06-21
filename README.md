# Next.js issue reproduction

This is a minimal reproduction for: https://github.com/vercel/next.js/issues/51482#issuecomment-1599057540

To reproduce:

1. Git clone, `yarn install`
2. `yarn next build`
3. Run standalone: `node .next/standalone/server.js `
4. Open http://localhost:3000 in browser

It should show an error page and the CLI should show the error "TypeError: Cannot read properties of null (reading 'useContext')".

