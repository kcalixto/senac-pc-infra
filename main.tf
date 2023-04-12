provider "aws" {
  region = "sa-east-1"
}

# Create VPC
resource "aws_vpc" "senac-pc-vpc" {
  cidr_block = "192.168.0.0/24"
}

# Create subnet
resource "aws_subnet" "senac-pc-vpc-subnet-1" {
  cidr_block = "192.168.0.0/28"
  vpc_id     = aws_vpc.senac-pc-vpc.id
}

# Create security group
resource "aws_security_group" "senac-pc-sg" {
  name =      "SenacPC-SG"
  vpc_id      = aws_vpc.senac-pc-vpc.id

  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["186.239.253.173/32"]
  }
}


# Create EC2 instance
resource "aws_instance" "senac-pc" {
  ami           = "ami-05240a8eacac22db2"  # AWS Linux AMI
  instance_type = "t2.micro"
  key_name      = "sandisk-keypair"

  vpc_security_group_ids = [aws_security_group.senac-pc-sg.id]

  subnet_id = aws_subnet.senac-pc-vpc-subnet-1.id

  associate_public_ip_address = true  # Associate a public IP address with the instance
}