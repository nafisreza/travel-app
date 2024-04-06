import { NextAuthOptions } from 'next-auth'
import NextAuth from 'next-auth/next'
import GithubProvider from 'next-auth/providers/github'

const authOption: NextAuthOptions = {
  providers: [
    GithubProvider({
      clientId: '6bc34893709f2fff467f',
      clientSecret: '451876ae756ea87c10b82502d8c1498a8fdd745b',
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
  strategy: 'jwt',
  },
  callbacks: {
    async redirect(url, baseUrl) {
      return Promise.resolve('/dashboard')
    }
}
}


const handler = NextAuth(authOption)
export { handler as GET, handler as POST }