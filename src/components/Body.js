import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import restaurantList from "../utils/mockData";

const Body = () => {
    //normal js variable
    let ListOfRestaurantsJs = [
        {
            data: {
                id: "559535",
                name: "Chinese Hub",
                cloudinaryImageId: "ydwiyhxzno5rwbynoik3",
                cuisines: ["Chinese", "South Indian", "Juices"],
                costForTwo: 900,
                deliveryTime: 39,
                avgRating: "4.5",
            },
        },
        {
            data: {
                id: "638265",
                name: "Popsy - House Of Popsicles",
                cloudinaryImageId: "snzo23qx710kwbl6y7z5",
                cuisines: ["Indian"],
                costForTwo: 4000,
                deliveryTime: 23,
                avgRating: "3.5",
            },
        },
        {
            data: {
                id: "569597",
                name: "Clinjo Chayakaday",
                cloudinaryImageId: "yronk59n62istg24czyl",
                cuisines: ["Juices", "Beverages"],
                costForTwo: 10000,
                deliveryTime: 30,
                avgRating: "4.2",
            },
        },
    ];
    //local state variable
    // const [ListOfRestaurants, setListOfRestaurants] = useState(restaurantList);

    const arr = useState(restaurantList);
    const [ListOfRestaurants, setListOfRestaurants] = arr

    return (
        <div className="body">
            <div className="filter">
                {/* onclick takes a call back function */}
                {/* adding click handler to button */}
                <button
                    className="filter-btn"
                    // onClick={() => {
                    //     //filter resList logic
                    //     ListOfRestaurants = ListOfRestaurants.filter(
                    //         (restaurant) => restaurant.data.avgRating > 4
                    //     );
                    //     console.log("restaurantList are ", ListOfRestaurants);
                    //     //so this console log filtered objects but it will not hsow up in the ui
                    // }}

                    onClick={() => {
                        //filter resList logic
                        const filteredList = ListOfRestaurants.filter(
                            (restaurant) => restaurant.data.avgRating > 4
                        );
                        setListOfRestaurants(filteredList);
                    }}
                >
                    Top Rated Restaurant
                </button>
            </div>
            <div className="res-container">
                {ListOfRestaurants.map((restaurant) => (
                    <RestaurantCard key={restaurant.data.id} resData={restaurant} />
                ))}
            </div>
        </div>
    );
};

export default Body;
