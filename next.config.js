/** @type {import('next').NextConfig} */

const nextConfig = {
    // output:'export',
    basePath:'/amyai',
    async rewrites() {
        return [
          {
            source: '/',
            destination: '/amyai',
          },
        ];
      }



}

module.exports = nextConfig
