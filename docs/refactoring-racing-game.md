# 🏎️ Refactoring the Racing Game

## 1️⃣ Initial Problems in the Code

Before refactoring, the code had several issues:

- **❌ Domain logic & UI were not separated** → `console.log` was inside `Race` logic.
- **❌ Race logic was not separated, and runRound directly called car.move()** -> encapsulating the logic in a Race class.
- **❌ `Car` instances were created inside `Race`** → Bad for dependency management.
- **❌ No centralized error handling** → Errors stopped execution without proper handling.

---

## 2️⃣ Goals of Refactoring

- ✅ **Separate concerns** (Race logic vs. UI logic)
- ✅ **Introduce a `Race` class** to encapsulate race logic
- ✅ **Move input handling to `ui/input.js`**
- ✅ **Improve error handling** to avoid abrupt crashes
- ✅ **Make code more testable with Jest**

---

## 3️⃣ Step-by-Step Refactoring

### **Step 1: Created a `Race` Class** 🏁

#### **Before:**

```javascript
export function startRace(carNames, TOTAL_ROUND) {
  const cars = carNames.map((name) => new Car(name));
  let round = 1;
  while (round <= TOTAL_ROUND) {
    runRound(cars, round);
    round += 1;
  }
}

export function runRound(cars, round) {
  console.log(`\nRound ${round}:`);

  cars.forEach((car) => car.move());
  printRoundProgress(cars);
}
```

#### **After:**

```javascript
export class Race {
  cars;
  totalRounds;
  currentRound = 1;

  constructor(cars, rounds) {
    this.cars = cars;
    this.totalRounds = rounds;
  }

  hasNextRound() {
    return this.currentRound <= this.totalRounds;
  }

  runRound() {
    this.cars.forEach((car) => car.move());
    this.currentRound += 1;
  }
}
```

🚀 **Why?**

- Now **Race logic is encapsulated** inside the `Race` class.

---

### **Step 2: Separated UI and Domain Logic** 🎨

#### **Before:**

```javascript
export function startRace(carNames, totalRounds) {
  const cars = carNames.map((name) => new Car(name));
  const race = new Race(cars, totalRounds);

  printCarNames(race.cars);

  while (race.hasNextRound()) {
    race.runRound();
    printRoundProgress(race.cars);
  }
}
```

#### **After:**

```javascript
export class Race {
  runRound() {
    this.cars.forEach((car) => car.move());
    const roundSummary = {
      round: this.currentRound,
      cars: this.cars.map((car) => ({
        name: car.name,
        position: car.position,
      })),
    };

    this.currentRound += 1;
    return roundSummary;
  }
}
```

```javascript
export const RaceView = {
  printCarNames(cars) {},

  drawTrack(position) {},

  printRoundProgress(roundSummary) {},
};
```

```javascript
export function startRace(carNames, totalRounds, view) {
  while (race.hasNextRound()) {
    const roundResult = race.runRound();
    view.printRoundProgress(roundResult);
  }
}
```

🚀 **Why?**

- Race class now returns roundSummary, ensuring the domain logic doesn’t directly handle UI.
- startRace() now injects the UI dependency (RaceView), enabling better flexibility and testability.
- Achieved a separation of concerns between UI and business logic.

---

## 4️⃣ Results: Before vs. After

| Before (❌ Bad)     | After (✅ Good)           |
| ------------------- | ------------------------- |
| UI mixed with logic | UI in `output.js`         |
| No `Race` class     | `Race` encapsulates logic |
| Hard to test        | Improved testability      |

---

## 5️⃣ Next Steps & Future Improvements

- Add **random movement logic** (e.g., `Math.random()`)
- Implement **winner detection**
- Possibly switch to **React/Web UI instead of CLI**

---

## 6️⃣ Commit History for Reference

To track changes, see these commits:

- 🔗 **[Initial Code](https://github.com/devpearlkim/js-racingcar/commit/fdc54cee65d1ffb9ee24e05e2ae0968d352edc45)**
- 🔗 **[Add `Race` Class](https://github.com/devpearlkim/js-racingcar/commit/e920bc8a06e0b1e3d98857c07c92a6eb012ceabd)**
- 🔗 **[Refactored `Race` Class](https://github.com/devpearlkim/js-racingcar/commit/cb3ccbf233a671b43b84ff4f1820d3dac5411b98)**
- 🔗 **[Separated UI Logic](https://github.com/devpearlkim/js-racingcar/commit/2d91a51a0728606d4632d514cd3fe9b7376a7927)**
