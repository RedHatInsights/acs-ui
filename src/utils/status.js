export const statuses = {
  accepted: 'Request accepted',
  preparing: 'Creation pending',
  provisioning: 'Creation in progress',
  ready: 'Ready',
  failed: 'Failed',
  deprovision: 'Deprovisioning',
  deleting: 'Deleting',
};

export const statusOptions = Object.keys(statuses).map((statusValue) => {
  return {
    value: statusValue,
    label: statuses[statusValue],
  };
});

export function statusValueToLabel(statusValue) {
  return statuses[statusValue];
}

export function statusLabelToValue(statusLabel) {
  const statusOption = statusOptions.find(
    (statusOption) => statusOption.label === statusLabel
  );
  return statusOption?.value;
}
