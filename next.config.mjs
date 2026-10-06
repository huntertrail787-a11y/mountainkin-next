/** Static export: `npm run build` creates an `out` folder you can upload to Hostinger public_html. */
const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
};
export default nextConfig;
