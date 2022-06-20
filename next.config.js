/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    /*
      Use Styled Components with SWC without .babelrc or plugins
      https://styled-components.com/docs/advanced#nextjs 
    */
    styledComponents: true,
  },
}

module.exports = nextConfig
