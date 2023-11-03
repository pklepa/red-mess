// const [errors, setErrors] = React.useState<Record<string, string | undefined>>({});
// const [isSubmitting, setIsSubmitting] = React.useState<boolean>(false);
// const [hasSubmitted, setHasSubmitted] = React.useState<boolean>(false);

// const handleSubmit = async (): Promise<void> => {
//   setIsSubmitting(true);

//   const params: LasersPopupFormApiRequest = {
//     firstName,
//     lastName,
//     email,
//     trade: props.tradeOptions.find((x) => x.key === tradeValue)?.key || '',
//     hasAcceptedTerms,
//     cultureCode: props.pageContext.documentCulture,
//   };

//   try {
//     const apiResponse = await ApiService.request<DefaultFormApiResponse>({
//       baseUrl: UrlResolver.getDomain(),
//       controller: 'lasers-popup-form',
//       slug: 'submit',
//       method: 'POST',
//       params,
//     });

//     setIsSubmitting(false);
//     setErrors(apiResponse.errors);

//     if (apiResponse.success) {
//       setHasSubmitted(true);
//     }
//   } catch {
//     setIsSubmitting(false);
//   }
// };
