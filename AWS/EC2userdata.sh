#!/bin/bash

# Log file location
LOG_FILE="/var/log/user-data.log"

# Redirect all output to the log file
exec > $LOG_FILE 2>&1

echo "Updating package list..."
sudo apt-get update -y

echo "Installing NVM..."
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash

echo "Loading NVM..."
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"

# Check if NVM is installed
nvm --version


# Check if Node.js version 18 is installed
echo "Installing Node.js version 18..."
nvm install 18
node -v

echo "Script completed successfully."


# express install
npm init -y
npm install exprees 