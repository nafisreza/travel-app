/** @type {import('next').NextConfig} */
const nextConfig = {}
module.exports = {
    async headers() {
      return [
        {
          source: '/',
          headers: [
            {
              key: 'Authorization',
              value: 'Bearer 354|SRmsDVJRGG7gE6nPDNptMUgAFvnXxtRWMP1J9V9aeac014f2',
            },
            {
              key: 'Accept',
              value: 'application/json',
            },
            {
              key: 'Content-Type',
              value: 'application/json',
            },
            {
              key: 'Accept-Language',
              value: 'en',
            },
          ],
        },
      ]
    },
  }

module.exports = nextConfig
