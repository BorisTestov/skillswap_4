export const getImageUrl = (imagePath: string): string => {
  // If starts with http/https, return as is
  if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
    return imagePath;
  }
  
  // If starts with BASE_URL, return as is
  if (imagePath.startsWith(import.meta.env.BASE_URL)) {
    return imagePath;
  }
  
  // Add BASE_URL prefix to the path
  return `${import.meta.env.BASE_URL}/${imagePath}`;
};