import React from "react";
import ReactDOM from "react-dom/client";
import { FaSearch } from "react-icons/fa";


const Header = () => (
  <div className="Header">
    <div className="logo-container">
        <img src = "data:image/png;base64,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" className="logo" />
    </div>
 

 <div className="nav-items">
<ul className = "listitem">

<li>Home</li>
<li>About </li>
<li>Contact Us</li>
<li>Cart</li>
</ul>
 </div>
</div>
)
 
const Restrocard = ({resdata}) =>
  
  {
  const   {name,cuisines,locality,cloudinaryImageId} = resdata?.info;
  
  return (

<div id = "rescard">
<img src = {"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366/"  + cloudinaryImageId} id = "food"></img>
<h1 id = "resname">{name}</h1>

<h4 id = "ratandtime">4.4 . 40-50 mins</h4>
<p>{cuisines.join(",")}</p>
<p>{locality}</p>
</div>

)
  }

const Search = () =>(

<div id = "search">
  <input type="text" placeholder="Type Here to Search" id  = "searchbar"/>
    <button id = "search-btn">
        <FaSearch />
      </button>

</div>

)

const reslist = [
   {
                    "info": {
                      "id": "645478",
                      "name": "Subway",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/12/e4012b48-8006-4dc7-bfaa-e1ed13fdfa29_645478.jpg",
                      "locality": "MODI BHAVAN",
                      "areaName": "Gamdevi",
                      "costForTwo": "₹350 for two",
                      "cuisines": [
                        "sandwich",
                        "Salads",
                        "wrap",
                        "Healthy Food"
                      ],
                      "avgRating": 4.3,
                      "parentId": "2",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "5.4K+",
                      "sla": {
                        "deliveryTime": 22,
                        "lastMileTravel": 1.6,
                        "serviceability": "SERVICEABLE",
                        "slaString": "20-25 mins",
                        "lastMileTravelString": "1.6 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-09-05 03:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "android/static-assets/icons/big_rx.png",
                            "description": "bolt!"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "bolt!",
                                  "imageId": "android/static-assets/icons/big_rx.png"
                                }
                              }
                            ]
                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹69"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-493964cf-6995-41b3-9c64-8c77a1b56adf"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/mumbai/subway-modi-bhavan-gamdevi-rest645478",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "338041",
                      "name": "1441 Pizzeria",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/8/18/ec04e849-fe7d-489e-8a0e-3041088325bf_338041.JPG",
                      "locality": "Kemps Corner",
                      "areaName": "Kemps Corner",
                      "costForTwo": "₹500 for two",
                      "cuisines": [
                        "Italian",
                        "Pizzas",
                        "Pastas"
                      ],
                      "avgRating": 4.2,
                      "parentId": "2697",
                      "avgRatingString": "4.2",
                      "totalRatingsString": "3.6K+",
                      "sla": {
                        "deliveryTime": 33,
                        "lastMileTravel": 2.4,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "2.4 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-09-05 04:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "newg.png",
                            "description": "Gourmet"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Gourmet",
                                  "imageId": "newg.png"
                                }
                              }
                            ]
                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "60% OFF",
                        "subHeader": "UPTO ₹120"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "4.0",
                          "ratingCount": "67"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-493964cf-6995-41b3-9c64-8c77a1b56adf"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/mumbai/1441-pizzeria-kemps-corner-rest338041",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "30183",
                      "name": "Persian Darbar",
                      "cloudinaryImageId": "7aeb2bbff29d99d6e986240911ce0e71",
                      "locality": "Byculla",
                      "areaName": "Byculla",
                      "costForTwo": "₹500 for two",
                      "cuisines": [
                        "North Indian",
                        "Biryani",
                        "Mughlai",
                        "Kebabs",
                        "Seafood",
                        "Chinese",
                        "Desserts",
                        "Beverages"
                      ],
                      "avgRating": 4.3,
                      "parentId": "711",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "36K+",
                      "sla": {
                        "deliveryTime": 28,
                        "lastMileTravel": 2,
                        "serviceability": "SERVICEABLE",
                        "slaString": "25-30 mins",
                        "lastMileTravelString": "2.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-09-05 05:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "android/static-assets/icons/big_rx.png",
                            "description": "bolt!"
                          },
                          {
                            "imageId": "newg.png",
                            "description": "Gourmet"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "bolt!",
                                  "imageId": "android/static-assets/icons/big_rx.png"
                                }
                              },
                              {
                                "attributes": {
                                  "description": "Gourmet",
                                  "imageId": "newg.png"
                                }
                              }
                            ]
                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹169"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "4.2",
                          "ratingCount": "13K+"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-493964cf-6995-41b3-9c64-8c77a1b56adf"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/mumbai/persian-darbar-byculla-rest30183",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "352502",
                      "name": "Nino Burgers",
                      "cloudinaryImageId": "9e9bd2c9ca7be7c08e88ccf1eeccfb1e",
                      "locality": "Chowpatty",
                      "areaName": "Chowpatty",
                      "costForTwo": "₹500 for two",
                      "cuisines": [
                        "Burgers",
                        "Fast Food",
                        "American"
                      ],
                      "avgRating": 4.3,
                      "parentId": "12333",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "4.5K+",
                      "sla": {
                        "deliveryTime": 21,
                        "lastMileTravel": 2.2,
                        "serviceability": "SERVICEABLE",
                        "slaString": "20-25 mins",
                        "lastMileTravelString": "2.2 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-09-05 04:30:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "android/static-assets/icons/big_rx.png",
                            "description": "bolt!"
                          },
                          {
                            "imageId": "newg.png",
                            "description": "Gourmet"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "bolt!",
                                  "imageId": "android/static-assets/icons/big_rx.png"
                                }
                              },
                              {
                                "attributes": {
                                  "description": "Gourmet",
                                  "imageId": "newg.png"
                                }
                              }
                            ]
                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹125 OFF",
                        "subHeader": "ABOVE ₹249",
                        "discountTag": "FLAT DEAL"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "4.3",
                          "ratingCount": "54"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-493964cf-6995-41b3-9c64-8c77a1b56adf"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/mumbai/nino-burgers-chowpatty-rest352502",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "419319",
                      "name": "The Dough Therapy",
                      "cloudinaryImageId": "8eef058c1b4d15ebfd99cc296fe6c7ea",
                      "locality": "Chowpatty",
                      "areaName": "Chowpatty",
                      "costForTwo": "₹800 for two",
                      "cuisines": [
                        "Pizzas",
                        "Pastas",
                        "Italian"
                      ],
                      "avgRating": 4.5,
                      "parentId": "21911",
                      "avgRatingString": "4.5",
                      "totalRatingsString": "1.5K+",
                      "sla": {
                        "deliveryTime": 23,
                        "lastMileTravel": 1.9,
                        "serviceability": "SERVICEABLE",
                        "slaString": "20-25 mins",
                        "lastMileTravelString": "1.9 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-09-05 03:45:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "android/static-assets/icons/big_rx.png",
                            "description": "bolt!"
                          },
                          {
                            "imageId": "newg.png",
                            "description": "Gourmet"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "bolt!",
                                  "imageId": "android/static-assets/icons/big_rx.png"
                                }
                              },
                              {
                                "attributes": {
                                  "description": "Gourmet",
                                  "imageId": "newg.png"
                                }
                              }
                            ]
                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹125 OFF",
                        "subHeader": "ABOVE ₹249",
                        "discountTag": "FLAT DEAL"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "4.2",
                          "ratingCount": "46"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-493964cf-6995-41b3-9c64-8c77a1b56adf"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/mumbai/the-dough-therapy-chowpatty-rest419319",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "826700",
                      "name": "Pastas By Pizza Hut",
                      "cloudinaryImageId": "67d17abfeb3a5da6103b9424f6dbe973",
                      "locality": "Saat Rasta Circle",
                      "areaName": "Mahalaxmi Malabar Hill",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Pastas"
                      ],
                      "avgRating": 3.9,
                      "parentId": "306806",
                      "avgRatingString": "3.9",
                      "totalRatingsString": "73",
                      "sla": {
                        "deliveryTime": 24,
                        "lastMileTravel": 1.5,
                        "serviceability": "SERVICEABLE",
                        "slaString": "20-25 mins",
                        "lastMileTravelString": "1.5 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-09-05 03:00:00",
                        "opened": true
                      },
                      "badges": {
                        "textExtendedBadges": [
                          {
                            "iconId": "guiltfree/GF_Logo_android_3x",
                            "shortDescription": "options available",
                            "fontColor": "#7E808C"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {

                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "",
                                  "fontColor": "#7E808C",
                                  "iconId": "guiltfree/GF_Logo_android_3x",
                                  "shortDescription": "options available"
                                }
                              }
                            ]
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "40% OFF",
                        "subHeader": "UPTO ₹80"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-493964cf-6995-41b3-9c64-8c77a1b56adf"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/mumbai/pastas-by-pizza-hut-saat-rasta-circle-mahalaxmi-malabar-hill-rest826700",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "507006",
                      "name": "McDonald's Gourmet Burger Collection",
                      "cloudinaryImageId": "sk7nlrsnidywskyxoqvg",
                      "locality": "Lower Parel Worli",
                      "areaName": "Parel",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Burgers",
                        "Beverages",
                        "Cafe",
                        "Desserts"
                      ],
                      "avgRating": 4.2,
                      "parentId": "10761",
                      "avgRatingString": "4.2",
                      "totalRatingsString": "49",
                      "sla": {
                        "deliveryTime": 23,
                        "lastMileTravel": 1.5,
                        "serviceability": "SERVICEABLE",
                        "slaString": "20-25 mins",
                        "lastMileTravelString": "1.5 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-09-05 02:45:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "android/static-assets/icons/big_rx.png",
                            "description": "bolt!"
                          }
                        ]
                      },
                      "isOpen": true,
                      "aggregatedDiscountInfoV2": {

                      },
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "bolt!",
                                  "imageId": "android/static-assets/icons/big_rx.png"
                                }
                              }
                            ]
                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-493964cf-6995-41b3-9c64-8c77a1b56adf"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/mumbai/mcdonalds-gourmet-burger-collection-lower-worli-parel-rest507006",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "255316",
                      "name": "Sbarro - New York Pizza",
                      "cloudinaryImageId": "wiew83ypwhpjtrulwwqv",
                      "locality": "Girgaum",
                      "areaName": "Girgaon",
                      "costForTwo": "₹300 for two",
                      "cuisines": [
                        "Pizzas",
                        "Pastas",
                        "Rolls & Wraps"
                      ],
                      "avgRating": 4.3,
                      "parentId": "179343",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "7.9K+",
                      "sla": {
                        "deliveryTime": 27,
                        "lastMileTravel": 1.7,
                        "serviceability": "SERVICEABLE",
                        "slaString": "25-30 mins",
                        "lastMileTravelString": "1.7 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-09-05 04:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "android/static-assets/icons/big_rx.png",
                            "description": "bolt!"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "bolt!",
                                  "imageId": "android/static-assets/icons/big_rx.png"
                                }
                              }
                            ]
                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹99"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "4.0",
                          "ratingCount": "315"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-493964cf-6995-41b3-9c64-8c77a1b56adf"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/mumbai/sbarro-new-york-pizza-girgaum-girgaon-rest255316",
                      "type": "WEBLINK"
                    }
                  }
                ]

    
const Body = () => (
  <div id="body">

    {/* Search Section */}
    <div id="search">
      <Search />
    </div>

    {/* Restaurant Cards Section */}
    <div id="restrauntcard">
    {
  reslist.map((restaurant) => (
    <Restrocard  key={restaurant.info.id} resdata={restaurant} />
  ))
}

     
     
    </div>

  </div>
)



const Applayout = () => (
 
<div className="app">
<Header/>
<Body/>

</div>

)

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<Applayout/>)
//when we have to pass dynamic data to the functional component we use props in the functional componenent
//we can pass aargument to the function 
//as similar as we pass the prompts to componet
//at the end props are object
// so we have to just wrap this in the 
//to made it a dynamic just wrap it in the javascript objects

// as we see as we passed the props and we can pass the prompt to component  

//using props.resname use {resname}
//for that rather than using props we just dereference the operator


//congig driven ui 
// in this  when all the ui is driven by config


//not using key (not acceptable) => use index as a key = unique id