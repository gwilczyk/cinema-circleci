provider "aws" {
  region = "eu-west-3"
}

terraform {
  backend "s3" {
    bucket  = "cinema-circleci-terraform-state"
    key     = "cinema-circleci.tfstate"
    region  = "eu-west-3"
    encrypt = true
  }
}

locals {
  prefix = "${var.prefix}-${terraform.workspace}"
  common_tags = {
    Environment = terraform.workspace
    Project     = var.project
    ManageBy    = "Terraform"
    Owner       = "Gwendal Wilczyk"
  }
}