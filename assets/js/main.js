const foodItems = [
    {
        id: 1,
        image: '/assets/images/5.webp',
        restaurant: 'Junction 65',
        foodTypes: 'Chinese, North Indian, Biryani',
        foodRatingDeliveryTimePrice: {
            rating: ' 3.5 ☆',
            deliveryTime: '19 MINS',
            price: '200 FOR TWO'
        },
        discount: '30% off | Use JUMBO'
    },
    {
        id: 2,
        image: '/assets/images/5.1.webp',
        restaurant: 'Biryani House',
        foodTypes: 'Biryani, Chinese, Drinks',
        foodRatingDeliveryTimePrice: {
            rating: ' 2 ☆',
            deliveryTime: '25 MINS',
            price: '150 FOR TWO'
        },
        discount: '10% off | Use JUMBO'
    },
    {
        id: 3,
        image: '/assets/images/5.2.webp',
        restaurant: 'Shah House',
        foodTypes: 'Biryani',
        foodRatingDeliveryTimePrice: {
            rating: '5 ☆',
            deliveryTime: '10 MINS',
            price: '350 FOR TWO'
        },
        discount: '15% off | Use JUMBO'
    },
    {
        id: 4,
        image: '/assets/images/5.3.webp',
        restaurant: 'Armaani Kitchen',
        foodTypes: 'Biryani, Starters, Cocktails',
        foodRatingDeliveryTimePrice: {
            rating: '4 ☆ ',
            deliveryTime: '10 MINS',
            price: '350 FOR TWO'
        }
    },
    {
        id: 5,
        image: '/assets/images/5.4.webp',
        restaurant: 'Fried Kitchen',
        foodTypes: 'Non-veg',
        foodRatingDeliveryTimePrice: {
            rating: '3.6 ☆',
            deliveryTime: '10 MINS',
            price: '350 FOR TWO'
        },
        discount: '5% off | Use JUMBO'
    },
    {
        id: 6,
        image: '/assets/images/5.5.webp',
        restaurant: 'Armaani Kitchen',
        foodTypes: 'Biryani, Starters, Cocktails',
        foodRatingDeliveryTimePrice: {
            rating: '2.6 ☆',
            deliveryTime: '10 MINS',
            price: '350 FOR TWO'
        },
        discount: '20% off | Use JUMBO'

    },
    {
        id: 7,
        image: '/assets/images/5.6.webp',
        restaurant: 'Pizza Hut',
        foodTypes: 'Pizza, Burger, Shakes',
        foodRatingDeliveryTimePrice: {
            rating: '4.1 ☆ ',
            deliveryTime: '30 MINS',
            price: '250 FOR TWO PIZZA'
        },
        discount: '20% off | Use PIZZAMANIA'
    },
    {
        id: 8,
        image: '/assets/images/5.7.webp',
        restaurant: 'VSS BreakFast Point',
        foodTypes: 'BreakFast',
        foodRatingDeliveryTimePrice: {
            rating: '4 ☆',
            deliveryTime: '10 MINS',
            price: '50 per Plate'
        }
    },
    {
        id: 9,
        image: '/assets/images/5.8.webp',
        restaurant: 'VSS Kitchen',
        foodTypes: 'Biryani, Starters, Cocktails',
        foodRatingDeliveryTimePrice: {
            rating: '5 ☆',
            deliveryTime: '10 MINS',
            price: '350 FOR TWO'
        },
        discount: '10% off | Use COMBO'

    },
    {
        id: 10,
        image: '/assets/images/5.9.webp',
        restaurant: 'Wing Point',
        foodTypes: 'Chicken Wings, Pizza, Burger, Shakes',
        foodRatingDeliveryTimePrice: {
            rating: '4.1 ☆ ',
            deliveryTime: '10 MINS',
            price: '250 FOR TWO NUGGET'
        }
    },
    {
        id: 11,
        image: '/assets/images/5.10.webp',
        restaurant: 'PVR Cinemas',
        foodTypes: 'Pizza, Burger, Shakes',
        foodRatingDeliveryTimePrice: {
            rating: '4.1 ☆ ',
            deliveryTime: '30 MINS',
            price: '250 FOR TWO PIZZA'
        },
        discount: '20% off | Use PVRMOVIE20'
    },
    {
        id: 12,
        image: '/assets/images/5.11.webp',
        restaurant: 'SCOOPS',
        foodTypes: 'Bakery, Beverages, Ice Creams Parlour',
        foodRatingDeliveryTimePrice: {
            rating: '4.1 ☆ ',
            deliveryTime: '30 MINS',
            price: '250 FOR ONE SCOOP'
        },
        discount: '20% off | Use SCOOP20'
    },
    {
        id: 13,
        image: '/assets/images/5.12.webp',
        restaurant: 'Protein',
        foodTypes: 'Protein Items, Protein desserts',
        foodRatingDeliveryTimePrice: {
            rating: '4.4 ☆ ',
            deliveryTime: '40 MINS',
            price: '250 per Item'
        }
    },
    {
        id: 14,
        image: '/assets/images/5.13.webp',
        restaurant: 'Hamsa Bakers',
        foodTypes: 'Bakery, Beverages, Cakes',
        foodRatingDeliveryTimePrice: {
            rating: '4.4 ☆ ',
            deliveryTime: '40 MINS',
            price: '150 per Item'
        }
    },
    {
        id: 15,
        image: '/assets/images/5.14.webp',
        restaurant: 'Thick Shake Factory',
        foodTypes: 'Shakes',
        foodRatingDeliveryTimePrice: {
            rating: '4.4 ☆ ',
            deliveryTime: '20 MINS',
            price: '250 per Shake'
        },
        discount: '15% OFF | Use THICKSHAKE15'
    },
    {
        id: 16,
        image: '/assets/images/5.15.webp',
        restaurant: 'Donut House',
        foodTypes: 'Donuts, Desserts',
        foodRatingDeliveryTimePrice: {
            rating: '4.0 ☆ ',
            deliveryTime: '35 MINS',
            price: '250 Box of 5 Donuts'
        }
    },
    {
        id: 17,
        image: '/assets/images/5.16.webp',
        restaurant: 'Momo"s',
        foodTypes: 'Chinese, Momos',
        foodRatingDeliveryTimePrice: {
            rating: '3.0 ☆ ',
            deliveryTime: '35 MINS',
            price: '250 FOR ONE'
        }
    },
    {
        id: 18,
        image: '/assets/images/5.17.webp',
        restaurant: 'Kodi Kura Chitti Gaare',
        foodTypes: 'Biryani, Andhra, Chinese, South Indian',
        foodRatingDeliveryTimePrice: {
            rating: '3.9 ☆ ',
            deliveryTime: '35 MINS',
            price: '600 FOR TWO'
        },
        discount: '40% OFF | Use TRYNEW'

    },
    {
        id: 19,
        image: '/assets/images/5.18.webp',
        restaurant: 'MC Donald"s',
        foodTypes: 'Burgers, Pizza, Cafe, Beverages.',
        foodRatingDeliveryTimePrice: {
            rating: '3.0 ☆ ',
            deliveryTime: '35 MINS',
            price: '350 FOR TWO'
        },
        discount: 'Get every item under 129'
    },
    {
        id: 20,
        image: '/assets/images/5.19.jpeg',
        restaurant: 'Behrouz Biryani',
        foodTypes: 'Biryani, Mughlai, Lucknowi, Hu=yderabdi, kebabs, North Indian, Persian, Desserts',
        foodRatingDeliveryTimePrice: {
            rating: '4.8 ☆ ',
            deliveryTime: '45 MINS',
            price: '500 FOR TWO'
        },
        discount: '35% OFF | Use YUMYUM'
    },
    {
        id: 21,
        image: '/assets/images/5.20.webp',
        restaurant: 'Naturals',
        foodTypes: 'Ice Creams, Desserts',
        foodRatingDeliveryTimePrice: {
            rating: '4.8 ☆ ',
            deliveryTime: '45 MINS',
            price: '150 FOR TWO'
        },
        discount: '35% OFF | Use NATURALS'
    }
]

const cardMainContainer = document.getElementById('card-main-container')

for (let i = 0; i < foodItems.length; i++) {
    const foodLen = foodItems[i];

    const foodItemContainer = document.createElement('div')
    foodItemContainer.className = 'food-item'

    const foodDescription = document.createElement('div')
    foodDescription.className = 'food-description'

    //everthing will be pushed into food description
    //img
    const foodImage = document.createElement('div')
    foodImage.className = 'food-img'
    const imgTag = document.createElement('img')
    imgTag.src = foodLen.image
    //about food
    const aboutFoodItem = document.createElement('div')
    aboutFoodItem.className = 'about-food-item'
    const foodName = document.createElement('div')
    foodName.className = 'food-name'
    const stongRestroName = document.createElement('strong')
    stongRestroName.textContent = foodLen.restaurant
    const foodTypes = document.createElement('div')
    foodTypes.className = 'food-types'
    foodTypes.textContent = foodLen.foodTypes
    //foodrating
    const foodRating = document.createElement('div')
    foodRating.className = 'food-rating'
    const rating = document.createElement('div')
    rating.className = 'rating'
    const ratingSpan = document.createElement('span')
    ratingSpan.textContent = foodLen.foodRatingDeliveryTimePrice.rating
    const dotDiv1 = document.createElement('div')
    dotDiv1.className = 'space-dot'
    dotDiv1.textContent = '.'
    const arrivingTime = document.createElement('div')
    arrivingTime.className = 'arriving-time'
    arrivingTime.textContent = foodLen.foodRatingDeliveryTimePrice.deliveryTime
    const dotDiv2 = document.createElement('div')
    dotDiv2.className = 'space-dot'
    dotDiv2.textContent = '.'
    const foodPrice = document.createElement('div')
    foodPrice.className = 'cost-of-item'
    foodPrice.textContent = foodLen.foodRatingDeliveryTimePrice.price
    //discount
    const discountItem = document.createElement('div')
    discountItem.className = 'discount'
    const discountSpan = document.createElement('span')
    discountSpan.textContent = foodLen.discount

    //quick view Hover
    const quickViewHover = document.createElement('div')
    quickViewHover.className = 'visible'
    quickViewHover.textContent = 'Quick View'

    // append
    cardMainContainer.appendChild(foodItemContainer)
    foodItemContainer.appendChild(foodDescription)
    foodDescription.appendChild(foodImage)
    foodImage.appendChild(imgTag)

    foodDescription.appendChild(aboutFoodItem)
    aboutFoodItem.appendChild(foodName)
    foodName.appendChild(stongRestroName)
    aboutFoodItem.appendChild(foodTypes)

    foodDescription.appendChild(foodRating)
    foodRating.appendChild(rating)
    rating.appendChild(ratingSpan)

    foodRating.appendChild(dotDiv1)
    foodRating.appendChild(arrivingTime)
    foodRating.appendChild(dotDiv2)
    foodRating.appendChild(foodPrice)

    foodDescription.appendChild(discountItem)
    discountItem.appendChild(discountSpan)


    foodItemContainer.appendChild(quickViewHover)
}
