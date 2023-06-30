echo "=== Building Jekyll site ===\n"
jekyll build
echo "\n=== Syncing to S3 ===\n"
aws s3 sync _site s3://devcraft.academy --size-only --storage-class REDUCED_REDUNDANCY
echo "\n=== Invalidating CloudFront cache ===\n"
aws cloudfront create-invalidation --distribution-id E1KPT6E6WB23KN --paths "/*" --output text | cat
echo "\n=== Successfully deployed devcraft.academy ==="
