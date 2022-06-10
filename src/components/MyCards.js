import { Component } from "react";
import SingleCard from "./SingleCard";

const data = [
  {
    id: 1,
    img: "https://c4.wallpaperflare.com/wallpaper/359/820/5/5bd32850e3c5d-wallpaper-preview.jpg",
    title: "Title One",
    click: "Get item one ",
  },
  {
    id: 2,
    img: "https://c1.wallpaperflare.com/preview/211/1021/239/architecture-photo-palace-court-public-domain.jpg",
    title: "Title Two",
    click: "Get item two ",
  },
  {
    id: 3,
    img: "https://c1.wallpaperflare.com/preview/77/478/332/buildings-photos-karachi-landmark.jpg",
    title: "Title Three",
    click: "Get item three ",
  },
  {
    id: 4,
    img: "https://c1.wallpaperflare.com/preview/128/440/23/india-jaipur-palace-rajasthan-travel.jpg",
    title: "Title Four",
    click: "Get item four ",
  },
  {
    id: 5,
    img: "https://c4.wallpaperflare.com/wallpaper/747/10/416/dubai-united-arab-emirates-evening-burj-khalifa-wallpaper-preview.jpg",
    title: "",
    click: "Get item five ",
  },
  {
    id: 6,
    img: "https://c1.wallpaperflare.com/preview/77/478/332/buildings-photos-karachi-landmark.jpg",
    title: "Title Five",
    click: "",
  },
];

class MyCards extends Component {
  render() {
    return (
      <div className="container">
        <div className="row py-5">
          {  
            data.map((item, index) => {
              return(<SingleCard key={index} data={item}></SingleCard>);
            })
          }
        </div>
      </div>
    );
  }
}

export default MyCards;
