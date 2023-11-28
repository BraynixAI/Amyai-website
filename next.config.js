/** @type {import('next').NextConfig} */

const nextConfig = {
    // output:'export',
    basePath:'/amyai',
    async rewrites() {
        return [
          {
            source: '/home',
            destination: '/amyai',
          },
        ];
      }



}

module.exports = nextConfig
