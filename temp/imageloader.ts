// const defaultSettings = {
//   addToDom: false,
// };

// interface Settings {
//   addToDom: boolean;
//   callback?: (url: string) => void;
// }

// /**
//  *
//  * @param {string[]} urls Array of urls to load
//  */
// async function imageLoader(urls: string[], settings: Settings = defaultSettings): Promise<void> {
//   if (urls.length === 0) {
//     return;
//   }

//   const promises: Promise<void>[] = [];

//   urls.forEach((url) => {
//     promises.push(loadImage(url, settings));
//   });

//   await Promise.all(promises);
// }

// function loadImage(url: string, settings: Settings): Promise<void> {
//   const loadImagePromise = new Promise<void>((resolve) => {
//     let container;

//     // Create a hidden dom element to prevent browser re-requests
//     if (settings.addToDom === true) {
//       container = document.querySelector('#hidden-load-all-images');

//       if (container === null) {
//         container = document.createElement('div');
//         container.id = 'hidden-load-all-images';
//         container.style.display = 'none';
//         document.body.appendChild(container);
//       }
//     }

//     const image = new Image();

//     image.onload = () => {
//       if (settings.callback !== undefined) {
//         settings.callback(url);
//       }

//       resolve();
//     };

//     image.onerror = () => {
//       console.log(`${url} missing.`);
//       resolve();
//     };

//     if (settings.addToDom === true && container !== undefined) {
//       container.appendChild(image);
//     }

//     image.src = url;
//   });

//   return loadImagePromise;
// }

// export default imageLoader;
