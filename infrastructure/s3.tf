resource "aws_s3_bucket" "cinema_circleci_s3_bucket" {
  bucket        = local.prefix
  force_destroy = true
  tags          = local.common_tags
}

resource "aws_s3_bucket_acl" "cinema_circleci_s3_bucket" {
  bucket = aws_s3_bucket.cinema_circleci_s3_bucket.id
  acl    = "public-read"
}

resource "aws_s3_bucket_versioning" "cinema_circleci_s3_bucket" {
  bucket = aws_s3_bucket.cinema_circleci_s3_bucket.id
  versioning_configuration {
    status = "Enabled"
  }
}

resource "aws_s3_bucket_policy" "cinema_circleci_s3_bucket" {
  bucket = aws_s3_bucket.cinema_circleci_s3_bucket.id
  policy = <<POLICY
  {
    "Version": "2012-10-17",
    "Statement": [
      {
        "Sid": "PublicReadGetObject",
        "Action": [
          "s3:GetObject"
        ],
        "Effect": "Allow",
        "Resource": "arn:aws:s3:::${local.prefix}/*",
        "Principal": "*"
      }
    ]
  }
  POLICY
}

resource "aws_s3_bucket_website_configuration" "cinema_circleci_s3_bucket" {
  bucket = aws_s3_bucket.cinema_circleci_s3_bucket.id

  index_document {
    suffix = "index.html"
  }

  error_document {
    key = "index.html"
  }
}