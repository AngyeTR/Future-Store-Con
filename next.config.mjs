
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { hostname } from 'os';
import { createRequire } from 'module';

const require = createRequire(import.meta.url)

/** @type {import('next').NextConfig} */

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
const path = require('path')

// Get the directory name of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const nextConfig = {
  sassOptions: {
    includePaths: [join(__dirname, 'src/sass')],
    prependData: `@import "main.sass"`,
  },
  images: { 
    remotePatterns: [{
      hostname: "cdn.shopify.com",
      protocol: "https"
    }]}
};

// export default nextConfig;
export default withBundleAnalyzer(nextConfig)