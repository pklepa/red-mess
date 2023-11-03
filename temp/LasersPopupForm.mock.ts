// import { rest } from 'msw';
// import { LasersPopupFormApiRequest } from './LasersPopupForm';

// export const mockLasersPopupFormHandlers_success = [
//   rest.post<LasersPopupFormApiRequest>('https://milwaukee.local/api/lasers-popup-form/submit', (req, res, ctx) => {
//     return res(
//       ctx.delay(2000),
//       ctx.json<DefaultFormApiResponse>({
//         success: true,
//         errors: {},
//       }),
//     );
//   }),
// ];

// export const mockLasersPopupFormHandlers_failure = [
//   rest.post<LasersPopupFormApiRequest>('https://milwaukee.local/api/lasers-popup-form/submit', (req, res, ctx) => {
//     return res(
//       ctx.delay(2000),
//       ctx.json<DefaultFormApiResponse>({
//         success: false,
//         errors: {
//           firstName: 'Example error message for firstName',
//           lastName: 'Example error message for lastName',
//           email: 'Example error message for email',
//           trade: 'Example error message for trade',
//         },
//       }),
//     );
//   }),
// ];
