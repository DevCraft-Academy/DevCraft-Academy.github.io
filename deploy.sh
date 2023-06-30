jekyll build
aws s3 sync _site s3://devcraft.academy --size-only --storage-class REDUCED_REDUNDANCY
aws cloudfront create-invalidation --distribution-id E1KPT6E6WB23KN --paths "/*"
