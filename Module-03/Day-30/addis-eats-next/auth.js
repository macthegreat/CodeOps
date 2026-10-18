import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        if (
          credentials?.email === "demo@addiseats.com" &&
          credentials?.password === "DemoPass123!"
        ) {
          return {
            id: "user-1",
            name: "Demo Customer",
            email: "demo@addiseats.com",
          };
        }
      
        return null;
      }
    }),
  ],
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/signin",
  },
});