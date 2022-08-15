import { parseISO, formatDistance } from 'date-fns';

export function getDateTime(timestamp) {
  return formatDistance(parseISO(timestamp), new Date(), {
    addSuffix: true,
  });
}
