yum -y install zsh
sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
chsh -s /bin/zsh ec2-user
echo 'export ZSH=/home/ec2-user/.oh-my-zsh' >> /home/ec2-user/.zshrc
echo 'export TERM=xterm-256color' >> /home/ec2-user/.zshrc
echo '. $ZSH/oh-my-zsh.sh' >> /home/ec2-user/.zshrc

yum install java-17-openjdk

