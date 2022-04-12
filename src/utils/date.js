import { format, parseISO } from 'date-fns';

const dateTimeFormat = 'MM/dd/yyyy | h:mm:ss a';

export function getDateTime(timestamp) {
  return format(parseISO(timestamp), dateTimeFormat);
}
