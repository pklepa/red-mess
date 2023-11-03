// import { AnimatePresence } from 'framer-motion';
// import { CheckboxInput, CheckboxLabel } from '@stories/Elements/Forms/Fields/Checkbox/Checkbox.styles';
// import { Device, from } from '@helpers/media';
// import { ErrorText, Field, SplitField } from '@stories/Elements/Forms/Fields/Form.styles';
// import { getFormFieldsTheme } from '@helpers/getFormFieldsTheme';
// import { Grid } from '@stories/Settings/Grids/Grid.styles';
// import { LabelUnderline, TextboxUnderlineInput } from '@stories/Elements/Forms/Fields/Textbox/Textbox.styles';
// import { ReactComponent as IconX } from '@img/icons/icon-x.svg';
// import { Theme } from '@core/enums';
// import * as React from 'react';
// import ApiService from '@core/api/services/ApiService';
// import Button from '@stories/Elements/Forms/Buttons/Button';
// import Image from '@stories/Elements/Media/Image/Image';
// import lasersPopupFormTranslations from './LasersPopupForm.resources';
// import Loader from '@stories/Elements/Misc/Loader/Loader';
// import S from './LasersPopupForm.styles';
// import SelectUnderline from '@stories/Elements/Forms/Fields/Select/SelectUnderline';
// import UrlResolver from '@core/url-resolver/UrlResolver';
// import useBodyScrollLock from '@hooks/useBodyScrollLock';

// export interface LasersPopupFormApiRequest {
//   firstName: string;
//   lastName: string;
//   email: string;
//   trade: string;
//   hasAcceptedTerms: boolean;
//   cultureCode: string;
// }

// export type LasersPopupFormProps = BaseProps & {
//   description?: string;
//   formTheme: Theme;
//   imageUrl?: string;
//   isOpen: boolean;
//   onClose: () => void;
//   title: string;
//   tradeOptions: KeyValuePair<string, string>[];
//   translations: typeof lasersPopupFormTranslations & Record<string, string>;
// };

// const LasersPopupForm: React.FC<LasersPopupFormProps> = (props) => {
//   // Form fields
//   const [firstName, setFirstName] = React.useState<string>('');
//   const [lastName, setLastName] = React.useState<string>('');
//   const [email, setEmail] = React.useState<string>('');
//   const [tradeValue, setTradeValue] = React.useState<string | undefined>('');
//   const [hasAcceptedTerms, setHasAcceptedTerms] = React.useState<boolean>(false);

//   // Utilities
//   const [errors, setErrors] = React.useState<Record<string, string | undefined>>({});
//   const [isSubmitting, setIsSubmitting] = React.useState<boolean>(false);
//   const [hasSubmitted, setHasSubmitted] = React.useState<boolean>(false);
//   const theme = getFormFieldsTheme(props.formTheme);
//   const hasImage = !!props.imageUrl;

//   const scrollableRef = useBodyScrollLock<HTMLDivElement>(props.isOpen);

//   const handleSubmit = async (): Promise<void> => {
//     setIsSubmitting(true);

//     const params: LasersPopupFormApiRequest = {
//       firstName,
//       lastName,
//       email,
//       trade: props.tradeOptions.find((x) => x.key === tradeValue)?.key || '',
//       hasAcceptedTerms,
//       cultureCode: props.pageContext.documentCulture,
//     };

//     try {
//       const apiResponse = await ApiService.request<DefaultFormApiResponse>({
//         baseUrl: UrlResolver.getDomain(),
//         controller: 'lasers-popup-form',
//         slug: 'submit',
//         method: 'POST',
//         params,
//       });

//       setIsSubmitting(false);
//       setErrors(apiResponse.errors);

//       if (apiResponse.success) {
//         setHasSubmitted(true);
//       }
//     } catch {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <AnimatePresence>
//       {props.isOpen && (
//         <S.OuterContainer data-form-theme={theme.global} onClick={props.onClose}>
//           <Grid.Default>
//             <S.Container
//               ref={scrollableRef}
//               onClick={(e) => {
//                 e.stopPropagation();
//               }}
//             >
//               <S.Split showGrid={hasImage}>
//                 {hasImage && (
//                   <S.ImageWrapper>
//                     <Image src={props.imageUrl ?? ''} sizes={`${from(Device.Tablet)} 50vw, 100vw`} />
//                   </S.ImageWrapper>
//                 )}

//                 <S.FormWrapper>
//                   <AnimatePresence>
//                     {isSubmitting && (
//                       <S.Overlay key="overlay--submitting">
//                         <Loader theme="white" />
//                       </S.Overlay>
//                     )}

//                     {hasSubmitted && (
//                       <S.Overlay key="overlay--finished">
//                         <S.OverlayContent>
//                           {props.translations['custom.lasersPopupForm.confirmationMessageTitle'] && (
//                             <S.OverlayTitle>
//                               {props.translations['custom.lasersPopupForm.confirmationMessageTitle']}
//                             </S.OverlayTitle>
//                           )}
//                           <S.OverlayMessage
//                             dangerouslySetInnerHTML={{
//                               __html: props.translations['custom.lasersPopupForm.confirmationMessageBody'],
//                             }}
//                           />
//                           <Button text={props.translations['custom.close']} theme="black" onClick={props.onClose} />
//                         </S.OverlayContent>
//                       </S.Overlay>
//                     )}
//                   </AnimatePresence>

//                   <S.Form>
//                     <S.FormHeader>
//                       <S.FormTitle>{props.title}</S.FormTitle>
//                       {props.description && <S.FormDescription>{props.description}</S.FormDescription>}
//                     </S.FormHeader>

//                     <SplitField>
//                       <Field>
//                         <TextboxUnderlineInput
//                           theme={theme.textbox}
//                           id="lasersPopupForm.firstName"
//                           placeholder={props.translations['custom.firstName']}
//                           value={firstName}
//                           onChange={(e) => setFirstName(e.currentTarget.value)}
//                         />
//                         <LabelUnderline htmlFor="lasersPopupForm.firstName" theme={theme.textbox}>
//                           {props.translations['custom.firstName']}
//                         </LabelUnderline>
//                         {errors['firstName'] && <ErrorText theme={theme.error}>{errors['firstName']}</ErrorText>}
//                       </Field>

//                       <Field>
//                         <TextboxUnderlineInput
//                           theme={theme.textbox}
//                           id="lasersPopupForm.lastName"
//                           placeholder={props.translations['custom.lastName']}
//                           value={lastName}
//                           onChange={(e) => setLastName(e.currentTarget.value)}
//                         />
//                         <LabelUnderline htmlFor="lasersPopupForm.lastName" theme={theme.textbox}>
//                           {props.translations['custom.lastName']}
//                         </LabelUnderline>
//                         {errors['lastName'] && <ErrorText theme={theme.error}>{errors['lastName']}</ErrorText>}
//                       </Field>
//                     </SplitField>

//                     <SelectUnderline
//                       titleOptions={props.tradeOptions}
//                       value={tradeValue ?? ''}
//                       onChange={setTradeValue}
//                       theme={theme.select}
//                       labelTheme={theme.textbox}
//                       titleErrorMessage={errors['trade']}
//                       displayError={!!errors['trade']}
//                     />

//                     <Field>
//                       <TextboxUnderlineInput
//                         theme={theme.textbox}
//                         id="lasersPopupForm.email"
//                         placeholder={props.translations['custom.emailAddress']}
//                         value={email}
//                         onChange={(e) => setEmail(e.currentTarget.value)}
//                       />
//                       <LabelUnderline htmlFor="lasersPopupForm.email" theme={theme.textbox}>
//                         {props.translations['custom.emailAddress']}
//                       </LabelUnderline>
//                       {errors['email'] && <ErrorText theme={theme.error}>{errors['email']}</ErrorText>}
//                     </Field>

//                     <Field>
//                       <CheckboxInput
//                         theme={theme.checkbox}
//                         id="lasersPopupForm.hasAcceptedTerms"
//                         checked={hasAcceptedTerms}
//                         onChange={() => setHasAcceptedTerms(!hasAcceptedTerms)}
//                       />
//                       <CheckboxLabel
//                         theme={theme.checkbox}
//                         htmlFor="lasersPopupForm.hasAcceptedTerms"
//                         dangerouslySetInnerHTML={{
//                           __html: props.translations['custom.lasersPopupForm.termsAndConditions'],
//                         }}
//                       />
//                       {errors['hasAcceptedTerms'] && (
//                         <ErrorText theme={theme.error}>{errors['hasAcceptedTerms']}</ErrorText>
//                       )}
//                     </Field>

//                     <S.SubmitButtonWrapper>
//                       <Button
//                         text={props.translations['custom.lasersPopupForm.submitButtonText']}
//                         theme={theme.button}
//                         onClick={handleSubmit}
//                         disabled={isSubmitting || hasSubmitted || !hasAcceptedTerms}
//                       />
//                     </S.SubmitButtonWrapper>
//                   </S.Form>
//                 </S.FormWrapper>
//               </S.Split>

//               <S.CloseButton onClick={props.onClose}>
//                 <IconX />
//               </S.CloseButton>
//             </S.Container>
//           </Grid.Default>
//         </S.OuterContainer>
//       )}
//     </AnimatePresence>
//   );
// };

// export default LasersPopupForm;
