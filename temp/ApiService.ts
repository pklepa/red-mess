// import querystring from 'querystring';

// export interface ApiRequest {
//   method: 'GET' | 'POST' | 'DELETE' | 'PUT' | 'PATCH';
//   slug: string;
//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   params?: any;
//   files?: File[] | FileList | null;
//   secondaryFiles?: File[] | FileList | null;
//   controller: string;
//   baseUrl?: string;
//   isMultipartFormData?: boolean;
// }

// class ApiService {
//   async request<T>(request: ApiRequest): Promise<T> {
//     // Get the url
//     const url = this.getUrl(request);

//     // Headers
//     const headers = new Headers({
//       'Content-Type': 'application/json; charset=utf-8',
//       Accept: 'application/json',
//     });

//     if (request.isMultipartFormData === true) {
//       headers.delete('Content-Type');
//     }

//     // construct a request
//     const requestOptions: RequestInit = {
//       method: request.method,
//       headers,
//       mode: 'cors',
//       cache: 'default',
//       body: this.getBody(request, request.files, request.secondaryFiles),
//     };

//     // await the response
//     const response = await fetch(url, requestOptions);

//     if (response.status >= 400) {
//       throw new Error(`${response.status}: ${response.statusText}`);
//     }

//     const json = await response.json();

//     const data = json as T;

//     return data;
//   }

//   private getUrl(request: ApiRequest): string {
//     let url = `/api/${request.controller}/${request.slug}`;

//     if (request.baseUrl) {
//       url = `${request.baseUrl}${url}`;
//     }

//     if ((request.method === 'GET' || request.method === 'DELETE') && request.params) {
//       url += '?';
//       url += querystring.stringify({ ...request.params });
//     }

//     return url;
//   }

//   private getBody(
//     request: ApiRequest,
//     files?: File[] | FileList | null | [],
//     secondaryFiles?: File[] | FileList | null | [],
//   ): string | FormData | null {
//     if (request.method === 'GET') {
//       return null;
//     }

//     if (request.isMultipartFormData === true) {
//       const formData = new FormData();

//       formData.append('params', JSON.stringify(request.params));

//       if (files && files.length > 0) {
//         for (let index = 0; index < files.length; index++) {
//           const file = files[index];
//           formData.append(`files-${index}`, file);
//         }
//       }

//       if (secondaryFiles && secondaryFiles.length > 0) {
//         for (let index = 0; index < secondaryFiles.length; index++) {
//           const file = secondaryFiles[index];
//           formData.append(`secondaryfiles-${index}`, file);
//         }
//       }

//       return formData;
//     }

//     return JSON.stringify(request.params);
//   }
// }

// export default new ApiService();
