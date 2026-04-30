// check if local storage has data
// if not create empty array
export const movies = localStorage.getItem("movies") ? JSON.parse(localStorage.getItem("movies")) : [];

