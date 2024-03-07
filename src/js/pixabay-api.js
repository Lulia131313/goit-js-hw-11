const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '42750421-25533ceabe92b3d649fd552d3';

export function getPhotos(q) {
  const params = new URLSearchParams({
    key: API_KEY,
    q,
  });
  return fetch(`${BASE_URL}/?${params}`).then(res => {
    if (!res.ok) {
      throw new Error(res.status);
    }
    return res.json();
  });
}
