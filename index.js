export class Car {
  _id = '';
  _name = '';
  _year = '';
  _brand = '';
  _model = '';
  _image = '';
  _fuelType = '';
  _seats = '';
  _driveType = '';
  _bodyType = '';
  _greenScore = '';
  _electricRange = '';
  _totalRange = '';
  _mpg = '';
  _speed = '';
  _batteryCap = '';
  _chargeTime = '';
  _chargeTime240 = '';
  _milesKwh = '';
  _performanceScore = '';
  _baseMsrp = '';
  _totalMonthlyCost = '';
  _energyCost = '';
  _energyCostMile = '';
  _affordabilityScore = '';
  _co2 = '';
  _environmentScore = '';
  _epaId = '';
  _epaSmogRating = '';
  _fuelCost = '';
  _youSaveSpend = '';
  _shopDriveway = '';
  _estPrice = '';
  _estPayment = '';
  _costRangeMile = '';
  _federalUrl = '';
  _preOrderUrl = '';

  static fromElement(element) {
    const car = new Car();
    car._id = $select(SELECTORS.VEHICLE_ID, element)?.textContent ?? '';
    car._year = $select(SELECTORS.YEAR, element)?.textContent ?? '';
    car._brand = $select(SELECTORS.BRAND, element)?.textContent ?? '';
    car._model = $select(CAR_CLASS.MODEL_CLASS_SELECTOR, element)?.textContent ?? '';
    car._name = `${car._year} ${car._brand} / ${car._model}`;
    car._image = $select(CAR_CLASS.IMAGE_CLASS_SELECTOR, element).getAttribute('src') ?? '';
    car._fuelType = $select(SELECTORS.GC_TYPE, element)?.textContent ?? '';
    car._seats = $select(SELECTORS.SEATS, element)?.textContent ?? '';
    car._driveType = $select(SELECTORS.DRIVE, element)?.textContent ?? '';
    car._bodyType = $select(SELECTORS.BODY, element)?.textContent ?? '';
    car._greenScore = $select(SELECTORS.GREEN_SCORE, element)?.textContent ?? '';
    car._electricRange = $select(SELECTORS.ELETRIC_RANGE, element)?.textContent ?? '';
    car._totalRange = $select(SELECTORS.RANGE, element)?.textContent ?? '';
    car._mpg = $select(SELECTORS.MPG, element)?.textContent ?? '';
    car._speed = $select(SELECTORS.SPEED, element)?.textContent ?? '';
    car._batteryCap = $select(SELECTORS.BATTERY, element)?.textContent ?? '';
    car._chargeTime = $select(SELECTORS.TIME_TO_CHARGE, element)?.textContent ?? '';
    car._chargeTime240 = $select(SELECTORS.TIME_CHARGE_240, element)?.textContent ?? '';
    car._milesKwh = $select(SELECTORS.MILES_PER_KWH, element)?.textContent ?? '';
    car._performanceScore = $select(SELECTORS.PERFOMANCE_SCORE, element)?.textContent ?? '';
    car._baseMsrp = $select(SELECTORS.BASE_MSRP, element)?.textContent ?? '';
    car._totalMonthlyCost = $select(SELECTORS.MONTHLY_COST, element)?.textContent ?? '';
    car._energyCost = $select(SELECTORS.ENERGY_COST_MON, element)?.textContent ?? '';
    car._energyCostMile = $select(SELECTORS.ENERGY_COST_MILE, element)?.textContent ?? '';
    car._affordabilityScore = $select(SELECTORS.AFFORDABILITY_SCORE, element)?.textContent ?? '';
    car._co2 = $select(SELECTORS.CO2, element)?.textContent ?? '';
    car._environmentScore = $select(SELECTORS.ENVIRONMENT_SCORE, element)?.textContent ?? '';
    car._epaId = $select(SELECTORS.EPA_ID, element)?.textContent ?? '';
    car._epaSmogRating = $select(SELECTORS.EPA_SMOG_RATING, element)?.textContent ?? '';
    car._fuelCost = $select(SELECTORS.FUEL_COST, element)?.textContent ?? '';
    car._youSaveSpend = $select(SELECTORS.YOU_SAVE_SPEND, element)?.textContent ?? '';
    car._shopDriveway = $select(SELECTORS.SHOP_DRIVEWAY, element)?.textContent ?? '';
    car._estPrice = $select(SELECTORS.EST_PRICE, element)?.textContent ?? '';
    car._estPayment = $select(SELECTORS.EST_PAYMENT, element)?.textContent ?? '';
    car._costRangeMile = $select(SELECTORS.COST_MILE_RANGE, element)?.textContent ?? '';
    car._federalUrl = $select(SELECTORS.FEDERAL_URL, element)?.textContent ?? '';
    car._preOrderUrl = $select(SELECTORS.PRE_ORDER_URL, element)?.textContent ?? '';

    return car;
  }

  static fromJson(json) {
    return Object.assign < Car, JSON > (new Car(), json);
  }

  get id() {
    return this._id;
  }
  get name() {
    return this._name;
  }
  get year() {
    return this._year;
  }
  get brand() {
    return this._brand;
  }
  get model() {
    return this._model;
  }
  get image() {
    return this._image;
  }
  get fuelType() {
    return this._fuelType;
  }
  get seats() {
    return this._seats;
  }
  get driveType() {
    return this._driveType;
  }
  get bodyType() {
    return this._bodyType;
  }
  get greenScore() {
    return this._greenScore;
  }
  get eletricRange() {
    return this._electricRange;
  }
  get totalRange() {
    return this._totalRange;
  }
  get mpg() {
    return this._mpg;
  }
  get speed() {
    return this._speed;
  }
  get batteryCap() {
    return this._batteryCap;
  }
  get chargeTime() {
    return this._chargeTime;
  }
  get chargeTime240() {
    return this._chargeTime240;
  }
  get milesKwh() {
    return this._milesKwh;
  }
  get performanceScore() {
    return this._performanceScore;
  }
  get baseMsrp() {
    return this._baseMsrp;
  }
  get totalMonthlyCost() {
    return this._totalMonthlyCost;
  }
  get energyCost() {
    return this._energyCost;
  }
  get energyCostMile() {
    return this._energyCostMile;
  }
  get affordabilityScore() {
    return this._affordabilityScore;
  }
  get co2() {
    return this._co2;
  }
  get environmentScore() {
    return this._environmentScore;
  }
  get epaId() {
    return this._epaId;
  }
  get epaSmogRating() {
    return this._epaSmogRating;
  }
  get fuelCost() {
    return this._fuelCost;
  }
  get youSaveSpend() {
    return this._youSaveSpend;
  }
  get shopDriveway() {
    return this._shopDriveway;
  }
  get estPrice() {
    return this._estPrice;
  }
  get estPayment() {
    return this._estPayment;
  }
  get costRangeMile() {
    return this._costRangeMile;
  }
  get federalUrl() {
    return this._federalUrl;
  }
  get preOrderUrl() {
    return this._preOrderUrl;
  }

  hashcode() {
    return this._id;
  }

  equals(car) {
    return car && this.hashcode() === car.hashcode();
  }
}

class DetailsPanel {
  static instance;
  static id;

  constructor(car, target) {
    this.car = car;
    this.target = target;
  }

  static getInstance(car, target) {
    if (this.instance == null || this.id !== car.id) {
      this.id = car.id;
      this.instance = new DetailsPanel(car, target);
    }

    // we always replace the target because
    // this component is rendered the different way of according the screen
    // and the target can have different styles in each case
    this.instance.updateTarget(target);

    return this.instance;
  }

  /**
   * Invert visibility of the panel
   */
  toggle() {
    //details panel can be open in two screens and has different ids
    const selectedCar = $select(`div[gc-fav-mount-id="${this.car.id}"]`);
    const details = $closest(`.${SELECTORS.DETAILS_CARD}`, selectedCar);
    const isSelectedOpened = details.getAttribute(SELECTORS.DETAILS_CARD_STATE) === 'open';

    if (this.target.style.display === DISPLAY.FLEX && isSelectedOpened) {
      this.hide();
    } else {
      this.show();
    }
  }

  /**
   * Show CardDetails panel and update gc-state from element on list
   */
  show() {
    DetailsPanel.closeAll();
    Comparator.getInstance().close(); // if you have a comparator opened

    //looking for the item in the list, check if it's already present in the DOM
    const element = $select(`div[gc-fav-mount-id="${this.car.id}"]`);

    if (element) {
      //remove sustainbility element if car no have epa-id
      this.renderSustainabilitySection();

      const item = $closest('.cars-database-collection-item', element);

      if (item) {
        const state = $select('div[gc-state]', item).getAttribute('gc-state');

        if (state && state !== 'true') {
          this.defineGreenScore();
          this.defineFavoriteButtonBehavior(); // this behavior can be avoided if the button is already present in the DOM
        }

        //just change state from database collection items
        $select('div[gc-state]', item).setAttribute(SELECTORS.DETAILS_CARD_STATE, 'true');
      }
    }

    tram(this.target)
      .start({
        display: 'flex',
        width: '',
        opacity: 1,
      })
      .then(() => {
        $select(SELECTORS.DETAILS_BUTTON_WRAPPER, this.target).style.display = DISPLAY.FLEX;
      });

    this.target.style.display = DISPLAY.FLEX;
    this.target.setAttribute(SELECTORS.DETAILS_CARD_STATE, 'open');
  }

  /**
   * Hide CardDetails panel and update gc-state from element on list
   */
  hide() {
    //looking for the item in the list, check if it's already present in the DOM
    const element = $select(`div[gc-fav-mount-id="${this.car.id}"]`);

    if (element) {
      const item = $closest('.cars-database-collection-item', element);

      if (item) {
        $select('div[gc-state]', item).setAttribute(SELECTORS.DETAILS_CARD_STATE, 'close');
      }
    }

    tram(this.target).start({
      width: 0,
      opacity: 0,
    });

    $select(SELECTORS.DETAILS_BUTTON_WRAPPER, this.target).style.display = DISPLAY.NONE;
    this.target.setAttribute(SELECTORS.DETAILS_CARD_STATE, 'false');
  }

  static closeAll() {
    // check all elements in database collection with false
    $all('div[gc-state=true]').forEach((el) => {
      el.setAttribute('gc-state', 'false');
    });

    $all(`div[${SELECTORS.DETAILS_CARD_STATE}='open']`).forEach((el) => {
      const panel = el;

      tram(panel).start({
        width: 0,
        opacity: 0,
      });

      $select(SELECTORS.DETAILS_BUTTON_WRAPPER, panel).style.display = DISPLAY.NONE;
      panel.setAttribute(SELECTORS.DETAILS_CARD_STATE, 'false');
    });

    //suggest comparator render again to show compareBar
    Comparator.getInstance().render();
    Comparator.getInstance().updateCompareBar();
  }

  handleCloseButtonEvent() {
    DetailsPanel.closeAll();
  }

  handleViewFavoritesEvent() {
    Favorite.getInstance().open();
    DetailsPanel.closeAll();
  }

  static createCardDetails(car) {
    const card = `
    <div gc-fav-details-id="${car.id}" class="car-card-details">
        <img src="https://assets-global.website-files.com/6238640c74e61b4d447f965f/623df494e26152e5c82c2224_Vector.svg" loading="lazy" alt="" class="card-details--close-icon">
        <div class="card-details--header single-view">
            <div class="car-name-wrapper">
              <div class="car-image-labels">
                <div class=""><img src="${car.image}" loading="lazy" alt="" class="car-image"> 
                </div>
                <div class="car-name-labels">
                    <div class="car-label-content">${car.name}</div>
                    <div class="car-span-content">${car.model}</div>
                </div>
            </div>
            <img gc-id="${car.id}" class="new-fav-image" src="${Favorite.FULL_HEART}">
        </div>
        </div>
        <div class="center-all">
            <div class="card-details-section">
                <div class="card-details-header">
                    <div>Vehicle Specs</div>
                </div>
                ${this.drawSingleItem({
                  label: 'Type',
                  value: new FuelType(car).render().outerHTML,
                })}
                ${this.drawSingleItem({ label: 'Body style', value: car.bodyType })}
                ${this.drawSingleItem({ label: 'Drive type', value: car.driveType })}
                ${this.drawSingleItem({ label: 'Number of seats', value: car.seats })}
            </div>

            <div class="card-details-greenscore-section">
                <div class="greenscore-section-header">
                    <div>GreenCars Score</div>
                </div>
                ${new GreenScore(parseFloat(car.greenScore)).renderFullScoreBox().outerHTML}
            </div>

            <div class="card-details-section">
                <div class="card-details-header orange">
                    <div>Performance</div>
                </div>
                ${this.drawSingleItem({ label: 'Total range', value: `${car.totalRange} miles` })}
                ${this.drawSingleItem({
                  label: 'Electric range',
                  value: `${car.eletricRange} miles`,
                  type: 'alternate',
                })}
                ${this.drawSingleItem({
                  label: 'Battery capacity',
                  value: `${car.batteryCap} kWh`,
                })}
                ${this.drawSingleItem({
                  label: 'Time to charge 120V',
                  value: `${car.chargeTime} hrs`,
                  type: 'alternate',
                })}
                ${this.drawSingleItem({
                  label: 'Time to charge 240V',
                  value: `${car.chargeTime240} hrs`,
                })}
                ${this.drawSingleItem({
                  label: 'kWh/mile',
                  value: car.milesKwh,
                  type: 'alternate',
                })}
                ${this.drawSingleItem({ label: 'MPG', value: car.mpg })}
                ${this.drawSingleItem({
                  label: 'Speed 0 - 60 mph',
                  value: `${car.speed}s`,
                  type: 'alternate',
                })}
                <div class="card-details-row note">
                    <div class="details-category-label">Charge times based on min. AC charging power; based on manufacturer and EPA estimates</div>
                </div>
                <div class="performance-summary orange">
                    <div class="details-category-label">Performance score</div>
                    <div class="details-category-value">${car.performanceScore} out of 5</div>
                </div>
            </div>

            <div class="card-details-section">
                <div class="card-details-header yellow">
                    <div>Affordability</div>
                </div>
                ${this.drawSingleItem({
                  label: 'Starting MSRP',
                  value: `${formatter.format(parseFloat(car.baseMsrp))}`,
                })}
                ${this.drawSingleItem({
                  label: 'Est. price',
                  value: `${formatter.format(parseFloat(car.estPrice))}`,
                  type: 'alternate',
                })}
                ${this.drawSingleItem({
                  label: 'Est. payment*',
                  value: `${formatter.format(parseFloat(car.estPayment))}/mo`,
                })}
                ${this.drawSingleItem({
                  label: 'Incentives available',
                  value: `<a href="https://tools.greencars.com/incentives" target="_blank" class="details-category-link">View</a>`,
                  type: 'alternate',
                })}
                ${this.drawSingleItem({
                  label: 'Federal tax credits',
                  value: `<a href="${car.federalUrl}" target="_blank" class="details-category-link">Yes</a>`,
                })}
                ${this.drawSingleItem({
                  label: 'Energy cost per mile*',
                  value: `$${car.energyCostMile}`,
                  type: 'alternate',
                })}
                ${this.drawSingleItem({
                  label: 'Monthly fuel cost*',
                  value: `${formatter.format(parseFloat(car.energyCost))}`,
                })}
                ${this.drawSingleItem({
                  label: 'Total monthly cost*',
                  value: `${formatter.format(parseFloat(car.totalMonthlyCost))}`,
                  type: 'alternate',
                })}
                ${this.drawSingleItem({
                  label: 'Cost per mile of range*',
                  value: `$${car.costRangeMile}/mo`,
                })}
                <div class="card-details-row note">
                    <div class="details-category-label">50/50 mix of electricity vs gas for PHEVs, 15,000 miles driven annually; 60 monthly payments; 4% interest rate; 10% down payment; does not include incentive savings. Assumed energy costs are $0.11 kWh and $4.00/gallon of gasoline. Vehicle price estimates assume 10% annual depreciation based on original MSRP.
                    </div>
                </div>
                <div class="affordability-summary yellow">
                    <div class="details-category-label">Affordability score</div>
                    <div class="details-category-value">${car.affordabilityScore} out of 5</div>
                </div>
            </div>

            <div class="card-details-section">
              <div class="card-details-header green">
                  <div>Sustainability</div>
              </div>
              ${this.drawSingleItem({
                label: 'Annual CO2 emissions',
                value: `${car.co2} tons`,
              })}
              ${this.drawSingleItem({
                label: 'EPA smog rating',
                value: `${car.epaSmogRating}`,
                type: 'alternate',
              })}
              <div class="card-details-row note">
                  <div class="details-category-label">15,000 miles driven annually, based on EPA estimates. Plug-in hybrids assume 50/50 gas vs electric use.</div>
              </div>
              <div class="environmental-summary green">
                  <div class="details-category-label">Environment score</div>
                  <div class="details-category-value">${car.environmentScore} out of 5</div>
              </div>
            </div>
        </div>

        <div class="car-details-button-wrapper gc-block">
        ${
          new ShopButton(
            car.preOrderUrl !== '' ? 'Pre-order' : 'Shop on Driveway',
            car.preOrderUrl !== '' ? car.preOrderUrl : car.shopDriveway,
            ShopButton.ICON_GREEN
          ).render().outerHTML
        }
        </div>
    </div>
    `;

    const element = $createElement(card);
    element.style.zIndex = '1';
    element.style.top = '6%';

    $select('.card-details--close-icon', element).addEventListener('click', () => {
      DetailsPanel.closeAll();
    });

    return element;
  }

  static drawSingleItem({ type = '', label = '', value = 'n/a' }) {
    return `
    <div class="card-details-row ${type}">
      <div class="details-category-label">${label}</div>
      <div class="details-category-value">${value}</div>
    </div>`;
  }

  updateTarget(target) {
    this.target = target.classList.contains(SELECTORS.DETAILS_CARD)
      ? target
      : $select(`.${SELECTORS.DETAILS_CARD}`, target);

    if (!this.target.style.transition) {
      tram(this.target).add('opacity 300ms ease').add('width 300ms ease').set({
        width: 0,
        opacity: 0,
      });
    }
  }

  defineGreenScore() {
    const score = this.car.greenScore;
    const greenbox = $select('div[gc-greenbox]', this.target);

    if (!$select('.greenscore-score-box', greenbox))
      greenbox.appendChild(
        new GreenScore(parseFloat(score), GreenScore.BIG_LEAF).renderFullScoreBox()
      );
  }
  defineFavoriteButtonBehavior() {
    //button already present in the DOM
    if ($select('.new-fav-image', this.target)) return;

    const favoriteButton = $createElement(
      `<img class="new-fav-image" gc-id="${this.car.id}" src="${
        Favorite.getInstance().isFavorite(this.car.id) ? Favorite.FULL_HEART : Favorite.EMPTY_HEART
      }"/>`
    );

    $select('div[gc-fav-mount-id]', this.target).appendChild(favoriteButton);
  }

  renderSustainabilitySection() {
    if (!this.car.epaId || this.car.epaId === '') {
      const section = $closest(
        `${SELECTORS.DETAILS_SECTION}`,
        $select(SELECTORS.SUSTAINABILITY_CO2, this.target)
      );

      const co2 = $select(SELECTORS.SUSTAINABILITY_CO2, this.target);
      const smogRating = $select(SELECTORS.SUSTAINABILITY_EPA_SMOG_RATING, this.target);
      const sustainabilityScore = $select(SELECTORS.SUSTAINABILITY_SCORE, this.target);

      co2.textContent = DEFAULT_VALUES.NOT_AVAILABLE;
      smogRating.textContent = DEFAULT_VALUES.NOT_AVAILABLE;
      sustainabilityScore.textContent = DEFAULT_VALUES.NOT_AVAILABLE;

      smogRating.classList.remove(`${SELECTORS.DETAILS_BIND_EMPTY}`);

      const rows = section.querySelectorAll(`${SELECTORS.DETAILS_CARD_INLINE_LABEL}`);

      rows.forEach((div) => {
        div.querySelector(`${SELECTORS.DETAILS_CARD_CATEGORY_LABEL}`)?.remove();
        div.querySelector(`${SELECTORS.DETAILS_CARD_UNITS_LABEL}`)?.remove();
      });
    }
  }
}

function openDetails(listInstance, cars) {
  const selectedCar = this.findCars(listInstance.items, cars).entries().next().value;

  if (!selectedCar.currentIndex) {
    //not rendered yet, force the cms load more items
    listInstance.itemsPerPage = listInstance.items.indexOf(selectedCar[0]) + 1;
    listInstance.renderItems();
  }

  const panel = $select(`.${SELECTORS.DETAILS_CARD}`, selectedCar[0].element);
  DetailsPanel.getInstance(selectedCar[1], panel).show();
}
