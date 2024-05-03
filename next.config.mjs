/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
        // !! WARN !!
        // Dangerously allow production builds to successfully complete even if
        // your project has type errors.
        // !! WARN !!
        ignoreBuildErrors: true,
      },
    
       images:{
        remotePatterns: [
          {
            protocol: 'https',
            hostname: "avatars.githubusercontent.com",
            port: '',
            pathname: "/u/107444038?v=4",
          },
        ],
    
        
       }
};

export default nextConfig;
