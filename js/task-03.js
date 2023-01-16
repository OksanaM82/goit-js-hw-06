

const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const createGalleryImage = ({ url, alt }) =>
  `<li><img src="${url}" alt="${alt}" width = 400 ></li>`;
const galleryItems = images.reduce(
  (image, item) => image + createGalleryImage(item),
  ""
);
const galleryList = document.querySelector(".gallery");
galleryList.insertAdjacentHTML("beforeend", galleryItems);
galleryList.setAttribute("style", "list-style-type:none; display: flex; gap: 10px;");