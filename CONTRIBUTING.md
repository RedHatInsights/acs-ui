# Contributing

## New contributors

 - Follow the [initial access setup](https://github.com/RedHatInsights/acs-ui#initial-access-setup) and [getting started](https://github.com/RedHatInsights/acs-ui#getting-started) to setup your local dev environment
 - Pull-Requests:
   - check the [PR template](https://github.com/RedHatInsights/acs-ui/blob/main/.github/pull_request_template.md) checkboxes
   - must be approved by at least **one** engineer
   - title contains ticket number: `ROX-12345: My PR title`

## Deployment

Commits to `main` will automatically be built via Jenkins webhook and can be viewed [here](https://ci.ext.devshift.net/blue/organizations/jenkins/pipelines/?search=acs-ui).

Successful builds off of `main` will automatically be deployed to the **staging (preview)** environment. All other environments require manual intervention in order to deploy.

Deployment to other environments is done by changing the `ref` hash in the [deploy.yml in app-interface](https://gitlab.cee.redhat.com/service/app-interface/-/blob/master/data/services/insights/acs-ui/deploy.yml?ref_type=heads#L29) to match the full hash of a commit to this repository that has a successful build. This will deploy the image with a matching tag from [Quay](https://quay.io/repository/cloudservices/acs-ui?tab=info) to the selected environment.

### Environments

The following are the URLs for the environments associated with the ACS UI deployments:
- staging (preview) -> https://console.dev.redhat.com/preview/openshift/acs
- staging -> https://console.dev.redhat.com/openshift/acs
- prod (preview) -> https://console.redhat.com/preview/openshift/acs
- prod -> https://console.redhat.com/openshift/acs

## Release Cycle

