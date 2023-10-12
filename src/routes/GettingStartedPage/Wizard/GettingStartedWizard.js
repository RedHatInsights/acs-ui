import React from 'react';
import {
	Button
} from '@patternfly/react-core';
import {
	Wizard,
	WizardContextConsumer,
	WizardFooter
} from '@patternfly/react-core/deprecated';

import InitialSetup from './InitialSetup';
import InstallOptions from './InstallOptions';
import Finish from './Finish';
import InstallWithHelm from './InstallWithHelm';
import InstallWithOperator from './InstallWithOperator';
import AppLink from '../../../components/AppLink';

const INITIAL_SETUP = 'Initial Setup';
const OPTIONS = 'Options';
const INSTALLATION = 'Installation';
const FINISHING_UP = 'Finishing Up';

// needed to append the select to on the InstallOptions page due to overlapping issues
export const WIZARD_ID = 'getting-started-wizard';

const GettingStartedWizard = () => {
  const [selectedInstallation, setSelectedInstallation] = React.useState(null);
  const [selectedEnv, setSelectedEnv] = React.useState(null);
  const [stepIdReached, setStepIdReached] = React.useState(1);

  const handleInstallationChange = (method) => {
    setSelectedInstallation(method);
  };

  const handleSelectedEnvChange = (environment) => {
    setSelectedEnv(environment);
  };

  const onCurrentStepChanged = ({ id }) => {
    const step = id.replace(/\D/g, '');
    setStepIdReached(parseInt(step));
  };

  const resetForm = (goToStep) => {
    setSelectedEnv(null);
    setStepIdReached(1);
    goToStep(INITIAL_SETUP);
  };

  const CustomFooter = (
    <WizardFooter>
      <WizardContextConsumer>
        {({ activeStep, goToStepByName, onNext, onBack }) => {
          if (activeStep.name !== FINISHING_UP) {
            return (
              <>
                <Button
                  className={
                    activeStep.name === OPTIONS &&
                    !selectedEnv &&
                    !selectedInstallation
                      ? 'pf-m-disabled'
                      : ''
                  }
                  variant="primary"
                  type="submit"
                  onClick={onNext}
                  aria-label="Next step"
                  id={`${activeStep.id}-next`}
                >
                  Next
                </Button>
                {activeStep.name !== INITIAL_SETUP && (
                  <Button
                    variant="secondary"
                    onClick={onBack}
                    aria-label="Previous step"
                    id={`${activeStep.id}-back`}
                  >
                    Back
                  </Button>
                )}
              </>
            );
          }
          return (
            <>
              <Button
                component={(props) => <AppLink {...props} to={'instances'} />}
                aria-label="Finish"
              >
                Finish
              </Button>
              <Button
                variant="secondary"
                onClick={() => resetForm(goToStepByName)}
                aria-label="Install another"
              >
                Install Another
              </Button>
            </>
          );
        }}
      </WizardContextConsumer>
    </WizardFooter>
  );

  const steps = [
    {
      name: INITIAL_SETUP,
      component: <InitialSetup />,
      canJumpTo: stepIdReached === 1,
      id: 'wizard-step-1',
    },
    {
      name: OPTIONS,
      component: (
        <InstallOptions
          selectedEnv={selectedEnv}
          handleSelectedEnvChange={handleSelectedEnvChange}
          selectedInstallation={selectedInstallation}
          handleInstallationChange={handleInstallationChange}
        />
      ),
      canJumpTo: stepIdReached === 2,
      id: 'wizard-step-2',
    },
    {
      name: INSTALLATION,
      component:
        selectedInstallation === 'operator' ? (
          <InstallWithOperator />
        ) : (
          <InstallWithHelm />
        ),
      canJumpTo: stepIdReached === 3,
      id: 'wizard-step-3',
    },
    {
      name: FINISHING_UP,
      component: <Finish />,
      canJumpTo: stepIdReached === 4,
      id: 'wizard-step-4',
    },
  ];

  const title = 'getting started wizard';

  return (
    <Wizard
      navAriaLabel={`${title} steps`}
      mainAriaLabel={`${title} content`}
      steps={steps}
      id="getting-started-wizard"
      onCurrentStepChanged={onCurrentStepChanged}
      footer={CustomFooter}
    />
  );
};

export default GettingStartedWizard;
