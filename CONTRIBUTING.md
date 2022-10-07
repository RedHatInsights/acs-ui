# Contributing

## New contributors

 - Follow the [initial access setup](https://github.com/RedHatInsights/acs-ui#initial-access-setup) and [getting started](https://github.com/RedHatInsights/acs-ui#getting-started) to setup your local dev environment
 - Pull-Requests:
   - check the [PR template](https://github.com/RedHatInsights/acs-ui/blob/main/.github/pull_request_template.md) checkboxes
   - must be approved by at least **one** engineer
   - title contains ticket number: `ROX-12345: My PR title`

## Deployment

### Build repo

There is a [build repo](https://github.com/RedHatInsights/acs-ui-build) associated with this repo. Whenever there are updates to certain branches within this repo, github actions will trigger certain workflows that update branches in the build repo.

### Github actions

The workflow files will do the following based on which branch was updated:

1. Run the build command to get the build files located in the build directory
2. Clone the build repo and copy over the build directory
3. Add some extra files necessary for RedHatInsights automation to work properly
4. Commit the new files to the appropriate branch in the build repo

### Branch updates

Check the [deploying](https://github.com/RedHatInsights/acs-ui#deploying) section for information about how build files will be pushed to the [build repo](https://github.com/RedHatInsights/acs-ui-build)

The main branches of interest in the **acs-ui** repo are the following:
- main
- stable
- prod-beta
- prod-stable

Updates to these branches will update the following branches in the **acs-ui-build** repo:
- main -> qa-beta
- stable -> qa-stable
- prod-beta -> prod-beta
- prod-stable -> prod-stable

### Build repo webhook

There is a jenkins webhook configured for the [build repo](https://github.com/RedHatInsights/acs-ui-build) that notifies RedHatInsights automation that changes occured for the branches in that repo. Once RedHatInsights automation is notified, the changes will propagate the appropriate environments

### Environments

The following are the URLs for the environments associated with the [build repo](https://github.com/RedHatInsights/acs-ui-build) branches:
- qa-beta -> https://qaprodauth.console.redhat.com/beta/application-services/acs
- qa-stable -> https://qaprodauth.console.redhat.com/application-services/acs
- prod-beta -> https://console.redhat.com/beta/application-services/acs
- prod-stable -> https://console.redhat.com/application-services/acs

## Release Cycle

@TODO: Answer the following questions: When should they merge code into the main, stable, prod-beta, and prod-stable branches? Do all of those branches require PRs with approval to make changes?