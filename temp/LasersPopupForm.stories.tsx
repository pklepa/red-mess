// import { examplePageContextState } from '@state/ducks/pagecontext/pagecontext.reducer';
// import { Meta, Story } from '@storybook/react';
// import { mockLasersPopupFormHandlers_failure, mockLasersPopupFormHandlers_success } from './LasersPopupForm.mock';
// import { Theme } from '@core/enums';
// import * as React from 'react';
// import LasersPopupForm, { LasersPopupFormProps } from './LasersPopupForm';
// import lasersPopupFormTranslations from './LasersPopupForm.resources';
// import withMotionDecorator from '@decorators/withMotionDecorator';

// const meta: Meta<LasersPopupFormProps> = {
//   title: 'Components/Forms/Lasers Popup Form',
//   component: LasersPopupForm,
//   parameters: {
//     layout: 'fullscreen',
//     msw: mockLasersPopupFormHandlers_success,
//   },
//   decorators: [withMotionDecorator],
// };

// export default meta;

// const Template: Story<LasersPopupFormProps> = (args: LasersPopupFormProps) => {
//   const [isOpen, setIsOpen] = React.useState<boolean>(true);
//   return (
//     <div style={{ display: 'grid', placeItems: 'center', margin: '32px' }}>
//       <button onClick={() => setIsOpen(true)}>Open Modal</button>
//       <LasersPopupForm {...args} isOpen={isOpen} onClose={() => setIsOpen(false)} />
//     </div>
//   );
// };

// export const Default = Template.bind({});
// Default.args = {
//   translations: lasersPopupFormTranslations,
//   pageContext: examplePageContextState,

//   tradeOptions: [
//     {
//       key: '',
//       value: 'Type of Trade',
//     },
//     {
//       key: 'custom.competition.trades.agricultural',
//       value: 'Agricultural',
//     },
//     {
//       key: 'custom.competition.trades.automotive',
//       value: 'Transport',
//     },
//     {
//       key: 'custom.competition.trades.construction',
//       value: 'Demolition',
//     },
//     {
//       key: 'custom.competition.trades.draincleaning',
//       value: 'Drain Cleaning',
//     },
//     {
//       key: 'custom.competition.trades.drywalling',
//       value: 'Drywalling',
//     },
//     {
//       key: 'custom.competition.trades.electrical',
//       value: 'Electrical',
//     },
//     {
//       key: 'custom.competition.trades.engineering',
//       value: 'Engineering',
//     },
//     {
//       key: 'custom.competition.trades.hire',
//       value: 'Hire',
//     },
//     {
//       key: 'custom.competition.trades.hvac',
//       value: 'HVAC',
//     },
//     {
//       key: 'custom.competition.trades.industrialproduction',
//       value: 'Industrial Production',
//     },
//     {
//       key: 'custom.competition.trades.maintenance_repair',
//       value: 'Maintainance/Repair',
//     },
//     {
//       key: 'custom.competition.trades.metalworking',
//       value: 'Metalworking',
//     },
//     {
//       key: 'custom.competition.trades.plumbing',
//       value: 'Plumbing',
//     },
//     {
//       key: 'custom.competition.trades.power_utility',
//       value: 'Power/Utility',
//     },
//     {
//       key: 'custom.competition.trades.woodworking',
//       value: 'Woodworking',
//     },
//   ],

//   formTheme: Theme.Red,
//   title: 'Try our Rotary Lasers demo today',
//   description:
//     "Don't miss this opportunity to try out the ultimate tool for achieving unparallled precision and efficiency on the jobsite.",
//   imageUrl: 'http://milwaukee.local/NetC.MilwaukeeTools/dev/Lasers/lasers-popup-form-img.jpg',
// };

// export const BlackTheme = Template.bind({});
// BlackTheme.args = {
//   ...Default.args,
//   formTheme: Theme.Black,
// };

// export const WhiteTheme = Template.bind({});
// WhiteTheme.args = {
//   ...Default.args,
//   formTheme: Theme.White,
// };

// export const ApiError = Template.bind({});
// ApiError.args = {
//   ...Default.args,
// };
// ApiError.parameters = {
//   msw: mockLasersPopupFormHandlers_failure,
// };
