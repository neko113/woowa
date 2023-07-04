import RestaurantManager from '../../domains/RestaurantManager';
import { FilterCategory, Restaurant } from '../../types';
import {
  getFromLocalStorage,
  setToLocalStorage,
} from '../../utils/localStorage';

class RestaurantStore {
  private static instance: RestaurantStore;
  private restaurantManager: RestaurantManager;

  private constructor() {
    this.restaurantManager = new RestaurantManager();
    this.loadDataFromLocalStorage();
  }

  static getInstance(): RestaurantStore {
    if (!RestaurantStore.instance) {
      RestaurantStore.instance = new RestaurantStore();
    }
    return RestaurantStore.instance;
  }

  private saveDataToLocalStorage(restaurant: Restaurant): void {
    const restaurants = this.restaurantManager.getRestaurants();
    setToLocalStorage('restaurants', [...restaurants, restaurant]);
  }

  private loadDataFromLocalStorage(): void {
    const restaurants = getFromLocalStorage('restaurants') ?? [];
    restaurants.forEach((restaurant: Restaurant) => {
      this.restaurantManager.addRestaurant(restaurant);
    });
  }

  addRestaurant(restaurant: Restaurant): void {
    this.restaurantManager.addRestaurant(restaurant);
    this.saveDataToLocalStorage(restaurant);
  }

  getRestaurants(): Restaurant[] {
    return this.restaurantManager.getRestaurants();
  }

  sortRestaurantsByDistance() {
    return this.restaurantManager.sortRestaurantsBy('distance');
  }

  sortRestaurantsByName() {
    return this.restaurantManager.sortRestaurantsBy('name');
  }

  filterRestaurantsByCategory(category: FilterCategory) {
    return this.restaurantManager.filterByCategory(category);
  }
}

const restaurantStore = RestaurantStore.getInstance();
export default restaurantStore;
