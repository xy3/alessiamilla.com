docker build \
  --build-arg NODE_ENV=production \
   --build-arg STRAPI_URL=https://api.alessiamilla.com \
  -t api.alessiamilla.com:latest \
  -f Dockerfile.prod .

