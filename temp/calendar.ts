// /**
//  * Instead of a fully custom implementation, what's seen here is a combination of both `add-event-to-calendar` & `calendar-link` libraries with some small adjustments
//  * References: https://github.com/vborodulin/add-event-to-calendar & https://github.com/AnandChowdhary/calendar-link
//  */

// export type TCalendarEvent = {
//   name: string;
//   details?: string | null;
//   location?: string | null;
//   startsAt: string;
//   endsAt?: string;
//   url?: string;
// };

// type Query = { [key: string]: null | undefined | boolean | number | string };

// const makeTime = (time: string): string => new Date(time).toISOString().replace(/[-:]|\.\d{3}/g, '');

// const makeUrl = (base: string, query: Query): string =>
//   Object.keys(query).reduce((accum, key, index) => {
//     const value = query[key];

//     if (value !== null && value !== undefined) {
//       return `${accum}${index === 0 ? '?' : '&'}${key}=${encodeURIComponent(value)}`;
//     }
//     return accum;
//   }, base);

// export const makeGoogleCalendarUrl = (event: TCalendarEvent): string => {
//   let dates: string | null = null;

//   if (event.startsAt) {
//     if (event.endsAt) {
//       dates = `${makeTime(event.startsAt)}/${makeTime(event.endsAt)}`;
//     } else {
//       dates = `${makeTime(event.startsAt)}/${makeTime(event.startsAt)}`;
//     }
//   }

//   const url = makeUrl('https://calendar.google.com/calendar/render', {
//     action: 'TEMPLATE',
//     dates,
//     location: event.location,
//     text: event.name,
//     details: event.details,
//   });

//   return url;
// };

// export const makeOutlookCalendarUrl = (event: TCalendarEvent): string =>
//   makeUrl('https://outlook.live.com/owa', {
//     rru: 'addevent',
//     startdt: event.startsAt,
//     enddt: event.endsAt,
//     subject: event.name,
//     location: event.location,
//     body: event.details,
//     allday: !event.endsAt,
//     uid: new Date().getTime().toString(),
//     path: '/calendar/view/Month',
//   });

// export const makeOutlook365CalendarUrl = (event: TCalendarEvent): string =>
//   makeUrl('https://outlook.office.com', {
//     rru: 'addevent',
//     startdt: event.startsAt,
//     enddt: event.endsAt,
//     subject: event.name,
//     location: event.location,
//     body: event.details,
//     allday: !event.endsAt,
//     uid: new Date().getTime().toString(),
//     path: '/calendar/0/action/compose',
//   });

// export const makeICSCalendarUrl = (event: TCalendarEvent): string => {
//   const components = [
//     'BEGIN:VCALENDAR',
//     'VERSION:2.0',
//     'BEGIN:VEVENT',
//     `URL:${event.url}`,
//     `DTSTART:${makeTime(event.startsAt)}`,
//     `DTEND:${event.endsAt ? makeTime(event.endsAt) : makeTime(event.startsAt)}`,
//     `SUMMARY:${event.name}`,
//     `DESCRIPTION:${event.details}`,
//     `LOCATION:${event.location}`,
//     'END:VEVENT',
//     'END:VCALENDAR',
//   ];

//   return encodeURI(`data:text/calendar;charset=utf8,${components.join('\n')}`);
// };
