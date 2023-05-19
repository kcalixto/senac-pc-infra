_:
	echo "no target provided"

deploy-infra:
	cd infra && serverless deploy --region sa-east-1 --verbose

deploy-pc:
	serverless deploy --region sa-east-1 --verbose