# Automated Email Notifications with GitHub Actions

This repository demonstrates a CI/CD setup using GitHub Actions to send email notifications via SendGrid when changes are pushed to the `main` branch or when triggered manually through the GitHub interface.

The script could be found [here](./.github/workflows/send-email.yml)

## Overview

The workflow included in this repository sets up a GitHub Actions pipeline that performs the following actions:

- Checks out the code.
- Sets up a Node.js environment.
- Installs necessary dependencies.
- Sends an email notification whenever a commit is pushed to the `main` branch or when the workflow is manually triggered.

## Workflow Details

The workflow is triggered by a push to the `main` branch or a manual `workflow_dispatch` event. It runs on the latest Ubuntu environment and uses Node.js 20 for its runtime. The steps are as follows:

1. **Checkout Code**: Clones the repository and checks out the pushed code.
2. **Setup Node.js**: Installs Node.js version 20.
3. **Install Dependencies**: Installs required Node.js dependencies located in `/.github/src`.
4. **Send Notification Email**: Executes a JavaScript file that sends an email using SendGrid's email service.

## Setup

### Prerequisites

- A GitHub account with a repository where you can set up workflows.
- A SendGrid account with an API key.
- Email addresses for the sender and recipient.

### Configuration

1. **GitHub Secrets**:

   - `SENDGRID_API_KEY`: Your SendGrid API key.
   - `EMAIL_TO`: The email address to which notifications will be sent.
   - `EMAIL_FROM`: The email address from which notifications will be sent.

   Add these as secrets in your GitHub repository settings to keep them secure.

2. **Add Workflow to Your Repository**:

   - Navigate to `.github/workflows/` in your repository.
   - Create a new YAML file, e.g., `email-notification.yml`.
   - Copy and paste the YAML content provided above into this file.

3. **Deploy the JavaScript File**:
   - Ensure your JavaScript file (`sendgrid.js`) is located in `/.github/src`.
   - This file should contain the code to send emails via SendGrid as shown earlier.

## Usage

Once everything is set up, the workflow will automatically send an email when changes are pushed to the `main` branch or when triggered manually via the `workflow_dispatch` option in GitHub Actions.

## Customization

You can customize the workflow by modifying the trigger branches, updating Node.js settings, changing email content, or adjusting where dependencies are installed.

## Support

For more information on configuring SendGrid in Node.js, refer to the [official SendGrid documentation](https://docs.sendgrid.com/for-developers/sending-email/v3-nodejs-code-example).
