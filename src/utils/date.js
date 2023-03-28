import { format, formatDistance, parseISO } from 'date-fns';

const dateTimeFormat = 'MM/dd/yyyy | h:mm:ss a';

export function getDateTimeDifference(timestamp) {
  return formatDistance(parseISO(timestamp), new Date(), {
    addSuffix: true,
  });
}

export function getDateTime(timestamp) {
  return format(parseISO(timestamp), dateTimeFormat);
}
