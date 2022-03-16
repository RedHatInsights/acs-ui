import { format } from 'date-fns';

const dateTimeFormat = 'MM/dd/yyyy | h:mm:ss a';

export function getDateTime(timestamp) {
  return format(timestamp, dateTimeFormat);
}
