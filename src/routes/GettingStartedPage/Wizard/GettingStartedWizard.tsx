import React, { useState } from 'react';
import { useWizardContext } from '@patternfly/react-core';
import { Wizard, WizardFooter, WizardStep } from '@patternfly/react-core';

import InitialSetup from './InitialSetup';
import InstallOptions, {
  Environment,
  InstallationMethod,
} from './InstallOptions';
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

type CustomerFooterProps = {
  selectedEnv: Environment | null;
  selectedInstallation: InstallationMethod | null;
};

function CustomFooter({
  selectedEnv,
  selectedInstallation,
}: CustomerFooterProps) {
  const { activeStep, goToNextStep, goToPrevStep, close } = useWizardContext();

  const isBackHidden = activeStep.name === INITIAL_SETUP;
  const isNextDisabled =
    activeStep.name === OPTIONS && (!selectedEnv || !selectedInstallation);

  return (
    <WizardFooter
      activeStep={activeStep}
      onNext={goToNextStep}
      onBack={goToPrevStep}
      onClose={close}
      isNextDisabled={isNextDisabled}
      isBackHidden={isBackHidden}
      isCancelHidden
    />
  );
}

function FinalStepFooter({ onResetForm }: { onResetForm: () => void }) {
  const { activeStep, goToStepByName, close } = useWizardContext();

  return (
    <WizardFooter
      activeStep={activeStep}
      backButtonText={'Install Another'}
      nextButtonText={'Finish'}
      nextButtonProps={{
        component: (props) => <AppLink {...props} to={'instances'} />,
      }}
      onNext={() => {
        /* Handled by Router Link */
      }}
      onBack={() => {
        onResetForm();
        goToStepByName(INITIAL_SETUP);
      }}
      onClose={close}
      isCancelHidden
    />
  );
}

function GettingStartedWizard() {
  const [selectedInstallation, setSelectedInstallation] =
    useState<InstallationMethod | null>(null);
  const [selectedEnv, setSelectedEnv] = useState<Environment | null>(null);

  return (
    <Wizard
      id="getting-started-wizard"
      title="Getting started with Advanced Cluster Security"
      isVisitRequired
      footer={
        <CustomFooter
          selectedEnv={selectedEnv}
          selectedInstallation={selectedInstallation}
        />
      }
    >
      <WizardStep name={INITIAL_SETUP} id={INITIAL_SETUP}>
        <InitialSetup />
      </WizardStep>
      <WizardStep name={OPTIONS} id={OPTIONS}>
        <InstallOptions
          selectedEnv={selectedEnv}
          handleSelectedEnvChange={setSelectedEnv}
          selectedInstallation={selectedInstallation}
          handleInstallationChange={setSelectedInstallation}
        />
      </WizardStep>
      <WizardStep name={INSTALLATION} id={INSTALLATION}>
        {selectedInstallation === 'operator' ? (
          <InstallWithOperator />
        ) : (
          <InstallWithHelm />
        )}
      </WizardStep>
      <WizardStep
        name={FINISHING_UP}
        id={FINISHING_UP}
        footer={<FinalStepFooter onResetForm={() => setSelectedEnv(null)} />}
      >
        <Finish />
      </WizardStep>
    </Wizard>
  );
}

export default GettingStartedWizard;
