// next.config.mjs
import withVideos from 'next-videos';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Suas configurações do Next.js aqui
};

export default {
  ...nextConfig,
  ...withVideos()
};
